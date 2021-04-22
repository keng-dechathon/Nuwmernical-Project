FROM node:15-alpine as build
WORKDIR /app
COPY . . 
RUN npm install 
COPY . .
RUN npm run build
RUN npm run test


FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf