This project is a small Blog-like web application on which the user can view, add and
delete blog post items.

## Project Setup
- Clone the project using `git clone https://github.com/shubh34/react-demo-typescript.git`
- Switch to develop branch using `git checkout develop`
- Install the dependency using `npm install` install node if it complains
- open the project in any IDE like Visual studio code to make changes
- Run the application using `npm start`
- Build the production application using `npm build`

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
    - `components`- list of all components. Each component has its own css and test file.
    - `configs` - configuration properties.
    - `constants` - string constants.
    - `sharedComponents` - resuable components. Each resuable component has its own css and test file.
    - `states` - redux states that includes action, selector, reducerand their tests
    - `store` - redux setup combine reducer and store initialisation
    - `utils` - global resuable functions

## Requirement
- `The main view of the application shows a list of pre-existing blog posts.`
- `clicking on a blog post item in the list will show all the details about that blog post`
- `User can delete the post using delete button from the main view`
- `User can add a new blog clicking on the Add Blog button from the navigation bar`

## Additional functionality
- `Responsive web application for all type of user mobile tablet web`
- `Redux to manage the state`
- `Test Case using Jest and Enzyme`
- `Client-side routing to route to any page`
- `Error Handling when bloglist is empty and view blog not found`
- `Showing limited content to 250 character on main view so that user can get context of blog `
- `Back functionality on add and view blog`
- `Form Validation on Add Blog`



## Tech Stack
React, Redux, Typescript, Jest, Enzyme, Webpack, Prettier, Tslint 

## TO DO
- `Search Functionality`
- `Filter by category`
- `Backend integration`
- `Redux form if number of forms or fields in form increases`

