FROM node:8.14.0-alpine

WORKDIR /opt/datamanager

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

COPY src .

CMD ["npm", "start"]