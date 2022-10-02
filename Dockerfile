FROM node:14.17.0-alpine

WORKDIR /app
ENV VERSION={{version}}
COPY ./node_modules ./node_modules
COPY ./dist ./dist
COPY ./package.json ./package.json

CMD [ "yarn", "start:prod" ]
