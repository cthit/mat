FROM node:13.2.0
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install nodemon -g
COPY src src
CMD nodemon -L ./src/index.js