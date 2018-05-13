FROM node:latest

RUN mkdir -p /backend_docker
RUN cd /backend_docker

COPY /package.json /backend_docker/package.json
WORKDIR /backend_docker

RUN npm install
RUN npm install nodemon -g

COPY . /backend_docker

EXPOSE 8080

CMD nodemon -L index.js