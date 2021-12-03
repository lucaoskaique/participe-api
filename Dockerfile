FROM node:14.17.1

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3333

CMD ["npm","run","dev"] 