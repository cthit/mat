FROM node:14
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn cache clean
RUN yarn install --network-timeout 10000000 --force
COPY src src
COPY public public
RUN yarn list
CMD yarn start