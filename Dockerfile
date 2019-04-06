FROM node:8

ADD . /code

WORKDIR /code

COPY package*.json ./

RUN npm install

EXPOSE 1337

CMD [ "node", "index.js" ]