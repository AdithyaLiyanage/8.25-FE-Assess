# Use a small Nginx base image
FROM nginx:alpine

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx config into the image
COPY default.conf /etc/nginx/conf.d/

# Copy your website files into the container
COPY . /usr/share/nginx/html

# Expose container port
EXPOSE 80
