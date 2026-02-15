# 🛡️ SALUS CLUB — Premium Cybersecurity Recruitment Website

This is the official recruitment website for **SALUS Club**, designed and built to reflect a modern cybersecurity aesthetic with smooth animations, dark UI, and interactive elements.

The goal of this project is to provide a visually engaging platform for students to learn about the club, explore teams, and apply through the recruitment form.

---

## 🚀 Features

* 🌑 **Dark cybersecurity-themed UI** (Black/Charcoal base)
* 🔵🔴 **Brand-aligned accents** using SALUS blue & red
* 🖱️ **Custom animated cursor** with glow trail
* 🧭 **Interactive team section** with drag/horizontal scroll
* 🧊 **Optional 3D logo support** (auto-detects OBJ model)
* ✨ **Smooth animations & transitions**
* 📱 **Responsive layout** for desktop & mobile
* 📝 **Embedded Google Form recruitment system**

---

## 🧊 Logo Setup (Important)

The site uses a hosted **PNG logo** by default.

To enable the **3D hero logo**:

1. Place your 3D model inside:

```
/assets/logo.obj
```

2. Reload the site.

✔ If `logo.obj` exists → rendered automatically in 3D
✔ If missing → site falls back to the PNG logo

No extra configuration required.

---

## 📝 Google Form Setup

To activate the recruitment form:

1. Open **index.html**
2. Search for:

```
PASTE_GOOGLE_FORM_LINK_HERE
```

3. Replace it with your Google Form **embed URL**

Save → refresh → form will appear.

---

## 🌐 Deployment Options

### ✅ GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Select:

```
Branch: main
Folder: /root
```

4. Save

Your site will be live at:

```
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

---

### ✅ Netlify (Fastest)

* Drag & drop the project folder into Netlify dashboard
  OR
* Connect the GitHub repo for auto-deploy

---

## 🎨 Design System

### Colors

* **Background:** `#050505` (Deep Black)
* **Glass Cards:** `rgba(255,255,255,0.03)`
* **Primary Blue:** `#1e3a8a`
* **Accent Red:** `#dc2626`
* **Text:** `#ffffff`

### Typography

* **Headings:** Space Grotesk
* **Body:** Inter

---

## 📂 Project Structure

```
/salus-main-page
  ├── index.html
  ├── style.css
  ├── script.js
  ├── assets/
  │    └── logo.obj   (optional 3D logo)
  └── README.md
```

---

## 🛠️ Customization Guide

* **Edit content:** modify `index.html`
* **Change theme colors:** update `:root` variables in `style.css`
* **Adjust animations or 3D behavior:** edit logic in `script.js`

---

## 👨‍💻 Built For

**SALUS Club**
Department of Cybersecurity
Jain (Deemed-to-be University), FET — Kanakapura Road Campus

---

### 🔐 *Securing the Digital Frontier.*
