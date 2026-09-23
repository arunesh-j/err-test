FROM node:20-alpine
WORKDIR /app
COPY package.json server.js config.production.json ./
ENV PORT=3000
CMD ["node", "server.js"]
