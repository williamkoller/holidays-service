FROM node:12.15-alpine3.10

RUN mkdir /app

WORKDIR /app

COPY package.json /app
COPY .env /app

RUN npm install 

CMD ["npm", "run", "start:dev"]