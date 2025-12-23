# Project Tasks & Priority Checklist

This file lists prioritized, actionable tasks to bring the project to a strong entry-level Node+TypeScript portfolio state. Check items as you complete them.

## High Priority — fix these first

- [✅:Done] Fix error handler flow (`src/middleware/error.handler.ts`) — ensure AppError branch returns and use `NODE_ENV` to hide stack traces (in-progress)
- [ ] Add request validation middleware (Joi / Zod / express-validator) — wire validators for `add` & `update` endpoints (in-progress)
- [ ] Normalize schema field names and file casing (e.g., `publishDate`, `book.ts` / `User.ts`) — avoid Mongoose silent ignores
- [ ] Enable safe updates on update endpoints (`findByIdAndUpdate` with `{ new: true, runValidators: true, context: 'query' }`)

## Medium Priority — next features and refactors

- [ ] Implement Borrow / Return workflow (models + controllers + services) — add `isAvailable`, `borrowedBy`, `borrowHistory` and atomic updates (Mongoose transactions or conditional `findOneAndUpdate`)
- [ ] Move business logic into `src/services/*` and keep controllers thin — make services unit-testable
- [ ] Add unit + integration tests (Jest + Supertest) covering auth and book flows
- [ ] Add `.env.example` and update `package.json` scripts (`dev`, `build`, `start`, `test`)

## Low Priority — polish & ops

- [ ] Add linting & formatting (`eslint`, `prettier`) and pre-commit hooks (husky)
- [ ] Add request logging (`morgan`) and structured logging (`winston` or `pino`)
- [ ] Add API docs (Swagger / OpenAPI) and example requests
- [ ] Add GitHub Actions CI to run tests and lint on PRs

## Notes

- Mark items checked when implemented. For items in-progress, leave unchecked and add a short note in the PR or commit message.
- If you want, I can implement the first high-priority code change now (`error.handler.ts`) and run quick local verification steps.

---

Generated from the project's current state on 2025-12-19.
