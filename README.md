# GameFo

<em>GameFo</em> is a mock video game information website.

## About

GameFo was made with create-react-app. All of the images, videos, and data were retrieved via the [RAWG video games database API](https://rawg.io/apidocs).

## View Demo

View the demo [here](https://gamefo-demo.netlify.app), or follow the instructions below to run the site on your machine.

## Installation and Instructions

### Get a RAWG API Key

<em>A RAWG API key is required to locally run this application.</em> You can get a free API key by visiting [RAWG's API docs site](https://rawg.io/apidocs).
Once you have the key in hand, follow the following installation steps:

#### Step 1 - Clone the repo, then open it in your code editor.

```zsh
$ git clone https://github.com/agviray/gamefo-website.git
```

#### Step 2 - From the app's root directory, install all of the dependencies that are required to run the app.

```zsh
$ npm install
```

#### Step 3 - Create an .env file in the root directory of the the app. This will contain your RAWG API key.

#### Step 4 - In the .env file, create an environment variable called, REACT_APP_RAWG_KEY (you do not need to use var, let, or const).

#### Step 5 - Set your API key as a string value of REACT_APP_RAWG_KEY.

#### Step 6 - Save your changes, then run the application.

```zsh
$ npm start
```
