# Build stage
FROM node:18-alpine as build


# Set environment variable correctly
ENV NODE_OPTIONS=--openssl-legacy-provider


WORKDIR /app


# Copy package files and install dependencies
COPY package*.json ./


RUN npm install


# Copy the rest of the app
COPY . .

# Build the project
RUN npm run build


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]