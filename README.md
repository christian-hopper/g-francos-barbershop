# 💈 Master Barbershop Template

A reusable barbershop website template built with **React, Vite, TypeScript, and Tailwind CSS**.

This project is designed so you can launch a new barbershop website quickly by editing one central data file instead of changing content across multiple components.

---

## ✨ Features

- Reusable component-based structure
- Centralized business content in one file
- Easy per-client branding with theme variables
- Mobile-first responsive design
- GitHub Pages deployment ready
- Built for fast cloning and reuse across multiple barbershop clients

---

## 🛠️ Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React

---

## 📂 Project Structure

src/

- app/
  - components/
    - Navbar.tsx
    - Hero.tsx
    - Services.tsx
    - Gallery.tsx
    - About.tsx
    - Testimonials.tsx
    - CTASection.tsx
    - Contact.tsx
    - Footer.tsx
  - App.tsx
- data/
  - business.ts
- styles/
  - index.css
  - theme.css

---

## 🧠 How It Works

All business-specific content is stored in:

`src/data/business.ts`

This includes:

- business name
- logo text
- phone number
- address
- services
- testimonials
- gallery images
- CTA text
- footer content
- theme colors

To reuse this template for a new barbershop, you mainly update that one file.

---

## 🎨 Customizing for a New Client

### 1. Update business information

Edit `src/data/business.ts` and replace the existing content with the new client’s:

- business name
- full business name
- phone number
- address
- hours
- services
- testimonials
- social links
- images

---

### 2. Update theme colors

Inside `business.ts`, update:

- `theme.accent`
- `theme.bgPrimary`
- `theme.bgSecondary`
- `theme.cardBg`
- `theme.textPrimary`
- `theme.textSecondary`

This changes the site branding without editing every component.

---

### 3. Update images

Replace placeholder or stock image URLs with:

- real haircut photos
- shop interior photos
- team photos
- branded assets

---

### 4. Update deployment path

Edit `.env.production` and set:

`VITE_BASE_PATH=/your-repo-name/`

Example:

`VITE_BASE_PATH=/fade-masters-barbershop/`

---

## 📦 Installation

Install dependencies:

`npm install`

Start the dev server:

`npm run dev`

---

## 🏗️ Build

Create a production build:

`npm run build`

---

## 🚀 Deploy to GitHub Pages

This project is configured for GitHub Pages deployment.

### Step 1

Set the repo base path in `.env.production`

Example:

`VITE_BASE_PATH=/master-barbershop-template/`

### Step 2

Run the deploy command:

`npm run deploy`

### Step 3

Your site will be live at:

`https://your-username.github.io/your-repo-name/`

---

## ⚡ Recommended Workflow

1. Copy or clone this template
2. Rename the repository
3. Update `src/data/business.ts`
4. Update `.env.production`
5. Replace images and favicon
6. Deploy to GitHub Pages

---

## 📬 Contact Form

The current contact form is front-end only.

Right now it:

- logs form data to the console
- shows a success alert

For real client use, connect it to a service such as:

- Formspree
- Netlify Forms
- EmailJS

---

## 📝 Notes

- This template is best for brochure-style small business sites
- Always test mobile layout before deployment
- Replace stock content before launching a real client site
- Optimize images for performance when possible

---

## 📈 Future Improvements

Potential upgrades:

- SEO meta tags per business
- real contact form backend
- analytics integration
- booking integration
- CMS support
- stronger TypeScript typing for `business.ts`

---

Free to use for personal and commercial projects.

Free to use and modify for personal or commercial projects.

---

## 👨‍💻 Author

Christian Hopper
