# Portfolio

A simple portfolio website built with Next.js 14 and Tailwind CSS, deployed on GitHub Pages.

## Features

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS for styling
- Static site export for GitHub Pages
- GitHub Actions for automatic deployment

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at http://localhost:3000/portfolio

## Building

```bash
# Build for production
npm run build
```

The static site will be generated in the `out` directory.

## Deployment

This site is configured to deploy automatically to GitHub Pages when code is pushed to the `main` branch.

To enable GitHub Pages:
1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push code to the `main` branch to trigger deployment

The site will be available at: `https://gold-olar.github.io/portfolio`

## Project Structure

- `/app` - Next.js app directory with pages and layouts
- `/public` - Static assets
- `.github/workflows` - GitHub Actions workflow for deployment