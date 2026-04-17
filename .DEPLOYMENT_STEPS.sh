#!/bin/bash
# Run this from your local machine (rslaten) where you have GitHub + Vercel CLI access

# Step 1: Create GitHub repo
# Go to https://github.com/new
# Name: holdings
# Owner: rslaten-git
# Public or Private (up to you)
# Click "Create repository"

# Step 2: Push to GitHub (from your machine)
cd ~/holdings  # or wherever you cloned it
git remote add origin git@github.com:rslaten-git/holdings.git
git branch -M main
git push -u origin main

# Step 3: Install Vercel CLI (if not already)
npm i -g vercel

# Step 4: Deploy to Vercel
vercel --prod

# Step 5: Add custom domain in Vercel Dashboard
# https://vercel.com/dashboard/rslaten-git/holdings
# → Settings → Domains → Add "holdings.rksproperties.io"
# → Follow DNS instructions
