FROM node:16 as build

COPY . /app

WORKDIR /app

RUN npm install -g @nestjs/cli

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]