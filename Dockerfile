FROM node:10-alpine
WORKDIR /app
COPY ./source/ .
CMD node build/bundle.js
EXPOSE 3000