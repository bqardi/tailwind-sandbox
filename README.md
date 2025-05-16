# Vanilla Webpack + Tailwind v4 Template

A minimal starter template using Webpack and Tailwind CSS v4.1.5.

This project supports:

- Bundling Tailwind CSS via `@import "tailwindcss";`
- Bundling JavaScript modules via `import` keyword
- Asset loading (images etc.)
- Output to the docs/ folder for GitHub Pages deployment

📁 Project Structure

```
your-project/
 ├── src/
 │ ├── index.html
 │ ├── styles/
 │ │    └── main.css
 │ ├── js/
 │ │    ├── main.js
 │ │    └── sayHello.js
 │ └── assets/
 │      └── example.png
 ├── docs/ <-- Final output
 ├── package.json
 ├── postcss.config.js
 ├── webpack.config.js
```

🚀 Getting Started

1. Install dependencies `npm install`

2. Build the project `npm run build`

This will create a docs/ folder with:

`index.html`  
`main.css`  
`main.js`  
`assets/`

Ready for deployment (e.g. GitHub Pages).

3. Watch for changes (optional)  
   `npm run dev`

_**NOTE!** When developing, you can use the `Live Server` extension in VSCode
to view changes in real-time, but you must be aware that you should
"serve" the `index.html` file from the built `docs` folder (not the one in `src`)!_

🧩 Tailwind Notes
Uses Tailwind CSS v4+

```css
/* Tailwind is imported using: */
@import "tailwindcss";

/* Defaults and theme variables are set using: */
@theme {
  --default-padding: 1rem;
}
```

📦 Deployment setup

1. Setup Github pages for your repository:

- Go to your repository on GitHub.
- First make sure the repo is public.
- Click on "Settings -> Pages".
- Select Source `GitHub Actions`
- Select `Static HTML` -> `Configure`.
- Configure the `.yml` by copying the content from the `.github/workflows/static.yml` file located in this template.
- Click `Commit changes...` to save the settings (then `Commit changes` again in the popup).

2. Initialize a new Git repository, add a remote repository, etc.:

- `git init`
- `git remote add origin git@github.com:[USER_NAME]/[REPO_NAME].git`.
- `git add .`
- `git commit -m "Initial commit"`
- `git push -u origin main`
