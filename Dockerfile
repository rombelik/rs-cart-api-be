FROM node:16.10-alpine3.14

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./
RUN npm install -g npm@8.0.0
RUN npm install
RUN npm i -g nodemon

# Bundle app source
COPY . .

EXPOSE "${PORT}"

CMD npm run build && npm run start:dev
