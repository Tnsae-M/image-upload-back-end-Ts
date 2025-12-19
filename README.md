# Node.js with TypeScript - Book Management System

This is a RESTful API for a Book Management System built with Node.js, Express, and TypeScript. It allows users to manage a collection of books, including user authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/node-with-typescript.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd node-with-typescript
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file in the root directory and add the following environment variables:
    ```
    PORT=3000
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```

## Usage

### Development

To run the application in development mode with live reloading, use:

```bash
npm run dev
```

### Production

To build and run the application in production mode, use:

```bash
npm run build
npm start
```

## API Endpoints

### Authentication

-   `POST /api/auth/signup` - Register a new user.
-   `POST /api/auth/signin` - Login an existing user.

### Books

-   `GET /api/books` - Get a list of all books.
-   `GET /api/books/:id` - Get a book by its ID.
-   `POST /api/books` - Add a new book.
-   `PUT /api/books/:id` - Update a book by its ID.
-   `DELETE /api/books/:id` - Delete a book by its ID.
-   `GET /api/books/search?q=<query>` - Search for a book by author or title.
-   `POST /api/books/borrow/:id` - Borrow a book.
-   `POST /api/books/return/:id` - Return a borrowed book.

## Technologies Used

### Dependencies

-   [bcrypt](https://www.npmjs.com/package/bcrypt): For hashing passwords.
-   [cors](https://www.npmjs.com/package/cors): For enabling Cross-Origin Resource Sharing.
-   [dotenv](https://www.npmjs.com/package/dotenv): For loading environment variables.
-   [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): For generating JSON Web Tokens.
-   [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool designed to work in an asynchronous environment.

### Dev Dependencies

-   [@types/bcrypt](https://www.npmjs.com/package/@types/bcrypt)
-   [@types/cors](https://www.npmjs.com/package/@types/cors)
-   [@types/express](https://www.npmjs.com/package/@types/express)
-   [@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken)
-   [@types/mongoose](https://www.npmjs.com/package/@types/mongoose)
-   [@types/node](https://www.npmjs.com/package/@types/node)
-   [nodemon](https://www.npmjs.com/package/nodemon): For automatically restarting the application when file changes are detected.
-   [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution environment for Node.js.
-   [ts-node-dev](https://www.npmjs.com/package/ts-node-dev): A companion for `ts-node` that restarts the process on file changes.
-   [typescript](https://www.npmjs.com/package/typescript): A superset of JavaScript that compiles to plain JavaScript.

## License

This project is licensed under the ISC License.