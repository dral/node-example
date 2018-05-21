# Example node/express project

## How to use

**Install dependencies**
```
npm install
```

**Run**

Launch server
```
npm start
```

See the result in a browser:
- http://localhost:3000
- http://localhost:3000/hello?name=foo

Debug in chrome:
- [chrome://inspect](chrome://inspect)
- then _Open dedicated DevTools for Node_

**Launch tests**

```
npm run test-watch
```

**Build for production**

```
npm run prod
```

**Add dependencies**
```
npm install someproject
```

**Add development dependencies**

These are dependencies that are only used for building or testing the project, but not required for the final result (jest, babel, eslint, …)

```
npm install --save-dev someproject
```

## Project structure

- Entry point `src/index.js`.

## Enabled configs

- New javascript syntax: ES6 (babel)
- Editor syntax warnings (eslint)
- Live reload (nodemon)
- Unit test (jest)
