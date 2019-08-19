This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run format`
Will format the source file.

### `npm run coverage`
Will provide the test coverage

## Folder Structure

- `__mocks__`: unit testing mock file only.
- `build`: production build of application.
- `coverage`: output folder for generated code coverage reports.
- `src`: source code of project.
- - `components`- list of all components. Each component has its own css and test file.
- - `configs` - configuration properties.
- - `constants` - string constants.
- - `sharedComponents` - resuable components. Each resuable component has its own css and test file.
- - `states` - reducers states that includes action, selector, reducerand their tests
- - `store` - redux setup combine reducer and store initialisation
- - `utils` - global resuable functions

## TO DO
- `Search Functionality`
- `Filter by category`
- `Backend integration`

