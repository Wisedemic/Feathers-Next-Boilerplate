# Feathers-Next-Boilerplate

## About

This project was built in my spare time, as a way to learn how to deploy Next.js (https://nextjs.org) from a custom server.

I decided to utilize Feathers.js, as it provides a quick method of building standardized HTTP routes which utilize hooks, through the use of their route and application generator/cli: ```npm i -g @feathersjs/cli```. 

*SideNote: Feathers referes to /routes as /services; Where ```router.put('/users', someRouteFn())``` is the same as ```feathers.service('/users).create()```


This required a few modifcations to the default ```feathers g app```command generated application.

I made the following modifications: 
``` 1. /server/next-ssr.js - This where all the Next.js SSR logic is held. ```

``` 2. /server/index.js - nextApp is used here to build Next.js on every nodemon restart.```

``` 3. /server/middleware/nextMiddleware.js - This middleware helps distinguish between Next.js SSR request and Feathers.js service requests.```

``` 4. /server/middleware/index.js - Change "app.use(nextMiddleware);" ---> TO --> "app.get('*', nextMiddleware);"```

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

$ feathers generate app                   # Generate a Feathers.js Application
$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```
