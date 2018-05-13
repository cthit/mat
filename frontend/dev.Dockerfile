FROM node:latest

WORKDIR /frontend

COPY /package.json /frontend/package.json

WORKDIR /frontend
RUN npm install

EXPOSE 3000

CMD yarn start