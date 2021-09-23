FROM node:lts

WORKDIR /app

EXPOSE 3000
COPY . /app/
RUN npm install

CMD ["npm", "start"]