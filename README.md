# Flickering Both Maggot

Fake Movies RESTful API with NodeJS and Express.
(Its funny name was random generated.)

## Installing

First, you need to install:

 - [Node.js](https://nodejs.org/)
 - [npm](https://www.npmjs.com/)
 - [MongoDB](https://www.mongodb.com/)

Then clone the repository, check out project's directory and run:

```sh
npm install
```

## Running

Start MongoDB:

```sh
mongod
```

and then your local app server at [localhost:3000](http://localhost:3000) with:

```sh
npm run start
```

When you make changes to your files and save them, you don't have to stop and restart the server. It restarts automatically with the aid of [nodemon](https://github.com/remy/nodemon/).

Also, there is already a db.json file with fake data, so you can use it for your Request Methods. But if you want to generate new ones, we have created a script fakeDataGenerator.js to do that. You only have to execute:

```sh
npm run create
```

For your API Development Environment we suggest [Postman](https://www.getpostman.com/), also available as an extension to Chrome Web Store.

## License

flickering-both-maggot is available under the MIT license. See the LICENSE file for more info.
