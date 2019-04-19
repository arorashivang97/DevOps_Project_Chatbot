FROM node:8

ADD ./messenger-webhook /code

WORKDIR /code

RUN npm install

EXPOSE 1337

CMD [ "node", "index.js" ]