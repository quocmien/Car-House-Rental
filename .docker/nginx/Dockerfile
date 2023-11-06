FROM nginx:stable-alpine

ARG APP_DOMAIN
ARG NGINX_SSL
ARG NGINX_APP
ARG NGINX_ROOT

ENV APP_DOMAIN $APP_DOMAIN
ENV NGINX_SSL $NGINX_SSL
ENV NGINX_APP $NGINX_APP
ENV NGINX_ROOT $NGINX_ROOT

RUN apk update && apk add \
    bash

COPY nginx.conf /etc/nginx/nginx.conf

COPY vhosts/vhost.sh /etc/nginx/vhost.sh
RUN chmod +x /etc/nginx/vhost.sh
RUN cd /etc/nginx && bash ./vhost.sh

EXPOSE 80
EXPOSE 443