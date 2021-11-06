FROM node:16.5.0

WORKDIR /app

COPY package.json .

# RUN npm install

# If multiple environments
RUN if [ "$NODE_ENV" = "development" ]; \
  then npm install; \
  else npm install --only=production; \
  fi

COPY . ./

ENV PORT 3000

EXPOSE $PORT

CMD [ "node", "server.js" ]