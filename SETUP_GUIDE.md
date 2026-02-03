# Complete Setup Guide: Campaign Website Replication

This guide documents every step, file, and configuration needed to replicate the Dezmond Rosier campaign website in a new project.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Initial Setup](#initial-setup)
3. [File Structure](#file-structure)
4. [Dependencies](#dependencies)
5. [Configuration Files](#configuration-files)
6. [HTML Pages](#html-pages)
7. [Styling (SCSS)](#styling-scss)
8. [JavaScript Files](#javascript-files)
9. [Assets](#assets)
10. [Build Configuration](#build-configuration)
11. [Key Features](#key-features)

---

## Project Overview

**Tech Stack:**
- Parcel 2.16.4 (bundler)
- Bootstrap 4.3.1 (via CDN)
- SCSS/Sass (styling)
- Vanilla JavaScript (no frameworks)
- ScrollReveal.js (animations)

**Key Features:**
- Responsive design (mobile-first)
- Accessible navigation with dropdown menus
- Hero section with overlay forms
- 12 priority detail pages
- Donation functionality
- Static site generation

---

## Initial Setup

### 1. Create Project Structure

```bash
mkdir campaign-website
cd campaign-website
npm init -y
```

### 2. Install Dependencies

```bash
npm install --save-dev @parcel/transformer-sass@^2.16.4 parcel@^2.16.4 prettier@^2.8.1

npm install --save @popperjs/core@^2.11.6 bootstrap@^5.2.3 jquery@^3.6.3 popper.js@^1.16.1 vanilla-tilt@^1.8.0
```

**Note:** Bootstrap 5.2.3 is installed but we use Bootstrap 4.3.1 via CDN in HTML files.

### 3. Create Directory Structure

```
campaign-website/
├── src/
│   ├── assets/
│   │   ├── favicon.png
│   │   ├── profile.jpg
│   │   ├── project.jpg
│   │   └── resume.pdf
│   ├── components/
│   │   ├── donateAmounts.js
│   │   ├── footer.js
│   │   └── header.js
│   ├── data/
│   │   └── scrollRevealConfig.js
│   ├── priorities/
│   │   ├── healthcare.html
│   │   ├── education.html
│   │   ├── climate-energy.html
│   │   ├── economy-jobs-infrastructure.html
│   │   ├── gun-violence.html
│   │   ├── housing.html
│   │   ├── immigration-reform.html
│   │   ├── lgbtq-rights.html
│   │   ├── national-security-veterans.html
│   │   ├── criminal-justice-reform.html
│   │   ├── seniors.html
│   │   └── campaign-finance-reform.html
│   ├── sass/
│   │   ├── abstracts/
│   │   │   ├── _helpers.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── base/
│   │   │   ├── _base.scss
│   │   │   └── _typography.scss
│   │   ├── components/
│   │   │   └── _buttons.scss
│   │   ├── layout/
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   └── _sections.scss
│   │   ├── sections/
│   │   │   ├── _about.scss
│   │   │   ├── _contact.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _priorities.scss
│   │   │   └── _projects.scss
│   │   └── vendors/
│   │       └── _bootstrap.scss
│   ├── scripts/
│   │   ├── dropdown.js
│   │   ├── scrollReveal.js
│   │   └── tiltAnimation.js
│   ├── index.html
│   ├── about.html
│   ├── priorities.html
│   ├── endorsements.html
│   ├── get-involved.html
│   ├── news.html
│   ├── donate.html
│   ├── index.js
│   └── styles.scss
├── .parcelrc
├── package.json
└── README.md
```

---

## Dependencies

### package.json

```json
{
  "name": "dez4prez",
  "version": "1.0.0",
  "private": "true",
  "description": "Campaign website for Dezmond Rosier",
  "source": "src/index.html",
  "scripts": {
    "start": "parcel serve src/index.html --port 1907 --no-autoinstall --no-hmr --no-source-maps --no-cache",
    "dev": "npm run build && npx http-server dist -p 1907 -o",
    "build": "parcel build src/index.html src/about.html src/priorities.html src/priorities/healthcare.html src/priorities/education.html src/priorities/climate-energy.html src/priorities/economy-jobs-infrastructure.html src/priorities/gun-violence.html src/priorities/housing.html src/priorities/immigration-reform.html src/priorities/lgbtq-rights.html src/priorities/national-security-veterans.html src/priorities/criminal-justice-reform.html src/priorities/seniors.html src/priorities/campaign-finance-reform.html src/endorsements.html src/get-involved.html src/news.html src/donate.html --public-url ./ --no-cache",
    "serve": "npm run build && npx http-server dist -p 1907 -o"
  },
  "devDependencies": {
    "@parcel/transformer-sass": "^2.16.4",
    "parcel": "^2.16.4",
    "prettier": "^2.8.1"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.6",
    "bootstrap": "^5.2.3",
    "jquery": "^3.6.3",
    "popper.js": "^1.16.1",
    "vanilla-tilt": "^1.8.0"
  }
}
```

**Important Notes:**
- Use `npm run serve` for development (builds then serves)
- `npm start` may have issues with Parcel 2.x and multiple HTML files
- Build script explicitly lists all HTML files to avoid bundling conflicts

---

## Configuration Files

### .parcelrc

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsm,jsx,es6,cjs,ts,tsx}": [
      "@parcel/transformer-js"
    ],
    "*.{sass,scss}": [
      "@parcel/transformer-sass"
    ],
    "*.html": [
      "@parcel/transformer-html"
    ]
  },
  "bundler": "@parcel/bundler-default",
  "resolvers": ["@parcel/resolver-default"]
}
```

---

## HTML Pages

### Critical: Bootstrap CSS Must Be Included

**Every HTML file must include Bootstrap CSS in the `<head>`:**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
```

### Common Head Section (All Pages)

```html
<!DOCTYPE html>
<html lang="en" class="sr">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="shortcut icon" type="image/png" href="assets/favicon.png" />
  <title>Page Title | Elect Dezmond Rosier</title>
  <meta name="description" content="Page description" />
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  
  <!-- Bootstrap CSS (REQUIRED) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
  
  <!-- Custom Styles -->
  <link rel="stylesheet" href="styles.scss" />
  
  <!-- ScrollReveal -->
  <script defer src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
</head>
```

### Common Footer Scripts (All Pages)

```html
<!-- Bootstrap JS for navigation -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script defer type="module" src="index.js"></script>
```

### Navigation Header (All Pages)

**Key Points:**
- Uses Bootstrap 4 syntax: `data-toggle="dropdown"` (NOT `data-bs-toggle`)
- Fixed top navbar with blue background
- Dropdown menu for Priorities
- Mobile hamburger menu
- Red DONATE button

```html
<nav class="navbar navbar-expand-lg fixed-top" role="navigation" aria-label="Main navigation">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <span class="state-icon" style="width: 40px; height: 40px; background: white; border-radius: 2px; display: inline-block;"></span>
      <strong>DEZMOND ROSIER</strong>
    </a>
    <button 
      class="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto align-items-center">
        <li class="nav-item">
          <a class="nav-link" href="about.html">ABOUT</a>
        </li>
        <li class="nav-item dropdown">
          <a 
            class="nav-link dropdown-toggle" 
            href="#" 
            id="prioritiesDropdown" 
            role="button" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
          >
            PRIORITIES
          </a>
          <div class="dropdown-menu" aria-labelledby="prioritiesDropdown">
            <a class="dropdown-item" href="priorities.html">All Priorities</a>
            <a class="dropdown-item" href="priorities/healthcare.html">Healthcare</a>
            <a class="dropdown-item" href="priorities/education.html">Education</a>
            <!-- ... more priority items ... -->
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="endorsements.html">2024 ENDORSEMENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="get-involved.html">GET INVOLVED</a>
        </li>
        <!-- Social icons -->
        <li class="nav-item">
          <a class="nav-link" href="#!" target="_blank" aria-label="Twitter">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <!-- ... more social icons ... -->
        <li class="nav-item">
          <a class="nav-link btn text-white ml-2" href="donate.html">DONATE</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

**For Priority Pages (in subdirectories):**
- Use relative paths: `../index.html`, `../styles.scss`, `../assets/`
- Navigation links use `../` prefix

### index.html - Home Page Structure

**Hero Section (Critical Feature):**
```html
<section id="hero" class="hero-section" style="margin-top: 60px;">
  <div class="hero-image-container">
    <img src="assets/profile.jpg" alt="Dezmond Rosier with supporters" class="hero-image" />
    <div class="hero-overlay">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="join-team-form">
              <h2 class="join-team-title">JOIN THE TEAM</h2>
              <form class="join-form" action="get-involved.html" method="get">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input type="email" class="form-control" name="email" placeholder="Email*" required />
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" class="form-control" name="postal_code" placeholder="Postal Code*" required />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary join-submit-btn">I'm in!</button>
              </form>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="donate-now-form">
              <h2 class="donate-now-title">DONATE NOW</h2>
              <div class="donate-amounts-row">
                <a href="donate.html#amount=10" class="donate-amount-btn" data-amount="10">$10</a>
                <a href="donate.html#amount=25" class="donate-amount-btn" data-amount="25">$25</a>
                <a href="donate.html#amount=50" class="donate-amount-btn" data-amount="50">$50</a>
                <a href="donate.html" class="donate-amount-btn" data-amount="other">OTHER</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Important:** Use hash fragments (`#amount=10`) NOT query parameters (`?amount=10`) to avoid Parcel bundling conflicts.

---

## Styling (SCSS)

### Main Stylesheet: src/styles.scss

```scss
// Bootstrap is loaded via CDN in HTML, no need to import here
// @import "./sass/vendors/bootstrap.scss";

@import "./sass/abstracts/mixins";
@import "./sass/abstracts/variables";
@import "./sass/abstracts/helpers";

@import "./sass/base/base";
@import "./sass/base/typography";

@import "./sass/components/buttons";

@import "./sass/layout/header";
@import "./sass/layout/footer";
@import "./sass/layout/sections";

@import "./sass/sections/about";
@import "./sass/sections/contact";
@import "./sass/sections/hero";
@import "./sass/sections/projects";
@import "./sass/sections/priorities";
```

### Color Variables: src/sass/abstracts/_variables.scss

```scss
// COLORS
$primary-color: #1a5490; // Deep blue for primary actions
$secondary-color: #00cdac;
$accent-red: #d32f2f; // Red for donate button
$header-blue: #4a90e2; // Light blue for header background
$dark-blue: #1a5490; // Dark blue for text/buttons

$white-color: #fff;

$dark-grey: #333333;
$light-grey: #d2d2d2;

$dark-blue-text: #272341; // For Headings

// FONT SIZE
$default-font-size: 1.6rem;
$big-font-size: 4rem;
$mid-font-size: 2.5rem;
```

### Hero Section Styles: src/sass/sections/_hero.scss

**Key Features:**
- Full-width hero image with overlay
- Two form boxes (Join Team + Donate)
- Responsive design
- Backdrop blur effects

```scss
.hero-section {
  position: relative;
  width: 100%;
  margin-top: 60px;
}

.hero-image-container {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem 0;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
}

.join-team-form {
  background: rgba($primary-color, 0.95);
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
}

.donate-now-form {
  background: rgba($primary-color, 0.95);
  padding: 2.5rem;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
}

.donate-amount-btn {
  background: $accent-red;
  color: $white-color;
  border: 2px solid $accent-red;
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);

  &:hover {
    background: darken($accent-red, 10%);
    border-color: darken($accent-red, 10%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,.3);
    color: $white-color;
    text-decoration: none;
  }
}
```

### Header Styles: src/sass/layout/_header.scss

**Key Features:**
- Blue background (`$header-blue`)
- White text
- Red DONATE button
- Dropdown menu styling
- Mobile responsive

```scss
.navbar {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 1rem 0;
  z-index: 1000;
  background: $header-blue !important;
  border-bottom: none;

  .navbar-brand {
    font-size: 1.5rem;
    color: $white-color !important;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .nav-link {
    color: $white-color !important;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.05em;

    &.btn {
      background: $accent-red !important;
      border: none !important;
      color: $white-color !important;
    }
  }

  .dropdown-menu {
    background: $white-color;
    border: 1px solid rgba(0,0,0,.15);
    box-shadow: 0 4px 6px rgba(0,0,0,.1);
    border-radius: 4px;
    margin-top: 0.5rem;
    min-width: 250px;
    padding: 0.5rem 0;
  }
}
```

---

## JavaScript Files

### Main Entry: src/index.js

```javascript
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import "./scripts/dropdown";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
```

### Dropdown Functionality: src/scripts/dropdown.js

**Critical:** This enables hover dropdowns on desktop and keyboard navigation.

```javascript
// Enhanced dropdown functionality for accessibility
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    const dropdown = toggle.nextElementSibling;
    
    if (!dropdown) return;
    
    // Desktop: Show on hover
    if (window.innerWidth > 991) {
      toggle.addEventListener('mouseenter', function() {
        $(this).dropdown('show');
      });
      
      const dropdownMenu = $(dropdown);
      dropdownMenu.on('mouseenter', function() {
        $(toggle).dropdown('show');
      });
      
      dropdownMenu.on('mouseleave', function() {
        $(toggle).dropdown('hide');
      });
      
      toggle.addEventListener('mouseleave', function(e) {
        if (!dropdown.contains(e.relatedTarget)) {
          $(this).dropdown('hide');
        }
      });
    }
    
    // Keyboard navigation
    toggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        $(this).dropdown('toggle');
      } else if (e.key === 'Escape') {
        $(this).dropdown('hide');
        this.focus();
      }
    });
    
    // Handle dropdown item keyboard navigation
    const items = dropdown.querySelectorAll('.dropdown-item');
    items.forEach((item, index) => {
      item.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = items[index + 1] || items[0];
          next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = items[index - 1] || items[items.length - 1];
          prev.focus();
        } else if (e.key === 'Escape') {
          $(toggle).dropdown('hide');
          toggle.focus();
        }
      });
    });
  });
});
```

### Donate Page: Hash Fragment Reading

**In donate.html, add this script to read amount from hash:**

```javascript
<script>
  (function() {
    // Read amount from hash on page load
    const hash = window.location.hash;
    if (hash && hash.includes('amount=')) {
      const amount = hash.split('amount=')[1];
      const button = Array.from(document.querySelectorAll('.donate-btn')).find(btn => btn.dataset.amount === amount);
      if (button) {
        button.click();
      } else if (amount && !isNaN(amount)) {
        // Custom amount from hash
        const customInput = document.getElementById('custom-amount-input');
        const customAmount = document.getElementById('custom-amount');
        if (customInput) customInput.style.display = 'block';
        if (customAmount) {
          customAmount.value = amount;
          if (document.getElementById('donate-submit')) {
            document.getElementById('donate-submit').disabled = false;
          }
        }
      }
    }
  })();
</script>
```

---

## Assets

### Required Images:
- `src/assets/favicon.png` - Site favicon
- `src/assets/profile.jpg` - Hero section image (full-width)
- `src/assets/project.jpg` - Optional, for other sections
- `src/assets/resume.pdf` - Optional, for download

**Image Requirements:**
- Hero image: Recommended 1920x800px or similar wide aspect ratio
- Use actual images (no placeholder fallbacks in production)

---

## Build Configuration

### Development

**Use `npm run serve` for development:**
- Builds all pages
- Serves on port 1907
- Opens browser automatically

**Avoid `npm start` if you have multiple HTML files** - Parcel 2.x has known issues with multiple entry points.

### Production Build

The build script explicitly lists all HTML files:

```json
"build": "parcel build src/index.html src/about.html src/priorities.html ... --public-url ./ --no-cache"
```

**Important:**
- `--public-url ./` ensures relative paths work
- `--no-cache` helps avoid bundling conflicts
- All HTML files must be listed explicitly

### GitHub Pages Deployment

**Update your GitHub Actions workflow:**

```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    # Upload dist directory (Parcel output)
    path: 'dist'
```

**Build before deployment:**
```yaml
- name: Install dependencies
  run: npm ci

- name: Build
  run: npm run build

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: 'dist'
```

---

## Key Features

### 1. Responsive Navigation
- Fixed top navbar
- Mobile hamburger menu
- Desktop hover dropdowns
- Keyboard accessible

### 2. Hero Section
- Full-width background image
- Two overlay forms (Join Team + Donate)
- Responsive layout
- Backdrop blur effects

### 3. Donation System
- Hash fragments for amounts (`#amount=10`)
- Pre-selection on donate page
- Custom amount input

### 4. Priority Pages
- 12 individual priority detail pages
- Grid view on priorities index
- Consistent navigation

### 5. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states

---

## Common Issues & Solutions

### Issue: Navbar dropdown not working
**Solution:** Ensure Bootstrap CSS is included in EVERY HTML file's `<head>`

### Issue: "Bundles must have unique names" error
**Solution:** Use hash fragments (`#amount=10`) instead of query parameters (`?amount=10`)

### Issue: Styles not loading
**Solution:** Check that `styles.scss` is imported in HTML and Parcel is processing it

### Issue: Mobile menu not working
**Solution:** Ensure Bootstrap JS is loaded before `index.js`

### Issue: Images not showing
**Solution:** Check paths - use `assets/` for root pages, `../assets/` for subdirectory pages

---

## Quick Start Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Create directory structure
- [ ] Add Bootstrap CSS to all HTML files
- [ ] Set up SCSS files with variables
- [ ] Create navigation header (copy from index.html)
- [ ] Add hero section with forms
- [ ] Create all priority pages
- [ ] Add dropdown.js script
- [ ] Test build (`npm run build`)
- [ ] Test serve (`npm run serve`)
- [ ] Update GitHub Actions for deployment

---

## Final Notes

1. **Bootstrap 4.3.1 via CDN** - Don't import Bootstrap SCSS, use CDN
2. **Hash fragments for navigation** - Avoids Parcel bundling issues
3. **Explicit file listing in build** - Required for Parcel 2.x
4. **Mobile-first responsive** - Test on mobile devices
5. **Accessibility first** - Use semantic HTML and ARIA labels

This setup creates a professional, accessible, and maintainable campaign website.
