from node:9.11.1 as build

COPY /package.json /package.json
COPY /yarn.lock /yarn.lock

RUN ls -l

RUN yarn install

RUN ls -l

COPY . .

RUN ls -l

CMD yarn start