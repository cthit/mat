from node:9.11.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /package.json

RUN yarn install 
RUN yarn global add react-scripts 

CMD yarn start