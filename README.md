# GameFo

<em>GameFo</em> is a video game information website. Enter a video game title in the search bar to view its trailers, images, and other various details.

## View Demo

To view a demo of the website, click [here](https://gamefo-demo.netlify.app), or enter <em>https://gamefo-demo.netlify.app</em> in your browser's address bar.

Feel free to clone and experiment with the code as well. Follow [these steps](#installation-and-instructions) to do so.

## Built with

- create-react-app

- [styled-components](https://styled-components.com/)

  - Used for all styling.

- [RAWG video games database API](https://rawg.io/apidocs)

  - API used to acquire all game media and information.

- [axios](https://www.npmjs.com/package/axios)

  - Handles requests made to RAWG API.

- [react-swipeable](https://www.npmjs.com/package/react-swipeable)

  - Handles swipe event on images when user is on a mobile device.

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
