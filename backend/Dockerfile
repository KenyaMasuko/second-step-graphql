# syntax=docker/dockerfile:1
FROM node:16

# Prisma CLIをdevDependenciesでインストールしたため
ENV NODE_ENV=development

# マイグレーションで必要
RUN apt-get -qy update
RUN apt-get -qy install openssl

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma
RUN pnpm install
COPY . .
CMD ["pnpm", "prisma", "migrate", "deploy"]
