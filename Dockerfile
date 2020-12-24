FROM node:12.15-alpine3.10

RUN mkdir /app

WORKDIR /app

COPY ./package.json /app
COPY ./yarn.lock /app
COPY .env /app
COPY . . 

RUN npm install 
RUN npm install -g @nestjs/cli

CMD ["npm", "run", "start:dev"]