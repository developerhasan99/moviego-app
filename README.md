# moviego-app

Follow the steps below to run the Vite development server and build your Frontend app.

Step 1: Open the procject folder on an IDE(like VS Code, Atom, Sublime).

Step 2: Open the project folder on terminal (Or, you can use VS codes built in teminl).

Note: Make sure that your computer has Node js and Npm installed. To install node js on your computeer you can visit official node js website: https://nodejs.org/en/

Step 3: Install project dependencies. To install dependencies run the below command.

Using NPM:

``
$ npm install
 ``

Using yarn:

``
$ yarn
 ``

Now you can run the development server or build your project.

## To start the development server.

Using NPM:

``
$ npm run dev
 ``

Using yarn:

``
$ yarn dev
 ``

 ## To start the development server.

Using NPM:

``
$ npm run build
 ``

Using yarn:

``
$ yarn build
 ``

Ater running the  build command you can see a dist folder on your project directory. now it is the production build and you can deploy it on your server.


Finally,
Change the line 16  on the /src/compnents/searchbar.jsx file with the your preferd url. also App.jsx file have an ajax url.

Example:

let queryUrl = `http://143.110.166.202:8000/search/a/`;
with:
let queryUrl = `http://143.110.166.202:8000/search/${userData}/`;


Note: We have pre builded an instance, thats why you are seeing a dist folder on your project folder. Feel free to delete it and run thebuild command to build new one.