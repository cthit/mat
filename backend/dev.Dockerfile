FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install
RUN npm install nodemon -g

CMD nodemon -L SushiMe.jsx