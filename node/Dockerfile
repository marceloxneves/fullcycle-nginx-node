FROM node:18

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.9.3

COPY ./node/index.js .

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm init -y \
&& npm install express --save \
&& npm install mysql --save
 
EXPOSE 3000
 
#CMD ["node", "index.js"]