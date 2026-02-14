# 🛡️ SALUS CLUB - PREMIUM CYBERSECURITY WEBSITE

**Theme:** Dark Mode (Black/Charcoal)
**Accents:** Deep Blue & Red
**Vibe:** Elite Tech / Cybersecurity

---

## 🚀 QUICK START

### 1. Logos (CRITICAL)
The website uses a **PNG logo** by default (hosted online).
To enable the **3D Logo**, you must add the file:

```
/assets/logo.obj  <-- Place your 3D model here
```

If `logo.obj` is found, the site automatically renders it in 3D.
If not found, it gracefully falls back to the 2D PNG.

### 2. Google Form
To make the recruitment form work:
1. Open `index.html`
2. Find `PASTE_GOOGLE_FORM_LINK_HERE`
3. Replace it with your Google Form **Embed URL**.

### 3. Deployment
- **Netlify:** Drag & Drop the `salus-main-page` folder.
- **GitHub Pages:** Push to repo and enable Pages in settings.

---

## 🎨 DESIGN SYSTEM

### Colors
- **Background:** `#050505` (Deep Black)
- **Cards:** Glassmorphism (`rgba(255,255,255,0.03)`)
- **Primary:** Deep Blue `#1e3a8a`
- **Accent:** Red `#dc2626`
- **Text:** White `#ffffff`

### Typography
- **Headings:** Space Grotesk (Futuristic/Tech)
- **Body:** Inter (Clean/Readable)

### Interactions
- **Custom Cursor:** Trailing glow effect
- **Horizontal Scroll:** Drag-to-scroll team section
- **3D Hero:** Interactive logo with mouse tilt
- **Particles:** Network-style connections

---

## 📂 FILE STRUCTURE

```
/salus-main-page
  ├── index.html      # Main structure
  ├── style.css       # Dark theme styles
  ├── script.js       # 3D logic + Animations
  ├── assets/         # Folder for local assets
  │    └── logo.obj   # (Optional) 3D Model
  └── README.md       # This file
```

---

## 🛠️ CUSTOMIZATION

- **Change Text:** Edit `index.html` directly.
- **Change Colors:** Edit `:root` variables in `style.css`.
- **Adjust 3D Speed:** Edit `animate()` function in `script.js`.

---

**Built for SALUS CLUB**
*Securing the Digital Frontier.*
