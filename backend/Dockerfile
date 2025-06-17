FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 8081
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]
