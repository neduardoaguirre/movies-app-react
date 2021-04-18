# Movies App

Web application built using React to get info about movies. This app is going to make an HTTP call to IMDb API to retrieve the data requested.
Developed with fully responsive design in order to look good in all devices.

## Live Demo

[Link](https://moviesappreactjs.netlify.app/)

## Technologies Used

This app was bootstrapped using the create-react-app and uses the following technologies.

- React JS
- JSX
- Context
- CSS3
- Material UI
- Boostrap
- Axios
- Serverless function

## How to install

### Cloning the project from github

Open a terminal and type:

```sh
$ git clone https://github.com/neduardoaguirre/movies-app-react.git
```

### Install npm dependencies

```sh
$ cd movies-app-react
$ npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```sh
    $ cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment.

    ```sh
    API_KEY=YourApiKey
    ```

## How to run

### Runs the app in the development mode.

In the project directory, type the following commands to start the serverless function.

```sh
$ npm run lambda-serve
```

Then open a second terminal in the same directory and type:

```sh
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
