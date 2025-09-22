# GKP Basketball Club - Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Deploy automatically!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `dist` folder
3. Or connect GitHub for auto-deployment

### Option 3: GitHub Pages
1. Push your code to GitHub
2. Go to Settings > Pages
3. Enable GitHub Pages
4. The workflow will auto-deploy

## 📝 After Deployment - How to Update

### Using GitHub (Recommended):
1. Make changes to your code
2. Commit and push to GitHub
3. Deployment happens automatically!

### Manual Updates:
1. Run `npm run build`
2. Upload `dist` folder to your hosting platform

## 🔧 Build Commands
- `npm run build` - Production build
- `npm run preview` - Preview production build locally
- `npm run dev` - Development server

## 📁 Important Files
- `dist/` - Built files for deployment
- `.github/workflows/deploy.yml` - Auto-deployment workflow
- `public/` - Static assets
- `src/` - Source code
