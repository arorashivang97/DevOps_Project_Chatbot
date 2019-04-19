FROM node:7.8-slim

# app workdir
# WORKDIR /app

# copy app dependencies
# COPY package.json ./

# install dependecies
# RUN npm install -g mocha mocha-jenkins-reporter
# RUN npm install

# build app source code
# COPY . ./

# runtime configs
# ENTRYPOINT ["sh","./entrypoint.sh"]

WORKDIR /code

ADD ./messenger-webhook/package.json /code

ADD ./messenger-webhook/index.js /code

RUN npm install

COPY . ./

ADD ./test /code

EXPOSE 1337

CMD ["node", "index.js"]