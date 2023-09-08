FROM node:18-alpine AS compile-image
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn
COPY . .

RUN yarn build

FROM node:18-alpine AS runtime-image
WORKDIR /app
ENV NODE_ENV production
COPY --from=compile-image /app/public ./public
COPY --from=compile-image /app/.next ./.next
COPY --from=compile-image /app/node_modules ./node_modules
COPY --from=compile-image /app/package.json ./package.json

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app

USER nextjs
EXPOSE 3000
RUN npx next telemetry disable
CMD yarn start

