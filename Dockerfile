FROM node:lts
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
CMD ["npx","serve","-s","build"]
