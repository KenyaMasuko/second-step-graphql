# syntax=docker/dockerfile:1
FROM node:16

# Prisma CLIをdevDependenciesでインストールしたため
ENV NODE_ENV=development

# マイグレーションで必要
RUN apt-get -qy update
RUN apt-get -qy install openssl

# pnpmをインストール
RUN npm install -g pnpm

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma
RUN pnpm install
RUN pnpm prisma generate
COPY . .
CMD ["pnpm", "prisma", "migrate", "deploy"]
