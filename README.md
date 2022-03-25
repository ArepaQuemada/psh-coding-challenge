# The Office App - PSH Coding Challenge

The idea of the challenge is to make a website application using react to retrieve characters and crew data from https://www.officeapi.dev/

You should see a list of crew or characters which has it's own pagination and filters, also you can create characters or crew members to add to the list (in memory)

The project was bootstraped with create react app, I used typescript and sass

For api management I made a hook that handles all async operations (And cancels any async operation when the component gets destroyed). From there you can implement your own hooks to pass the paramters to useAsync

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
