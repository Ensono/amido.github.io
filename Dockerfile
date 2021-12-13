# This docker file is intended for local development purposes only and is not published or run in production
#
# build:
# docker build . -t amido.github.io
#
# run:
# docker run --rm -it -p 3000:3000 amido.github.io

FROM node:16 AS build-env
WORKDIR /app
COPY . /app/
RUN npm install

FROM gcr.io/distroless/nodejs:16
COPY --from=build-env /app /app
WORKDIR /app
EXPOSE 3000
CMD ["node_modules/@docusaurus/core/bin/docusaurus.js", "start", "--host", "0.0.0.0", "--no-open"]