FROM alekzonder/puppeteer:1.1.1

VOLUME /app/config
VOLUME /app/test

COPY . /app

# install the dependencies
RUN yarn install --prod --ignore-optional

CMD [ "npm" , "test" ]