#!/usr/bin/env bash
CONFIG_FILE="/etc/nginx/conf.d/default.conf"
PROXY_TEXT=""

if [ "$NGINX_PROXY" = true ]; then
    PROXY_TEXT="
        location / {
            proxy_pass http://$NGINX_APP;
            proxy_set_header Host \$http_host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
        }
    "
fi

if [ "$NGINX_SSL" = true ]; then
cat > $CONFIG_FILE <<-EOF
server {
    listen 80;
    server_name $APP_DOMAIN;
    return 301 https://$APP_DOMAIN\$request_uri;
}

server {
    client_max_body_size 100m;
    listen 443 ssl;
    index index.php index.html;
    server_name $APP_DOMAIN;
    error_log  /var/log/nginx/error_manual.log;
    access_log /var/log/nginx/access_manual.log;
    root $NGINX_ROOT;

    ssl_certificate /etc/nginx/ssl-cert.crt;
    ssl_certificate_key /etc/nginx/ssl-cert.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    $PROXY_TEXT
}
EOF
else
cat > $CONFIG_FILE <<-EOF
server {
    listen 80;
    client_max_body_size 100m;
    index index.php index.html;
    server_name $APP_DOMAIN;
    error_log  /var/log/nginx/error_manual.log;
    access_log /var/log/nginx/access_manual.log;
    root $NGINX_ROOT;

    $PROXY_TEXT
}
EOF
fi