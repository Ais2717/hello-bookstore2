# 1. Выбираем базовый образ с Node.js
FROM node:18-slim

# 2. Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# 3. Копируем package.json и package-lock.json
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm install --production

# 5. Копируем весь проект внутрь контейнера
COPY . .

# 6. Открываем порт приложения
EXPOSE 3000

# 7. Команда для запуска
CMD ["node", "app.js"]
