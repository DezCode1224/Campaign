# Campaign Website - Dezmond Rosier for District 1

A modern, responsive campaign website built with Parcel, Bootstrap 4, and SCSS.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Build the site:
```bash
npm run build
```

3. Serve locally:
```bash
npm run serve
```

The site will be available at `http://localhost:1907`

## Development

For development, use:
```bash
npm run serve
```

This builds the site and serves it on port 1907.

## Project Structure

```
src/
├── assets/          # Images and other assets
├── components/      # JavaScript components
├── data/            # Configuration data
├── priorities/       # Priority detail pages
├── sass/            # SCSS stylesheets
├── scripts/         # JavaScript files
├── index.html       # Home page
├── about.html       # About page
├── priorities.html  # Priorities index
├── donate.html      # Donation page
├── endorsements.html
├── get-involved.html
├── news.html
├── index.js         # Main JavaScript entry point
└── styles.scss      # Main stylesheet
```

## Key Features

- Responsive design (mobile-first)
- Accessible navigation with dropdown menus
- Hero section with overlay forms
- 12 priority detail pages
- Donation functionality
- Static site generation with Parcel

## Technologies

- Parcel 2.16.4 (bundler)
- Bootstrap 4.3.1 (via CDN)
- SCSS/Sass (styling)
- Vanilla JavaScript (no frameworks)
- ScrollReveal.js (animations)

## Build Configuration

The build script explicitly lists all HTML files to avoid bundling conflicts with Parcel 2.x. All pages are built to the `dist/` directory.

## Deployment

The site is configured for GitHub Pages deployment. The build output in `dist/` should be deployed.

## Notes

- Bootstrap CSS must be included in every HTML file's `<head>`
- Use hash fragments (`#amount=10`) instead of query parameters for navigation
- All HTML files must be explicitly listed in the build script
