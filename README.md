# Parker's Portfolio

A personal developer portfolio built with React, TypeScript, and Vite. The current pages and project content are retained while a visual and content refresh is prepared.

Live: https://parkersatterfield.com/

## Local development

Use Node.js 26 LTS (see `.nvmrc`) and npm. With a compatible Node version manager, run `nvm install 26` and `nvm use 26`, then:

```sh
npm ci
npm start
```

Vite prints the local development URL. Its default port is 5173.

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Vite development server. |
| `npm run typecheck` | Check TypeScript without emitting files. |
| `npm run lint` | Run ESLint without rewriting files. |
| `npm run build` | Check TypeScript and generate the production site in `build/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run deploy` | Build and publish `build/` to GitHub Pages. |

Do not write or run unit tests in this repository. Validate changes through type checking, linting, builds, code review, and focused browser checks. For contact-form checks, intercept requests rather than sending real messages.

## Structure and hosting

- `index.html` is the Vite HTML entry point; `src/index.tsx` mounts React.
- `src/components/` contains pages and components with adjacent CSS and local assets. Shared project images live in `src/images/`.
- `public/` contains files copied unchanged into the build, including the Netlify SPA fallback in `_redirects`.
- `build/` remains the production output and is tracked to preserve the repository's existing convention. Regenerate it after source changes; do not edit it manually.

Netlify builds with `npm run build` and publishes `build/`. Keep the SPA fallback so existing project and contact URLs work when loaded directly. `static.json` also retains its `build/` root and SPA routing. The GitHub Pages deployment command is retained, but requires host-specific SPA fallback support for direct nested URLs. No deployment occurs during local builds.

## Dependencies and configuration

The app uses React and React Router. Vite, TypeScript, and ESLint provide the development tooling. TypeScript stays on the supported 6.0 release line until TypeScript ESLint supports newer versions. Use `npm audit` to review both application and development dependencies; do not use forced upgrades to bypass compatibility checks.

A scoped override updates TypeScript ESLint's `minimatch` dependency to the patched 11.x line for [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249). Remove the override when the upstream dependency includes the fix.

The contact form still posts to Formspark. Its replacement using existing AWS infrastructure is a separate phase, as are the single-page redesign and selective shadcn/ui adoption. Never put AWS credentials in browser code or Vite environment variables.

## License

[Apache 2.0](https://opensource.org/licenses/Apache-2.0)


            
