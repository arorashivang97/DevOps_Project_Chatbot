FROM node:7.8-slim

# app workdir
WORKDIR /code

# copy app dependencies
COPY package.json ./

# build app source code
COPY . ./

# install dependecies
RUN npm install mocha --save
RUN npm install chai --save
RUN npm install

# runtime configs
# ENTRYPOINT ["sh","./entrypoint.sh"]

EXPOSE 1337

CMD ["node", "./app/index.js"]
