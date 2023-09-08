FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn global add @nestjs/cli
RUN yarn --production

COPY . .

RUN yarn build

CMD ["node", "dist/main"]
