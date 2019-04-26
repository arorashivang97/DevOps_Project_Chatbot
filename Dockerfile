FROM node:7.8-slim

# app workdir
WORKDIR /code

# copy app dependencies
COPY package.json ./

# build app source code
COPY . ./

# install dependecies

# RUN npm install --save mocha 
# RUN npm install --save-dev chai
# RUN npm install -g chai

#vai
#RUN npm install express
#RUN npm install request
#RUN npm install apiai
#RUN npm install bluebird
#RUN npm install mocha
#RUN npm install chai


RUN npm install winston
RUN npm install

# runtime configs
# ENTRYPOINT ["sh","./entrypoint.sh"]

EXPOSE 1337
EXPOSE 4999

#CMD ["node", "./app/index.js"]
CMD ["npm", "start"]
