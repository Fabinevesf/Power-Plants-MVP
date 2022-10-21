# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Full Stack To Do App

In this repository, you will use build a full stack To Do app using React, Node/Express, and MySQL.

Objectives

Build a database.
Build an API server.
Create a front end.
Setup

Dependencies

Run npm install in the project folder to install dependencies related to Express (the server).

cd client and run npm install install dependencies related to React (the client).

Database Prep

Create .env file in project directory and add

DB_NAME=todos
DB_PASS=YOUR_PASSWORD
(replace YOUR_PASSWORD with your actual password)

Alternatively, you can rename the provided .env.example file to .env.

Type mysql -u root -p to access the MySQL CLI using your password.

In the MySQL CLI, type create database todos; to create a database in MySQL.

Run the following in the MySQL CLI: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD'; (replace YOUR_PASSWORD with your actual password)

Run node model/database.js in your TERMINAL, in the project folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

Run Your Development Servers

Run npm start in project directory to start the Express server on port 5000
cd client and run npm start to start client server in development mode with hot reloading in port 3000.
Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
You can test your client app in http://localhost:3000
You can test your API in http://localhost:5000/api
Basic Requirements

1. Read through all the current code and explain it to your partner.

Explain what each line of code is doing.
Look at the docs and ask your instructor if you aren't sure! 2. Finish the routes

Suggested Process:

Try and write the correct query in mysql.
Use that query to finish the endpoint in routes/api.js.
Test your endpoint using Postman.
