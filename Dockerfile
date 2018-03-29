FROM alekzonder/puppeteer:1.1.1

COPY . /app

VOLUME /app/test

# permissions for volumes
# RUN chown PPTUSER /screenshots /app/test

# install the dependencies
RUN yarn install --prod --ignore-optional

CMD [ "npm" , "test" ]