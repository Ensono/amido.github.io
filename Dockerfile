FROM node:16.9.0-bullseye-slim

WORKDIR /app

EXPOSE 3000
COPY . /app/
RUN npm install

CMD ["npm", "start"]
