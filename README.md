# matan-makes

Personal site: about, resume, and privacy policy for my apps.

## Run locally

```bash
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173). For production build:

```bash
yarn build
yarn preview
```

## Deployment (GitHub Pages)

- Push to `main` triggers the **Deploy to GitHub Pages** workflow.
- The workflow runs `yarn install --frozen-lockfile` and `yarn build`, then deploys the `dist/` output.
- In the repo **Settings → Pages**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
- After the first successful run, the site is at `https://<username>.github.io/matan-makes/`.

## Stack

- React 18 + Vite
- React Router (Home, Resume, Privacy)
- Plain CSS (variables, responsive layout)
- GitHub Actions for deploy
