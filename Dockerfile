FROM node:10.10.0 AS build

ARG VUE_APP_BACK_URL
RUN npm i -g yarn    
RUN mkdir -p /app    
WORKDIR /app    
COPY package.json ./    
RUN yarn install    
COPY . ./    
RUN yarn build    
     
FROM nginx:latest    
RUN mkdir /app    
COPY nginx.conf /etc/nginx/conf.d/default.conf    
COPY --from=build /app/dist /app    
CMD ["nginx", "-g", "daemon off;"]
