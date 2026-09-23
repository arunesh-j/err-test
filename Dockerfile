FROM node:20-alpine
WORKDIR /app
COPY . .
RUN ./scripts/verify.sh
ENV PORT=3000
CMD ["node", "server.js"]
