# Repository Guidelines

## Project Structure & Module Organization

This is a React 17 portfolio built with Create React App. `src/index.js` mounts the app; `src/App.js` defines routes and page transitions. Feature components live in `src/components/`, generally paired with a same-named CSS file, such as `Projects/Projects.js` and `Projects/Projects.css`. Preserve existing paths, including `Work Detail/` and `Case Study/`. Shared project images live in `src/images/`; component-specific SVGs and the resume sit alongside components. `public/` contains the HTML shell, icons, and hosting redirects. `build/` contains generated production output; make source changes in `src/` or `public/`.

## Developer Preferences

- Never write or run unit tests for this project, including existing unit tests. This repository preference takes precedence over testing recommendations in skills.
- Before adding or changing code, read and apply `$simple-engineering` and `$karpathy-guidelines`.
- Treat code quality as equally important as the product outcome. This developer portfolio showcases engineering craftsmanship as well as the finished experience.
- Favor clear, simple, maintainable code. Reuse existing functionality, avoid speculative abstractions, and keep changes focused on the requested work. Review each changed line for necessity and readability.

## Build and Development Commands

- `npm ci`: install dependencies from `package-lock.json`.
- `npm start`: run the local development server with automatic reload.
- `npm run build`: create the optimized production bundle in `build/`.
- `npm run deploy`: build via `predeploy`, then publish `build/` using `gh-pages`. Run only when deployment is intended.

## Coding Style & Naming Conventions

Use JavaScript, JSX, and function components. Name components and their files in PascalCase; use camelCase for functions, props, and state. Match the surrounding file's indentation and quote style: existing files vary between two and four spaces. Keep component styles beside their implementation and reuse existing CSS variables where practical. ESLint extends `react-app` and `react-app/jest`; no separate lint script or formatter configuration is defined.

## Validation Guidelines

Validate changes through code review, `npm run build`, and focused manual checks. Check responsive layouts, navigation, and affected interactions for UI changes. Existing Jest and React Testing Library files remain in the repository, but do not write or run unit tests.

## Commit & Pull Request Guidelines

History includes short descriptive messages and `fix:` prefixes. Prefer concise, imperative subjects, for example `fix: correct contact submission feedback`. Keep commits focused. In PRs, describe the change, link relevant issues, record build results and manual validation, and include screenshots for visual changes.
