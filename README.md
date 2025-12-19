# Bookstore Backend (Node + TypeScript)

A simple bookstore backend implemented with Express, TypeScript and Mongoose. This project is an entry-level backend for learning and small demos — it includes basic auth, book CRUD and search functionality. The README lists what's implemented, how to run the project locally, and the essential unbuilt features to prioritize next.

**Project Status**

- Intended audience: entry-level backend developer
- Language: TypeScript
- Runtime: Node.js + Express
- Database: MongoDB (Mongoose)

**Completed / Implemented (high level)**

- User registration and login (JWT-based auth)
- Centralized error handler (middleware)
- Basic book operations: add, read (GET /books/:id), delete, list
- Search by title/author and list-by-author/title
- Route and middleware structure (controllers, routes, middleware, models)

**Essential Unbuilt Features (from tasks.txt — prioritized)**
These are the missing features I recommend implementing next (essential for real-world flows):

- **Borrow / Loan service** (High priority)

  - Track when a user borrows a book; set availability and record borrower.

- **Return service** (High priority)

  - Allow returning a borrowed book, update availability and borrow history.

- **Reservation / Hold service** (Medium–High priority)

  - Let users place holds on currently borrowed books; queue management.

- **Update user profile** (Medium priority)

  - Allow users to edit their profile (name, contact, preferences).

- **Admin / Book-management service** (Medium priority)

  - Role-based endpoints for admins to edit, approve, or bulk-manage books.

- **Catalog: genres / metadata** (Medium priority)
  - Add genres/tags to books for filtering and better search results.

Other useful yet less-urgent features (listed in tasks.txt)

- Renewal service, Fine/payment service, Recommendation service, Review & rating service

**Why these are essential**

- Borrow/Return/Reservation are core domain flows for a library/bookstore that relies on tracking item availability and user interactions. Without them the app can't support real-world loaning.
- Update user profile and Admin controls are necessary for basic user and content management.

**Getting started (local development)**
Prerequisites:

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

1. Clone the repo and install dependencies

```powershell
# from project root (Windows PowerShell)
npm install
```

2. Create environment variables (create `.env` in the project root)

```
MONGO_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
PORT=3000
```

3. Run the app (example dev script using ts-node-dev / nodemon)

```powershell
npm run dev
# or build and run
npm run build
npm start
```

**Important env variables**

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — JWT signing secret
- `NODE_ENV` — `development` or `production` (used by error handler)
- `PORT` — server port (optional)

**Project structure (key files & folders)**

- `src/app.ts` — express app setup and middleware
- `src/server.ts` / `src/index.ts` — bootstrapping
- `src/routes/` — route definitions (e.g., `book_routes.ts`, `auth_routes.ts`)
- `src/controllers/` — request handlers (controllers) organized under `book_logics` and `auth`
- `src/services/` — (some service logic exists; recommended to move business logic here)
- `src/models/` — Mongoose schemas (`book.ts`, `User.ts`)
- `src/middleware/error.handler.ts` — central error handler

**API snapshot (what to expect)**

- `POST /api/auth/signup` — register
- `POST /api/auth/signin` — login (returns JWT)
- `GET /api/book` — list books
- `GET /api/book/:id` — view book details
- `POST /api/book/add` — add book (protected)
- `DELETE /api/book/:id` — delete book (protected)
- Search endpoints by author/title exist under book routes

(See `src/routes/book_routes.ts` and `src/controllers/book_logics` for details.)

**Development notes & recommendations**

- Normalize schema and field naming (`publishDate` or `publish_date`), and keep naming consistent across code and client requests.
- Use `{ new: true, runValidators: true, context: 'query' }` for `findByIdAndUpdate` calls.
- Add request validation (Joi / Zod / express-validator) to protect routes and provide clear errors.
- Keep controllers thin: move DB/business logic to `src/services/*` for testability.
- Add unit tests (Jest) and integration tests (Supertest) before production changes.
- Configure `NODE_ENV` in `.env` or via scripts so the error handler can hide stack traces in production.

**How to contribute (for you)**

- Pick one unbuilt feature above (Borrow/Return recommended) and implement it in small steps:
  1. Add fields to `src/models/book.ts` (e.g., `isAvailable`, `borrowedBy`, `borrowHistory`).
  2. Create service functions `src/services/borrow.service.ts` with atomic updates.
  3. Create controller wrappers in `src/controllers/book_logics/borrow_Book.ts` and `return_Book.ts`.
  4. Add routes in `src/routes/book_routes.ts` and protect them with `src/middleware/authMiddleWare.ts`.

**Files created**

- README created at project root: [README.md](README.md)

**Resources / next learning steps**

- Learn about Mongoose transactions (sessions) for safe borrow/return flows.
- Read about JWT refresh tokens and secure storage for long sessions.
- Add logging (winston/pino) and request logging (morgan) before deploying.

---

If you'd like, I can now:

- scaffold the `borrow` and `return` controllers and service, or
- add request validation for the `add` and `update` book endpoints, or
- fix the `error.handler.ts` logic and update `NODE_ENV` usage.

Pick one and I'll implement it next.
