FROM node:14.15.1-alpine3.10

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run","start:dev" ]