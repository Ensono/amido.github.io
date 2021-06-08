FROM node:16.3.0-stretch

WORKDIR /app/website

EXPOSE 3008 35729
COPY ./docs /app/docs
COPY ./website /app/website
COPY *.json /app/website
RUN npm install

CMD ["npm", "start"]
