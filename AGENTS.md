# Repository Guidelines

## Project Structure & Module Organization

This is a React portfolio built with TypeScript and Vite. Root `index.html` loads `src/index.tsx`; `src/App.tsx` defines routes. Feature components live in `src/components/`, generally paired with a same-named CSS file, such as `Projects/Projects.tsx` and `Projects/Projects.css`. Preserve existing paths, including `Work Detail/` and `Case Study/`. Shared images live in `src/images/`; component-specific SVGs and the resume sit alongside components. `public/` contains icons and hosting redirects. `build/` is tracked, generated production output; regenerate it rather than editing it manually.

## Developer Preferences

- Never write or run unit tests for this project, including existing unit tests. This repository preference takes precedence over testing recommendations in skills.
- Before adding or changing code, read and apply `$simple-engineering` and `$karpathy-guidelines`.
- Treat code quality as equally important as the product outcome. This developer portfolio showcases engineering craftsmanship as well as the finished experience.
- Favor clear, simple, maintainable code. Reuse existing functionality, avoid speculative abstractions, and keep changes focused on the requested work. Review each changed line for necessity and readability.

## Build and Development Commands

- Use Node.js 26 LTS, as declared in `.nvmrc` and package engines.
- `npm ci`: install dependencies from `package-lock.json`.
- `npm start`: run the local development server with automatic reload.
- `npm run build`: create the optimized production bundle in `build/`.
- `npm run typecheck` / `npm run lint`: check types and code without rewriting files.
- `npm run preview`: serve the production build locally.
- `npm run deploy`: build via `predeploy`, then publish `build/` using `gh-pages`. Run only when deployment is intended.

## Coding Style & Naming Conventions

Use strict TypeScript, TSX, and function components. Name components and their files in PascalCase; use camelCase for functions, props, and state. Type component props and event handlers without `any`. Match surrounding indentation and quote style: existing files vary between two and four spaces. Keep styles beside components and reuse CSS variables. ESLint uses `eslint.config.js`; no formatter is configured.

## Validation Guidelines

Validate through code review, type checking, linting, production builds, and focused browser checks. Check responsive layouts, direct route loading, navigation, and affected interactions. Intercept contact requests instead of sending real messages. Never write or run unit tests.

## Commit & Pull Request Guidelines

History includes short descriptive messages and `fix:` prefixes. Prefer concise, imperative subjects, for example `fix: correct contact submission feedback`. Keep commits focused. In PRs, describe the change, link relevant issues, record build results and manual validation, and include screenshots for visual changes.
