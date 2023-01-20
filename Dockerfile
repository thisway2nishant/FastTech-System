FROM node

WORKDIR ./app

COPY package*.json ./

CMD npm install

COPY . ./

CMD node server.json

EXPOSE 8000