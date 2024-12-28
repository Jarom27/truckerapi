# Usa una imagen oficial de Node.js
FROM node:20

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto donde la API se ejecutará
ENV API_PORT=3000

# Comando para iniciar el servidor
CMD ["node", "server.js"]
