# Andrew's Corner Website

Welcome to the website for Andrew's Corner, a community space in Thessaloniki, Greece.

## How to Update the Website (Non-Technical Guide)

You can update most of the content on this website without touching any code. You only need to edit the "Data" files in the `src/data` folder.

### 1. Update Opening Hours
- Open `src/data/hours.json`.
- You will see sections for `el` (Greek) and `en` (English).
- Simply change the text between the quotes (e.g., `"10:00 - 18:00"`) and save the file.

### 2. Update Events
- Open `src/data/events.json`.
- Add or change events in both the `el` and `en` sections.
- Make sure to keep the format: `{ "title": "...", "date": "...", "description": "..." }`.

### 3. Update Mission & FAQs
- Open `src/data/about.json`.
- Here you can edit the mission statement, vision, and the FAQ questions/answers.

### 4. Adding Photos
- Upload new images to the `public/images/` folder.
- In the code (if you feel comfortable), you can then reference them as `/images/your-photo.jpg`.

---

## Deployment Instructions

I recommend using **Netlify** for hosting. It is free and very easy:

1. Create a free account at [Netlify.com](https://www.netlify.com/).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Connect your **GitHub** account and select this repository (`andrews_corner_website`).
4. Netlify will automatically detect it's a Vite project.
5. Click **"Deploy"**.

**Every time you save a change to GitHub, the website will update automatically!**

---

## Developer Info

This project uses:
- **React + TypeScript + Vite**
- **Vanilla CSS** (Variables in `src/styles/variables.css`)
- **React Context** for Bilingual support (`src/context/LanguageContext.tsx`)
