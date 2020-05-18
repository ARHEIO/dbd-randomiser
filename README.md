![Release Build](https://github.com/ARHEIO/dbd-randomiser/workflows/CI/badge.svg?branch=master)

[![forthebadge](https://forthebadge.com/images/badges/built-with-resentment.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/compatibility-club-penguin.svg)](https://forthebadge.com)

# Access at <https://arhe.io/dbd-randomiser/>

Hosted like <3 via Github Pages

# DBD Loadout Randomiser

Dead by Daylight is a asymmetrical competative horror game developed and updated by Behaviour Interactive. In said game, players can choose to play a killer or a survivor, and select a loadout in order to either enhance an strong existing attribute of the character they play, or to cover weaker attribute to prevent misplays.

While the game has a public competative ranking system, playing with friends is a unique experience in that all loadout options are available. While it can be fun to use the optimal loadout to ensure victory, it is often more fun to randomise a loadout and make do, learning to more unpredictable gameplay and neither side knows what to expect. These matches with friends end up becoming the more memorable.

## TODO

* Add a linter for God's sake
* Move data assets out in DynamoDB document storage
* Create a lambda based ecosystem to access DynamoDB content and maintain a serverless backend
* Implement unit tests with react-testing-library
* Implement integration tests with cypress
* Move common code out into re-uasble components
* Add filters to allow certain selections to be removed from the pool
  * Should this be server or client side?
* Optimise for Mobile devices

## Running the App

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
