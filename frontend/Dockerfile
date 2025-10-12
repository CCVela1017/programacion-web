FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 5173
ENV HOST=0.0.0.0

CMD ["npm", "run", "dev"]
