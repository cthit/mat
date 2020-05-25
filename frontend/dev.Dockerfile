FROM node:14
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --network-timeout 10000000
COPY src src
COPY public public
CMD yarn start
