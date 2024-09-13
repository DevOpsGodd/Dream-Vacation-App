FROM node:18.19-alpine


ENV NODE_OPTIONS=--openssl-legacy-provider


WORKDIR /app


COPY  package*.json ./


RUN npm install


COPY . .


EXPOSE 3001


CMD [ "node", "server.js" ]