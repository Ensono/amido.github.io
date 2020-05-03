FROM node:lts

WORKDIR /app/website

EXPOSE 3008 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN npm install

CMD ["npm", "start"]
