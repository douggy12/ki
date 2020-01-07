# base image
FROM node:9

# set working directory
RUN mkdir /app
WORKDIR /app

# # add app
COPY . /app

# RUN ls /app
RUN cp /app/docker/environment.docker.ts /app/src/environments/environment.ts

# install and cache app dependencies
RUN npm install -g @angular/cli@7.3.9

# start app
CMD npm install && ng serve --host 0.0.0.0 --port 4200