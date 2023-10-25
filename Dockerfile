FROM node:latest as buildImage
LABEL author="samuel"
LABEL content="Docker image for eye server"
WORKDIR /usr/src/app
COPY ./ ./client
RUN cd client && npm install
RUN cd client && npm build 


FROM node:14
WORKDIR /usr/src/app
COPY --from=buildImage /usr/src/app/client .

EXPOSE 5000
CMD [ "npm", "start" ]
