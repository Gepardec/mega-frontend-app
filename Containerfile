### STAGE 1: Build ###
FROM node:18-alpine AS build

ENV WORKDIR=/work

COPY . ${WORKDIR}
WORKDIR ${WORKDIR}

# TODO tests (and lint)
RUN npm ci \
    && node ./node_modules/.bin/nx run mega-frontend-app:build:production

### STAGE 2: Run ###
FROM bitnami/nginx:latest

ENV WORKDIR=/work
ENV APPNAME=mega-frontend-app
ENV NGINX_DIR=/opt/bitnami/nginx
ENV APP_DEST_DIR=${WORKDIR}/dist/apps/${APPNAME}/browser

COPY nginx-config/nginx.conf ${NGINX_DIR}/conf/nginx.conf
COPY --from=build ${APP_DEST_DIR} ${NGINX_DIR}/html/

CMD ["/bin/bash", "-c", \
"nginx -g 'daemon off;'"]
