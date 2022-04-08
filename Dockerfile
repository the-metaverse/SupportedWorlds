FROM node:14.19.0 as deps
WORKDIR /usr/src/app

COPY package.json ./

# building the app
RUN npm i

FROM node:14.19.0 as builder
WORKDIR /usr/src/app
COPY . .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package-lock.json ./package-lock.json

RUN npm run build

FROM node:14.19.0 as runner
WORKDIR /usr/src/app
ENV PORT=3010
COPY --from=builder /usr/src/app/tsconfig.json ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package-lock.json ./package-lock.json
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs

EXPOSE 3010

CMD ["npm", "start"]