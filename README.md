# Parker's Portfolio

A single-page backend developer portfolio built with React, TypeScript, and Vite. Custom components and plain CSS provide a dark layout with an introduction, selected projects, and a GitHub profile card in the introduction.

Live: https://parkersatterfield.com/

## Local development

Use an installed Node.js 26 LTS runtime and npm. A version manager is optional; `.nvmrc` records the required major version.

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

Do not write or run unit tests in this repository. Validate changes through type checking, linting, builds, code review, and focused browser checks.

## Structure and hosting

- `index.html` is the Vite HTML entry point; `src/index.tsx` mounts React.
- `src/components/` contains the page sections and project-card component with adjacent CSS. Edit project entries in `src/components/Projects/projectData.ts`; omit `link` for projects without a public URL.
- `src/index.css` defines shared design tokens, typography, focus styles, and basic controls.
- `public/logo.svg` is the canonical logo and favicon. `public/` also contains the manifest, robots file, and hosting redirects.
- `build/` remains the production output and is tracked to preserve the repository's existing convention. Regenerate it after source changes; do not edit it manually.

Netlify builds with `npm run build` and publishes `build/`. Its `_redirects` file sends `/projects`, `/project/*`, and `/casestudy/*` to `/#projects`, and `/contact` to `/#github`, before the HTML fallback. `static.json` retains its `build/` root and fallback. Netlify redirects are hosting rules, so Vite's local servers serve the main page at old paths without applying those redirects. Other hosts require equivalent redirect rules. No deployment occurs during local builds.

## Dependencies and configuration

The app's runtime dependencies are React and React DOM. Navigation uses native section anchors; styling uses custom CSS with Poppins from Google Fonts and a system monospace stack. No UI framework, icon library, or router is used. Vite, TypeScript, and ESLint provide the development tooling. TypeScript stays on the supported 6.0 release line until TypeScript ESLint supports newer versions. Use `npm audit` to review both application and development dependencies; do not use forced upgrades to bypass compatibility checks.

A scoped override updates TypeScript ESLint's `minimatch` dependency to the patched 11.x line for [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249). Remove the override when the upstream dependency includes the fix.

The page has no contact form or submission endpoint. The GitHub profile is an ordinary external link; GitHub API integration is not currently enabled.

## License

[Apache 2.0](https://opensource.org/licenses/Apache-2.0)


            
