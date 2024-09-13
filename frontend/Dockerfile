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


# Production stage: Use nginx to serve built files
FROM nginx:alpine


# Copy built files from the build stage to nginx
COPY --from=build /app/build /usr/share/nginx/html


# Expose port 80
EXPOSE 80


# Start nginx
CMD ["nginx", "-g", "daemon off;"]