FROM node:18-alpine as install
ENV APP_ROOT /app
WORKDIR ${APP_ROOT}
COPY ["package.json", "./"]
RUN apk update
RUN yarn install

FROM node:18-alpine as app
ENV APP_ROOT /home/ubuntu/myapp
WORKDIR ${APP_ROOT}
COPY . .
RUN chmod 777 ./.docker/docker-entrypoint.sh
COPY --from=install /app/yarn.lock .
COPY --from=install /app/node_modules ./node_modules