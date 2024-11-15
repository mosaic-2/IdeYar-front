FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm install -g typescript

RUN tsc --noEmit

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
