FROM node:lts
WORKDIR /app
COPY . .
RUN npm i
ENV NODE_ENV=production
RUN npm run build
CMD ["npx","serve","-s","build"]
