# Future-Proof Portfolio - Phases 2-4: Tech Stack & Deployment

## Phase 2: Choosing Your Tech Stack

### Current Setup: React + Vite
Your portfolio is currently built with:
- **React 18** - UI library
- **Vite** - Fast build tool
- **CSS3** - Styling

### Two Recommended Paths for Vercel Deployment:

#### Option A: Pro Path (Next.js) ✨ RECOMMENDED
**Why Next.js?**
- Vercel's creators built Next.js
- Built-in SSR (Server-Side Rendering)
- Better SEO performance
- Automatic API routes
- Image optimization
- Faster deployments
- Better performance by default

**Command to create:** `npx create-next-app@latest my-portfolio`

#### Option B: Current Path (React + Vite)
**Advantages:**
- Already set up and working
- Simpler learning curve
- Still works perfectly on Vercel
- Great for portfolio projects

**Decision:** We'll proceed with your current React + Vite setup, which is already production-ready!

---

## Phase 3: Git to Vercel Workflow - LOCAL SETUP

### Step 1: Initialize Git Repository

```bash
# Navigate to your project
cd c:\Users\anedr\edrada_futureproof

# Initialize git
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial portfolio setup"
```

### Step 2: Create Repository on GitHub

1. Go to **github.com** and log in (or create account if needed)
2. Click **"New"** (top-left corner)
3. Enter Repository Name: `my-portfolio` or `edrada-portfolio`
4. Add Description: "My professional portfolio showcasing projects and skills"
5. Choose **Public** (so it's discoverable)
6. Click **"Create repository"**

### Step 3: Connect Local to GitHub

After creating the repo on GitHub, you'll see commands. Run these in your terminal:

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Push Changes

After any local changes:
```bash
git add .
git commit -m "Your descriptive message"
git push origin main
```

---

## Phase 4: Deploying to Vercel

### Step 1: Sign Up/Login to Vercel
- Go to **vercel.com**
- Click **"Sign Up"** or **"Log In"**
- Choose **"Continue with GitHub"** (easiest!)
- Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository
1. Click **"Add New"** button (top right)
2. Select **"Project"**
3. Find and select **"my-portfolio"** repository
4. Click **"Import"**

### Step 3: Configure Deployment
- **Framework Preset:** Vite (should auto-detect)
- **Root Directory:** ./
- **Build Command:** `npm run build` (auto-filled)
- **Output Directory:** `dist` (auto-filled)
- Leave other settings as default
- Click **"Deploy"**

### Step 4: The Magic Happens! ✨
- Vercel builds your project
- Gets assigned a live URL: `my-portfolio-[random].vercel.app`
- **Automatic CI/CD:** Every `git push` automatically rebuilds and updates your live site!

---

## Quick Reference: Git Commands You'll Use

```bash
# Check status
git status

# Add changes
git add .

# Commit with message
git commit -m "Fix header styling"

# Push to GitHub (updates Vercel automatically)
git push origin main

# View commit history
git log
```

---

## Your Live Deployment Workflow

```
Local Changes → git push → GitHub → Vercel Auto-Deploy → Your Live URL Updates
```

Every time you push, Vercel automatically:
1. Downloads your code
2. Runs `npm install`
3. Runs `npm run build`
4. Deploys to production
5. Updates your live URL

---

## Troubleshooting

### Git not installed?
- Download from **git-scm.com**
- Install and restart your terminal

### Git credentials not working?
- Use **GitHub Token** instead of password
- Go to GitHub → Settings → Developer Settings → Personal Access Tokens
- Create new token and use as password

### Vercel build fails?
- Check the build logs in Vercel dashboard
- Usually because of missing dependencies: `npm install`
- Verify `package.json` has all dependencies

### Changes not updating on Vercel?
- Verify `git push` showed success
- Check Vercel dashboard for build status
- Wait 1-2 minutes for build to complete

---

## Next Steps Checklist

- [ ] Initialize Git locally
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Sign up for Vercel
- [ ] Deploy to Vercel
- [ ] Get your live URL
- [ ] Share your portfolio!
- [ ] Make changes and use `git push` to auto-deploy
