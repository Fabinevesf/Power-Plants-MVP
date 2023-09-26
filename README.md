# 🌱 power-plants-project-MVP 🌱

Full Stack Power Plants Project MVP

In this repository, you will build a Full Stack Power Plants Project MVP using React, Node/Express, and MySQL.

Objectives
Shows all power plants on a interactive map, you can filter the plants by source, location, year and installed capacity.

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

- Libraries used:

1. I'll show my front end that I used react and two libraries to show the interactive map and a form that you can choose the font you want to visualize.
2. At a first moment, I imported a database only from France, but in this DB you can import for all the countries of the world and use the same logic to filter the power plants and each source chosen.
3. I used another library called Multiselect to develop this font filter

- Next Features:

1. Import the data from more countries (Portugal), to have a global view of the plants.
2. Change the pin visualization, I saw in the leaflet react library that I can change the icon, for example, if I am looking for the solar source, I can change the icon to a sun, make it smaller for a cleaner visualization.
