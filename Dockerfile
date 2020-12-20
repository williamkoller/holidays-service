FROM node:12.15-alpine3.10

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000 

CMD ["npm", "run", "start:dev"]