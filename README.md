# 🌱 power-plants-project-MVP 🌱

Full Stack Power Plants Project MVP

In this repository, you will use build a Full Stack Power Plants Project MVP using React, Node/Express, and MySQL.

Objectives

Import database from "https://open-power-system-data.org/"
Build an API server.
Create a front end.
Setup

Dependencies

👀 About

🚀 Technologies
Node.js
Express
Javascript
HTML
CSS
React JS
EditorConfig
Leaflet

💻 Getting started
Requirements
Node.js
Expo
Yarn or NPM
Installing and running the project
Clone the project and access the folder

$ git clone https://github.com/Fabinevesf/power-plants-project-MVP.git
$ cd power-plants-project-MVP
Follow the steps below

# Install the dependencies

1. Run $npm install in the project folder to install dependencies related to Express (the server).

$ cd client and run npm install install dependencies related to React (the client).

2. Database Prep

Type mysql -u root -p to access the MySQL CLI using your password.

In the MySQL CLI, type create database todos; to create a database in MySQL.

Run the following in the MySQL CLI: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD'; (replace YOUR_PASSWORD with your actual password)

Run Your Development Servers

Run npm start in project directory to start the Express server on port 5000
cd client and run npm start to start client server in development mode with hot reloading in port 3000.
Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
You can test your client app in http://localhost:3000
You can test your API in http://localhost:5000/api

# Finally, run the api service in a development environment :)

$ npm start

# Well done, PowerPlant is started!
