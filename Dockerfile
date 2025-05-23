FROM --platform=linux/amd64 node:20-bullseye


WORKDIR /app

ENV DOCKER=true
ENV CI=true

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install -D tailwindcss postcss autoprefixer
RUN npm install tailwindcss @tailwindcss/vite
RUN npm i @tailwindcss/postcss

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
