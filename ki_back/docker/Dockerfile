FROM tomcat:latest

WORKDIR /tmp

# install git et vim
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y maven && \
    apt-get install -y vim && \
    apt-get install -y dos2unix


RUN mkdir /usr/local/tomcat/avatar
RUN chmod 777 /usr/local/tomcat/avatar