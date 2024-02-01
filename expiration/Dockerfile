FROM node:20-alpine3.18

WORKDIR /app

COPY package.json .

RUN yarn --production

COPY . .

CMD ["yarn", "start"]