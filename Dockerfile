FROM node:alpine

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm fetch

RUN pnpm install --frozen-lockfile

COPY prisma ./prisma

RUN pnpx prisma generate

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "start" ]