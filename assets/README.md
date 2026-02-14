# SALUS CLUB Assets Folder

## Required Files

Place your logo files here:

1. **logo.png** - PNG logo for:
   - Navbar
   - Footer
   - Loading screen
   - Favicon

2. **logo.obj** - 3D OBJ model for:
   - Hero section 3D display
   - Rendered with Three.js
   - Animated with rotation and floating

## File Specifications

### logo.png
- Format: PNG with transparency
- Recommended size: 500x500px or larger
- Aspect ratio: Square or horizontal
- Background: Transparent

### logo.obj
- Format: Wavefront OBJ
- Units: Centered at origin (0,0,0)
- Scale: Will be scaled 2x in code (adjustable)
- Textures: Not required (material applied in code)

## How to Add Files

1. Save your PNG logo as `logo.png` in this folder
2. Save your 3D OBJ model as `logo.obj` in this folder
3. Refresh the website to see changes

## Troubleshooting

**PNG logo not showing:**
- Check filename is exactly `logo.png` (lowercase)
- Verify file is in `assets/` folder
- Clear browser cache (Ctrl+F5)

**OBJ logo not loading:**
- Check filename is exactly `logo.obj` (lowercase)
- Verify OBJ file is valid (test in 3D software)
- Open browser console (F12) for errors
- Adjust scale in `script.js` line 255 if needed

## Current Status

⚠️ **Placeholder files needed**

Add your logo files to activate:
- [ ] logo.png
- [ ] logo.obj
