# Images Directory

Organized image storage for the Aero Fabrication Club website.

## 📁 Directory Structure

```
images/
├── hero/           # Hero section (drones, backgrounds)
├── about/          # About section
├── projects/       # Projects (ongoing, future, completed)
├── gallery/        # Photo gallery
├── events/         # Club-hosted events & competitions
├── achievements/   # Competition wins & awards
├── team/           # Team member photos
├── misc/           # Logos, placeholders, icons
│
├── IMAGE_GUIDE.md          # Detailed guide for adding images
├── USAGE_REFERENCE.md      # Component → Image mapping
├── migrate-images.sh       # Script to organize existing images
└── update-components.sh    # Script to update component paths
```

## 🚀 Quick Start

### Step 1: Organize Existing Images
```bash
cd /workspaces/aero-fabrication-club/public/images
chmod +x migrate-images.sh
bash migrate-images.sh
```

### Step 2: Update Component Files
```bash
chmod +x update-components.sh
bash update-components.sh
```

### Step 3: Verify Changes
```bash
cd /workspaces/aero-fabrication-club
pnpm dev
```

## 📝 Adding New Images

### For Gallery
1. Place image in `/images/gallery/`
2. Name: `gallery-XXX.jpg` (e.g., `gallery-005.jpg`)
3. Update `GallerySection.tsx`:
```tsx
const galleryImages = [
  // ... existing images
  { 
    id: 7, 
    src: '/images/gallery/gallery-007.jpg', 
    alt: 'Description', 
    description: 'Your description',
    span: 1, 
    rowSpan: 1,
    mobileSpan: 2,
    mobileRowSpan: 1
  },
];
```

### For Events
1. Place image in `/images/events/`
2. Name: `event-name-year.jpg`
3. Update `EventReportsSection.tsx`:
```tsx
const events = [
  // ... existing events
  {
    title: 'Event Name',
    description: 'Description',
    year: '2025',
    icon: FaRocket,
    color: 'cyan',
    image: '/images/events/event-name-2025.jpg'
  },
];
```

### For Projects
1. Place image in `/images/projects/`
2. Update `ProjectsSection.tsx` in the relevant array (ongoing/future/completed)

### For Team Members
1. Place square photo (400x400) in `/images/team/`
2. Name: `firstname-lastname.jpg` or `role-name.jpg`
3. Update `TeamSection.tsx`

### For Achievements
1. Place image in `/images/achievements/`
2. Update `AchievementsSection.tsx`

## 🎨 Image Guidelines

| Section | Recommended Size | Format | Max Size |
|---------|-----------------|--------|----------|
| Hero | 1920x1080 | PNG/WebP | 500KB |
| About | 1200x800 | JPG/WebP | 300KB |
| Projects | 800x600 | JPG/WebP | 200KB |
| Gallery | Variable | JPG/WebP | 400KB |
| Events | 1200x800 | JPG/WebP | 300KB |
| Achievements | 1000x750 | JPG/WebP | 300KB |
| Team | 400x400 (square) | JPG/WebP | 100KB |
| Logos | Any | PNG/SVG | 100KB |

## 🔧 Tools & Scripts

### migrate-images.sh
Moves all existing images from `/public/` root to organized folders.

### update-components.sh
Updates all component files to use new image paths.

## 📋 Current Status

After migration, your images will be organized as follows:

**Hero Section** (10 images)
- drone1.png, drone2.jpg, drone3new.png, etc.

**Projects** (9 images)
- Project1-3.jpg, ongoingProject1-2.jpg, futureProject1-4.jpg

**Gallery** (4 images)
- gallery1-4.jpg

**Events** (4 images)
- event1-4.jpg (renamed from gallery images)

**Achievements** (3 images)
- Achievement1-3.jpg

**Team** (7 images)
- Coordinator.jpg, Co-coordinator.jpg, Faculty.jpg, etc.

**Misc** (11 images)
- logo.png, placeholders, etc.

## ⚠️ Important Notes

1. **Always optimize images** before adding (use TinyPNG, ImageOptim)
2. **Use descriptive names** (not img1.jpg, use drone-quadcopter-2024.jpg)
3. **Keep backups** of original high-res images
4. **Test locally** after adding new images
5. **Commit images separately** from code changes for better Git history

## 🆘 Troubleshooting

### Images not loading after migration?
- Check console for 404 errors
- Verify file paths in component files
- Ensure images actually moved to new folders
- Clear browser cache (Ctrl+Shift+R)

### Need to add more images?
- Refer to IMAGE_GUIDE.md for detailed instructions
- Follow naming conventions
- Update component arrays

### Lost track of which images are used where?
- Check USAGE_REFERENCE.md for complete mapping

## 📞 Support

For issues or questions, refer to:
1. IMAGE_GUIDE.md - Comprehensive adding guide
2. USAGE_REFERENCE.md - Component mapping
3. Component files themselves - Inline comments
