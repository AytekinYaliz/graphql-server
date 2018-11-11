# Docker allows you to package an application with all of its dependencies into a standardized unit, 
# called a container, for software development. 
# A container is a stripped-to-basics version of a Linux operating system. 
# An image is software you load into a container.

# Use latest node version 9.x
FROM node:10.13.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY yarn.lock ./

# If you are building your code for production
# RUN npm install --only=production
RUN yarn install

# To bundle your app's source code inside the Docker image, use the COPY instruction:
COPY index.js ./
COPY ./src ./src
COPY ./config ./config

# RUN echo "PORT=4001" >> .env
# RUN echo "MONGO=..." >> .env

RUN ls -al

# Your app binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 9000

# Last but not least, define the command to run your app using CMD which defines your runtime. 
# Here we will use the basic npm start which will run node server.js to start your server:
CMD [ "yarn", "start" ]
