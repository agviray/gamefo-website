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

#### Step 1 - Get a <em>free</em> RAWG API key.

- A RAWG API key is required to locally run this application. You can get a free API key by visiting [RAWG's API docs site](https://rawg.io/apidocs).

- Once you are on the site, locate the link/button that will lead you to instructions on how to obtain a free API key.

#### Step 2 - Clone this repo, then open it in your code editor.

```zsh
$ git clone https://github.com/agviray/gamefo-website.git
```

#### Step 3 - From the app's root directory, install all of the dependencies that are required to run the app.

```zsh
$ npm install
```

#### Step 4 - Set your RAWG API key as a string value of const KEY, located in the <em>rawg.js</em> file.

- You can find the rawg.js file following this path from the root diretory: **src > apis > rawg.js**

- Un-comment const KEY and set it equal to your API key (as a string value).

#### Step 5 - Save your changes, then run the application.

```zsh
$ npm start
```
