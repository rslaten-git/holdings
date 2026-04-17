# Holdings Deployment Guide

## GitHub Setup (run this once)
```bash
# Create repo on GitHub at https://github.com/rslaten-git/holdings
# Then from your machine:
git remote add origin git@github.com:rslaten-git/holdings.git
git branch -M main
git push -u origin main
```

## Vercel Deployment
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import from Git → Select `rslaten-git/holdings`
4. Framework: Next.js (should auto-detect)
5. Environment Variables:
   - (none required; NEXT_PUBLIC_PROPERTIES is baked in .env.local as fallback)
6. Click "Deploy"

## Domain Setup
After deployment, in Vercel:
1. Project Settings → Domains
2. Add custom domain: `holdings.rksproperties.io`
3. Follow DNS instructions to point to Vercel

## Auto-Deploy
Any push to main branch auto-deploys to Vercel.

## Updating Property Data
Currently hardcoded in `src/lib/properties.ts`. To make dynamic:
1. Wire API to family-office DB
2. Create endpoint: `/api/properties`
3. Update page to call API instead of importing hardcoded data
