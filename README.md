# Dilip Portfolio

A modern, responsive portfolio website built with React, based on Dilip's resume. Easily deployable to GitHub Pages.

## Features

- About, Experience, Education, Skills, and Projects sections
- Responsive, clean design
- Easy to update resume data in `src/resume/resumeData.json`
- Navigation with React Router

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

## Deploy to GitHub Pages

This portfolio is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
1. Builds the React application
2. Deploys it to GitHub Pages automatically

**To enable automatic deployment:**
1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Push changes to the `main` branch
4. The site will be automatically deployed to `https://dilipvcu.github.io/Portfolio`

### Manual Build

To build the application locally:
```bash
npm run build
```

The build output will be in the `build/` directory.

## Customizing Resume Data

Edit `src/resume/resumeData.json` to update your information.

---

This project was generated and customized by GitHub Copilot.
