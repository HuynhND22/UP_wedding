# WeddingWed (Next.js)

## Local Run

```bash
npm install
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

## Build Check

```bash
npm run build
```

## Deployment (Vercel)

Project is a single-page Next.js app (`/`) and is ready for Vercel.

### 1) Push source code to GitHub

```bash
git add .
git commit -m "prepare project for vercel deployment"
git push
```

### 2) Import project on Vercel

- Go to [https://vercel.com/new](https://vercel.com/new)
- Import this GitHub repo
- Framework preset: `Next.js` (auto-detected)
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: `.next` (default)

### 3) Deploy

- Click **Deploy**
- After success, Vercel returns your production URL

## Important Files For Deploy

- `vercel.json`: explicit Next.js/Vercel build setup
- `package.json`: scripts for dev/build/start
- `.gitignore`: excludes local artifacts (`node_modules`, `.next`, logs, env files)

## Change Embedded Google Map

Edit `src/app/page.tsx` and replace `MAP_URL` (iframe embed link) and `MAP_OPEN`.
