# Hifza Khizer — Portfolio

A personal portfolio site built with Next.js + Tailwind CSS. This README
assumes you've never deployed a website before — follow it top to bottom
and you'll have a live link at the end.

---

## 1. What's in this project

```
src/
  app/
    page.tsx        → the homepage (assembles all sections)
    layout.tsx       → page title, fonts, metadata
    globals.css      → colors, fonts, design tokens
    admin/            → the /admin project-drafting dashboard
  components/         → Nav, Hero, About, Skills, Timeline, Projects, Contact, Footer
  data/
    content.ts        → ALL the site's text lives here (bio, links, projects, tools)
```

**To change any text on the site — your name, bio, email, project details —
you only need to edit `src/data/content.ts`.** You don't need to touch any
other file for normal updates.

---

## 2. Running it on your own computer (optional, for editing)

You need [Node.js](https://nodejs.org) installed (version 18 or newer).

```bash
# 1. Open a terminal inside this folder, then install dependencies:
npm install

# 2. Start the local preview:
npm run dev
```

Open **http://localhost:3000** in your browser. It updates live as you
edit files. Press `Ctrl+C` in the terminal to stop it.

You don't need to do this step to deploy — you can also edit files
directly on GitHub's website (step 4 below) and skip running anything
locally.

---

## 3. Put the project on GitHub

GitHub stores your code online, and Vercel (step 4) will deploy straight
from it.

1. Go to [github.com](https://github.com) and create a free account if
   you don't have one.
2. Click the **+** icon (top right) → **New repository**.
3. Name it something like `hifza-portfolio`. Leave it **Public** (or
   Private — both work with Vercel's free plan). Don't check any of the
   "initialize with README" boxes. Click **Create repository**.
4. GitHub will show you a page with commands. On your computer, inside
   this project folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hifza-portfolio.git
git push -u origin main
```

   Replace `YOUR-USERNAME` with your actual GitHub username. Refresh the
   GitHub page — your files should now be there.

---

## 4. Deploy it live with Vercel (free)

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** → choose
   **Continue with GitHub**. This links your GitHub account.
2. Once logged in, click **Add New...** → **Project**.
3. Find your `hifza-portfolio` repository in the list and click
   **Import**.
4. Vercel auto-detects it's a Next.js project — you don't need to change
   any settings. Click **Deploy**.
5. Wait about a minute. When it finishes, Vercel gives you a live URL
   like `hifza-portfolio.vercel.app` — that's your site, live on the
   internet, free.

That's it. You now have a real, working link you can put on your resume,
LinkedIn, or CV.

---

## 5. Making updates after you're live

Any time you want to change something:

1. Edit `src/data/content.ts` (or any file) — either locally, or directly
   on GitHub by opening the file and clicking the pencil ✏️ icon to edit
   in the browser.
2. If editing locally, save and run:
   ```bash
   git add .
   git commit -m "Update bio"
   git push
   ```
   If editing on GitHub's website, just click **Commit changes**.
3. Vercel notices the change automatically and rebuilds your site —
   your live link updates within about a minute. No extra steps.

---

## 6. Adding a new project (the /admin dashboard)

Visit `yoursite.vercel.app/admin` (only visible to you — it's not linked
anywhere on the public site). Fill in the project form on the left; the
right side shows a live preview and generates a ready-to-paste code
block.

Copy that code block, open `src/data/content.ts`, and paste it as a new
entry inside the `projects` array (near the bottom of the file, following
the same pattern as the existing three projects). Commit and push (step
5) and the new project appears on the live site.

**Why isn't this automatic?** This site is a *static site* — plain HTML/
CSS/JS files with no database — which is exactly what makes it fast and
free to host. A "real" save button would need a database or a headless
CMS (like Sanity or Contentful) wired in — a reasonable next upgrade once
you outgrow copy-pasting code, but not necessary to get started.

---

## 7. Swapping in real photos/videos

The Tohfa Tales PK section currently uses placeholder tiles (dashed
borders, labelled "swap image"). To use real photos:

1. Add your image files into the `public/` folder (create it if it
   doesn't exist), e.g. `public/tohfa-basket-1.jpg`.
2. In `src/components/Projects.tsx`, find the `InstagramGrid` function
   and replace the placeholder `<svg>` block with an `<img>` tag:
   ```tsx
   <img src="/tohfa-basket-1.jpg" alt="Gift basket, top-down" className="h-full w-full object-cover" />
   ```
3. Commit and push — done.

---

## Troubleshooting

- **`git` command not found** → install Git from
  [git-scm.com](https://git-scm.com), then restart your terminal.
- **Vercel build fails** → click into the failed deployment on Vercel to
  read the error log; most often it's a typo in `content.ts` (like a
  missing comma or quote mark).
- **Changes not showing up live** → make sure you ran `git push` (or
  clicked "Commit changes" on GitHub) — Vercel only rebuilds after it
  sees a new commit.
