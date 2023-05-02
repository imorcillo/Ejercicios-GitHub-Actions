# Utiliza la imagen de node.js
FROM node:14-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente a la imagen
COPY . .

# Expone el puerto de la aplicación
EXPOSE 3000

# Ejecuta la aplicación al iniciar el contenedor
CMD [ "node", "Ejercicio2.js" ]
