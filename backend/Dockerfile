FROM node:13.7.0
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY src src
CMD node src/index.js