
# Simple Note-Taking APIs 
## (Built on Node.js, Express.js and MongoDB)
### About
The Simple Note-Taking API built on Express.js and MongoDB is a versatile and user-friendly tool that seamlessly enables CRUD (Create, Read, Update, Delete) operations for note management with very basic error handling.

# Getting Started

### Installation Guide
* Clone this repository [here](https://github.com/Shubhansh-Simple/Simple-Note-Taking-Api.git).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* Create an .env file in your project root folder and add your variables. See env_sample for assistance.
* Add the mongodb database key in .env file or you can use your locally installed MongoDB. Do configure to your choice in server.js file which is the entry point of the application.

### Usage
* Run npm run server to start the application with nodemon.
* Connect to the API using Postman on port 8000 (as mentioned in .env file).

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/notes/  | To retrieve all notes from database |
| POST | /api/notes/  | To create a new note |
| GET | /api/notes/:id  | To retrieve details of a single note |
| PUT | /api/notes/:id  | To edit the details of a single note |
| DELETE | /api/notes/:id  | To delete a single note |

### Status Code

| Status Code | Description | |
| --- | --- | --- | 
| 200 | OK |
| 201 | CREATED |
| 400 | BAD REQUEST |
| 404 | NOT FOUND |
| 500 | INTERNAL SERVER ERROR |

## Built With
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

### Authors
* [Shubhansh-simple](https://github.com/Shubhansh-Simple)
* [My Portfolio](https://shub.pythonanywhere.com/profile/)
### License
This project is available for use under the MIT License.


