# Feathers-Next-Boilerplate

## About

This project was built in my spare time in order to learn how to develop applications using Next.js.

I find Feathers.js to be an very useful tool for server development, so I decided to develop a Next.js app that uses Feathers.js for it's server. 

This required a few changes to the feathers server, mainly in:

``` 1. /server/next-ssr.js - This where all the Next.js SSR logic is held. ```

``` 2. /server/index.js - nextApp is used here to build Next.js on every nodemon restart.```

``` 3. /server/middleware/nextMiddleware.js - This middleware helps distinguish between Next.js SSR request and Feathers.js service requests.```

## Getting Started
1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install dependencies

    ```
    1. npm i -g @feathersjs/cli - The feathers CLI
    2. npm i                    - To install deps
    3. npm i --only=dev         - To install dev deps
    ```
3.a Start Production app

```npm start```

3.b Start Development app

```npm run dev```


4. Profit $$$


## @Feathersjs/cli
Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```
