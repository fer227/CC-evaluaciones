FROM node:14-alpine3.10

RUN mkdir -p /home/node/node_modules && chown -R node:node /home/node

WORKDIR /home/node

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "cliente.js" ]
