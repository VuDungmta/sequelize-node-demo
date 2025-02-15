# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /src

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
COPY ./src  . 
COPY . .

CMD [ "node", "server.js" ]