# Stage 1: Transpiling and building the app
FROM node:22-alpine as builder

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . .

ARG VITE_BASE_URL
ENV VITE_BASE_URL=${VITE_BASE_URL}

RUN npm run build


# Stage 2: Serving the statc files
FROM nginx:alpine

COPY --from=builder /app/dist/ /usr/share/nginx/html/

CMD [ "nginx", "-g", "daemon off;" ]