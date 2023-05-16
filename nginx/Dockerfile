FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/html && touch /var/www/html/index.html

CMD [ "nginx", "-g", "daemon off;" ]