from node:latest as build

COPY /package.json /
RUN yarn install

COPY . .
RUN yarn build

from nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /build /usr/share/nginx/html