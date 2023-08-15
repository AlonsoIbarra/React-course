# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the container's working directory
COPY . .

# RUN npx create-react-app app

# Build the React app
# RUN npm run build

# Specify the command to start your React app when the container starts
CMD ["npm", "start"]

