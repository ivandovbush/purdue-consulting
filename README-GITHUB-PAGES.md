# GitHub Pages Deployment Guide

This project is now configured for easy deployment to GitHub Pages.

## Setup Instructions

1. **Update Repository Name**: 
   - In `vite.config.ts`, replace `/repository-name/` with your actual GitHub repository name
   - Example: If your repo is `my-consulting-site`, change it to `/my-consulting-site/`

2. **Add Secrets to GitHub**:
   - Go to your GitHub repository settings
   - Navigate to "Secrets and variables" → "Actions"
   - Add these secrets:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase anon key

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" (will be created automatically)

4. **Deploy**:
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Your site will be available at: `https://yourusername.github.io/repository-name/`

## Supabase Error Handling

The project now includes:
- **Error Boundary**: Catches React errors gracefully
- **Safe Supabase Wrapper**: Handles Supabase being paused/unavailable
- **Graceful Degradation**: App continues to work even when backend is down

When Supabase is paused, users will see a friendly error message instead of a broken app.

## Files Added/Modified

- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `src/lib/supabase-safe.ts` - Safe Supabase operations wrapper
- `src/components/ErrorBoundary.tsx` - React error boundary
- `public/.nojekyll` - Prevents Jekyll processing
- `vite.config.ts` - Added GitHub Pages base path configuration
- `src/App.tsx` - Added error boundary wrapper

## Development vs Production

- **Development**: App runs normally with full Supabase integration
- **Production**: App gracefully handles Supabase outages and paused instances