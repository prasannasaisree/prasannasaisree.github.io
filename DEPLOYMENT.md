
# GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

## Setup Instructions

1. **Repository Settings**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The site will be available at: `https://username.github.io/prasanna-saisree-poetry/`

2. **Custom Domain (Optional)**
   - Add a `CNAME` file to the `public/` directory with your domain
   - Configure DNS settings to point to GitHub Pages

## Automatic Deployment

- Every push to the `main` branch triggers an automatic build and deployment
- The GitHub Actions workflow handles the entire process
- Build status can be monitored in the "Actions" tab of your repository

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Technical Details

- **Base Path**: Configured for GitHub Pages subdirectory structure
- **Client-Side Routing**: 404.html handles direct URL access
- **Build Tool**: Vite with React
- **Deployment**: GitHub Actions with automatic artifact upload

## Troubleshooting

- Ensure repository is public for free GitHub Pages
- Check Actions tab for build/deployment errors
- Verify all routes work after deployment
- Test social media sharing with full URLs
