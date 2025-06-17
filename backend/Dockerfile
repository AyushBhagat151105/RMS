
FROM node:20-alpine AS builder


RUN npm install -g pnpm

WORKDIR /app


COPY package.json pnpm-lock.yaml ./


RUN pnpm install --frozen-lockfile

COPY . .


RUN pnpm prisma generate


RUN pnpm build

# Stage 2: Production image
FROM node:20-alpine AS production

ENV NODE_ENV=production


RUN npm install

WORKDIR /app


COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY ./prisma .

EXPOSE 8083
ENTRYPOINT ["sh", "-c", "npx prisma migrate deploy && exec node dist/index.js"]
