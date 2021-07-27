# EXPRESS CRUD REST API

A REST API which has CRUD funtionality.

## Tech Stack

**Server:** Node, Express

**Database:** MongoDB

## Run Locally

Clone the project

```bash
  git clone https://github.com/hillbyte/crud-rest-api.git
```

Go to the project directory

```bash
  cd crud-rest-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=8000`

`DB_URL=replace this string with your own mongodb uri `

`SERVER=localhost`

## API Reference

#### Get all users

```http
  GET /api/fetch-emp
```

#### Get user

```http
  GET /api/fetch-emp/${id}
```

#### Create user

```http
  POST /api/create-emp
```

#### Update user

```http
  PUT /api/edit-emp/${id}
```

#### Delete user

```http
  DELETE /api/delete-emp/${id}
```
