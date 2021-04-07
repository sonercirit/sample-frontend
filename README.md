# sample-frontend

Sample frontend project for showcase

## Run

Run via docker-compose with:

```shell
$ docker-compose up -d
```

After that, navigate to http://localhost:3000

### Extra Pages

Mockup designs can be accessed at http://localhost:3000/mockup

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn format`

Formats the whole project with prettier.

### `yarn lint`

Lints the whole project with eslint.

## Extra Packages

### react-router

Page router.

### eslint with airbnb config

Linter with best practices baked in.

### prettier

An Opinionated formatter with sane defaults.

### husky and lint-staged

Runs eslint and prettier via git hooks.
