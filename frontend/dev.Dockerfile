from node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /package.json

RUN yarn install 
RUN yarn global add react-scripts 

CMD yarn start