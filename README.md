# The Data Hub - RESTful API Server

## Project Overview

The Data Hub is a RESTful API server built using Node.js and Express.js as part of the Fullstack Developer Track sprint.

This project demonstrates backend API development concepts including:

* REST Architecture
* CRUD Operations
* Express Routing
* Middleware
* Request Handling
* API Testing
* Authentication Mocking

The application provides API endpoints for managing blog posts using an in-memory database.

---

## Sprint Track

**Track B: Fullstack Developers**

Theme:

* Node.js
* Express.js
* REST Architecture
* API Testing

Project:
**The Data Hub (RESTful API Server)**

---

## Technologies Used

* Node.js
* Express.js
* JavaScript (ES6)
* Thunder Client
* Git
* GitHub

---

## Project Structure

```text
blog-api
│
├── controllers
│   └── postController.js
│
├── routes
│   └── postRoutes.js
│
├── data
│   └── posts.js
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## Features Implemented

### Phase 1 - Server Initialization & Route Scaffolding

 Express server setup

 Server running on Port 5000

 REST endpoint scaffolding

Endpoints:

```http
GET    /posts
GET    /posts/:id
POST   /posts
PUT    /posts/:id
DELETE /posts/:id
```

---

### Phase 2 - In-Memory Database & CRUD Logic

Implemented an in-memory database using:

```javascript
let blogPosts = [];
```

Supported Operations:

#### Create Post

```http
POST /posts
```

#### Get All Posts

```http
GET /posts
```

#### Get Post By ID

```http
GET /posts/:id
```

#### Update Post

```http
PUT /posts/:id
```

#### Delete Post

```http
DELETE /posts/:id
```

---

### Phase 3 - Middleware & Authentication Mocking

#### Custom Middleware

Logs every incoming request:

Example:

```text
[GET] /posts - 10:05 AM
[POST] /posts - 10:06 AM
```

Logged Information:

* HTTP Method
* URL Path
* Timestamp

#### Mock Authentication Endpoint

```http
POST /login
```

Request:

```json
{
  "username": "admin",
  "password": "1234"
}
```

Response:

```json
{
  "message": "Login successful",
  "username": "admin",
  "token": "mock-jwt-token-123"
}
```

---

## API Endpoints

### Get All Posts

```http
GET /posts
```

### Get Post By ID

```http
GET /posts/:id
```

### Create Post

```http
POST /posts
```

Body:

```json
{
  "title": "My First Blog"
}
```

### Update Post

```http
PUT /posts/:id
```

Body:

```json
{
  "title": "Updated Blog"
}
```

### Delete Post

```http
DELETE /posts/:id
```

### Login

```http
POST /login
```

Body:

```json
{
  "username": "admin",
  "password": "1234"
}
```

---

## Testing

All API endpoints were tested using Thunder Client.

Tested Operations:

* GET
* POST
* PUT
* DELETE
* Login Endpoint

---

## Improvements After Code Review

Implemented reviewer feedback:

* Refactored route handlers into Controllers
* Implemented Express Router architecture
* Used strict equality (`===`) instead of loose equality (`==`)
* Parsed route parameters using `Number(req.params.id)`
* Improved project maintainability and structure

---

## Installation

Clone repository:

```bash
git clone https://github.com/anucodeverse/FullStack_NodeJS_API.git
```

Navigate to project:

```bash
cd FullStack_NodeJS_API
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
node server.js
```

Server URL:

```text
http://localhost:5000
```

---

## Future Enhancements

* MongoDB Integration
* Mongoose ODM
* JWT Authentication
* User Registration
* Environment Variables
* Error Handling Middleware
* Deployment on Render

---

## Author

**Ananthalakshmi Surla**

GitHub:
https://github.com/anucodeverse
