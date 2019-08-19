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
1. `components`- list of all components. Each component has its css and test file.
2. `configs` - configuration properties.
3. `constants` - string constants.
4. `sharedComponents` - resuable components. Each resuable component has its css and test file.
5. `states` - reducers states that includes action, selector, reducerand their tests
6. `store` - redux setup combine reducer and store initialisation
7. `utils` - global resuable functions

