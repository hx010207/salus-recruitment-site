# 🚀 QUICK START - SALUS CLUB Website

## ⚡ 3 Steps to Get Started

### Step 1: Create Assets Folder
```
salus-main-page/
└── assets/          ← CREATE THIS FOLDER
    ├── logo.png     ← Add your PNG logo here
    └── logo.obj     ← Add your 3D OBJ logo here
```

### Step 2: Add Your Logo Files
1. **logo.png** - Your club's PNG logo (for navbar, footer, loading screen)
2. **logo.obj** - Your club's 3D model (for hero section)

### Step 3: Open the Website
**Double-click** `index.html` to view in your browser!

---

## 📝 Essential Setup Checklist

### ✅ Before Going Live

#### 1. Add Logo Files (Required)
- [ ] Create `assets` folder
- [ ] Add `logo.png` (PNG logo)
- [ ] Add `logo.obj` (3D OBJ model)

#### 2. Update Google Form (Required)
- [ ] Create Google Form for recruitment
- [ ] Get embed URL (Send → Embed HTML → Copy URL)
- [ ] Replace `PASTE_GOOGLE_FORM_LINK_HERE` in `index.html` (2 places)
  - Line 280: Embedded iframe
  - Line 295: Backup button

#### 3. Update Contact Info (Required)
- [ ] Social media links (line 320)
- [ ] Contact email (line 335)

#### 4. Customize Content (Optional)
- [ ] Club description (line 150)
- [ ] Team descriptions (lines 180-240)
- [ ] Benefit descriptions (lines 270-310)

---

## 🎨 What You'll See

### Official Brand Colors
- **Deep Blue** (#1e3a8a) - Primary
- **Red** (#dc2626) - Accent
- **White** (#ffffff) - Background

### Key Features
✅ Custom glowing cursor (blue/red)
✅ 3D OBJ logo in hero section
✅ Horizontal scrolling teams section
✅ Smooth Lenis scrolling
✅ GSAP scroll animations
✅ Professional Lucide icons
✅ Brand-colored particles
✅ Fully responsive design

---

## 🏛️ Website Sections

1. **Hero** - 3D logo, particles, CTA button
2. **About** - Mission/Vision/Values
3. **Teams** - Horizontal scroll (5 teams)
4. **Benefits** - 5 benefit cards
5. **Application** - Google Form embed
6. **Footer** - Logo, social links, contact

---

## 🛠️ Quick Fixes

### Logo Not Showing?
- Check `assets/logo.png` exists
- Check `assets/logo.obj` exists
- Open browser console (F12) for errors

### Adjust 3D Logo Size
Edit `script.js` line 255:
```javascript
logo.scale.set(2, 2, 2);  // Change these numbers
```

### Change Colors
Edit `style.css` lines 15-30:
```css
--primary-blue: #1e3a8a;
--accent-red: #dc2626;
```

---

## 🚀 Deploy in 5 Minutes

### Option 1: Netlify (Easiest)
1. Go to https://app.netlify.com/drop
2. Drag your folder
3. Done! ✅

### Option 2: GitHub Pages
```bash
git init
git add .
git commit -m "SALUS CLUB website"
git push -u origin main
# Enable Pages in Settings
```

---

## 📱 Test on Mobile

1. Open website in browser
2. Press **F12** (Developer Tools)
3. Click **Toggle Device Toolbar** (Ctrl+Shift+M)
4. Select different devices

---

## 🎯 Key Differences from Old Version

### What Changed:
- ✅ Official brand colors (Blue/Red/White)
- ✅ Horizontal scroll teams (not grid)
- ✅ PNG + OBJ logo integration
- ✅ Professional Lucide icons
- ✅ Clean corporate aesthetic
- ✅ Brand-colored particles

---

## 📄 Need More Help?

See **README.md** for:
- Detailed setup instructions
- Customization guide
- Deployment options
- Troubleshooting

---

**Ready to recruit? Add your logos and go live! 🛡️**
