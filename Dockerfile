FROM node:18-alpine3.17 AS dependencies

WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./yarn.lock ./yarn.lock
RUN yarn

FROM dependencies as runner

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY ./src ./src
COPY ./config.yaml ./config.yaml

EXPOSE 8080
ENTRYPOINT [ "npm", "start", "--", "web" ]

