# Repository Guidelines

## Project Structure & Module Organization

This is a single-page React portfolio built with TypeScript and Vite. Root `index.html` loads `src/index.tsx`; `src/App.tsx` composes the page. Sections live in `src/components/` with adjacent CSS. Project content is defined in `src/components/Projects/projectData.ts`. Shared styles and design tokens live in `src/index.css`. The canonical logo and favicon is `public/logo.svg`; `public/` also contains the manifest and hosting redirects. `build/` is generated production output and is ignored by Git. Generate it with `npm run build` for validation or deployment; do not edit or commit it.

For project entries in `src/components/Projects/projectData.ts`, set `link` to a URL string or omit it for projects without a public URL. Use `mobileDescription` for an optional shorter card summary on small screens.

## Developer Preferences

- Never write or run unit tests for this project, including existing unit tests. This repository preference takes precedence over testing recommendations in skills.
- Before adding or changing code, read and apply `$simple-engineering` and `$karpathy-guidelines`.
- Treat code quality as equally important as the product outcome. This developer portfolio showcases engineering craftsmanship as well as the finished experience.
- Favor clear, simple, maintainable code. Reuse existing functionality, avoid speculative abstractions, and keep changes focused on the requested work. Review each changed line for necessity and readability.
- Use custom components and plain CSS. Keep navigation as section anchors; avoid adding UI frameworks or routing libraries for this page.

## Build and Development Commands

- Use Node.js 26 LTS, as declared in `.nvmrc` and package engines.
- `npm ci`: install dependencies from `package-lock.json`.
- `npm start`: run the local development server with automatic reload.
- `npm run build`: create the optimized production bundle in `build/`.
- `npm run typecheck` / `npm run lint`: check types and code without rewriting files.
- `npm run preview`: serve the production build locally.
- `npm run deploy`: build via `predeploy`, then publish `build/` using `gh-pages`. Run only when deployment is intended.

## Hosting and Dependencies

Netlify builds with `npm run build` and publishes `build/`. `public/_redirects` maps legacy project paths to `/#projects` and `/contact` to `/#github` before the HTML fallback. Vite's local servers do not apply these redirects; validate them on the hosting platform. `static.json` provides a `build/` root and fallback for compatible hosts.

The scoped `minimatch` override for TypeScript ESLint addresses [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249). Remove it when the upstream dependency includes the fix. Use `npm audit` to review dependencies; avoid forced upgrades that bypass compatibility checks.

## Coding Style & Naming Conventions

Use strict TypeScript, TSX, and function components. Name components and their files in PascalCase; use camelCase for functions, props, and state. Type component props and event handlers without `any`. Match surrounding indentation and quote style: existing files vary between two and four spaces. Keep styles beside components and reuse CSS variables. ESLint uses `eslint.config.js`; no formatter is configured.

## Validation Guidelines

Validate through code review, type checking, linting, production builds, and focused browser checks. Check responsive layouts, direct route loading, navigation, and affected interactions. Never write or run unit tests.

## Commit & Pull Request Guidelines

History includes short descriptive messages and `fix:` prefixes. Prefer concise, imperative subjects, for example `fix: correct contact submission feedback`. Keep commits focused. In PRs, describe the change, link relevant issues, record build results and manual validation, and include screenshots for visual changes.
