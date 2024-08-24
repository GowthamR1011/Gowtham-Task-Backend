# Backend Server 

The server is running only using express library. The routes have just been setup. Functionality and Database need to added. 
## Installations

1. Make sure that [node](https://nodejs.org/en) is installed on your computer. If not you can install it with the [Node Version Manager](https://github.com/nvm-sh/nvm?tab=readme-ov-file#long-term-support) using the `nvm install --lts` command.
2. Install [yarn](https://yarnpkg.com/) `npm install --global yarn`
3. In a terminal, go to the root of this folder and install the dependencies for the frontend app by running the command `yarn`. This will create the folder 'node_modules'.
4. You will also need the [json-server](https://www.npmjs.com/package/json-server) package installed globally to run the database server. You can install it using the command `npm install -g json-server` 

## Start the servers

### First run the database server
1. In the terminal go to the root folder of this project and run the command `json-server --watch database/data.json --port 9000` to start the database server on `PORT 9000`
2. If you want to start the database in a different PORT number, you can specify it in the command and update the `DATABASE_PORT` in the `.env` file accordingly.
### How to start the backend server
1. With the database server running in one terminal, open another terminal to the same root folder of this project.
2. Run the command `node index.js` to start the web server in `PORT 8000`

Now the run the frontend nextjs project in development mode in the same mission. All the tasks, including bonus task, should run successfully.