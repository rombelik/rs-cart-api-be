###################
# FOR LOCAL DEVELOPMENT
###################
FROM node:16.10-alpine3.14 AS development

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./
RUN npm install -g npm@8.0.0
RUN npm ci
# RUN npm install
# RUN npm i -g nodemon

# Bundle app source
COPY . .

###################
# BUILD FOR PRODUCTION
###################
FROM node:16.10-alpine3.14 AS build

# Create app directory
WORKDIR /usr/app

COPY package*.json ./
COPY --from=development /usr/app/node_modules ./node_modules
COPY . .

# Run the build command which creates the production bundle
RUN npm run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

###################
# PRODUCTION
###################
FROM node:16.10-alpine3.14 AS production

# Copy the bundled code from the build stage to the production image
COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/dist ./dist

ENV PORT 3000
EXPOSE 3000

# CMD npm run build && npm run start:dev
CMD [ "node", "dist/main.js" ]
