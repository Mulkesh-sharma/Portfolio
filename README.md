# Portfolio

A modern, responsive personal portfolio built with React and Bootstrap. It showcases projects, an about section, and a downloadable resume rendered inline using React-PDF.

## Features

- **Responsive UI** using React and Bootstrap 5
- **SPA navigation** with React Router v6
- **Projects showcase** and About pages
- **Resume preview and download** powered by `react-pdf`
- **Particles background** and subtle UI effects
- **Ready for GitHub Pages deployment** via `gh-pages`

## Tech Stack

- **Frontend:** React 17, React Router 6, React-Bootstrap, Bootstrap 5
- **Utilities:** Axios, React Icons, Typewriter Effect, react-tsparticles
- **PDF Rendering:** `react-pdf` 6.2.2
- **Build Tooling:** Create React App (react-scripts 5.0.1)

## Getting Started

Prerequisites:

- Node.js 16+ and npm 8+ (LTS recommended)

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The app will be available at http://localhost:3000.

Build for production:

```bash
npm run build
```

## Available Scripts

The following scripts are defined in `package.json`:

- `start` — Runs the app in development mode
- `build` — Produces a production build in the `build/` directory
- `test` — Runs tests in watch mode (CRA default)
- `eject` — Ejects CRA configuration (irreversible)
- `predeploy` — Builds before deployment
- `deploy` — Deploys to GitHub Pages (requires `homepage` configured)

## Deployment (GitHub Pages)

This project is configured to deploy via `gh-pages`.

1. Add a `homepage` field to `package.json`:
   
   ```json
   {
     "homepage": "https://<your-github-username>.github.io/<repo-name>"
   }
   ```

2. Commit and push your changes.

3. Deploy:
   
   ```bash
   npm run deploy
   ```

GitHub Pages will host the contents of the `build/` directory on the URL you specified.

## Project Structure

```
src/
  App.js                 # Main app routes and layout
  App.css                # App-level styles
  index.js               # App entry point
  style.css              # Global styles
  components/
    Navbar.js            # Top navigation bar
    Footer.js            # Footer component
    Particle.js          # Background particles
    ScrollToTop.js       # Scroll restoration between routes
    Home/                # Home page components
    About/               # About page components
    Projects/            # Projects listing
    Resume/
      ResumeNew.js       # Resume preview + download using react-pdf
  Assets/                # Images and documents (includes resume PDF)
public/
  index.html             # HTML template
```

## Configuration

- Replace the resume PDF in `src/Assets/` as needed and update references in `src/components/Resume/ResumeNew.js`.
- Update links (e.g., GitHub repo, social links) in `src/components/Navbar.js`.

## Troubleshooting

- If you encounter issues with `react-pdf` CSS imports, ensure the stylesheet import in `ResumeNew.js` uses the ESM path:
  
  ```js
  import "react-pdf/dist/esm/Page/AnnotationLayer.css";
  ```

- This project uses `react-scripts` 5.0.1. If you use a different Node.js version, clear the cache and reinstall:
  
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## License

This project is open source. You may adapt and use it for your personal portfolio.

## Acknowledgements

- Built with Create React App
- UI powered by Bootstrap and React-Bootstrap
- Resume viewing by React-PDF