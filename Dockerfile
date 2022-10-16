FROM node:14.18.3 AS build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV HTTP_URL=https://66cb-45-235-53-71.ngrok.io
ENV WEBSOCKET_URL=wss://66cb-45-235-53-71.ngrok.io

COPY ./package.json /app/
COPY ./yarn.lock /app/

RUN yarn
COPY . /app
RUN yarn build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]