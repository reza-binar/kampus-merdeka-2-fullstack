FROM node:16-alpine

WORKDIR /app
EXPOSE 8000

COPY package.json .
RUN yarn install
COPY . .

CMD ["yarn" "start"]