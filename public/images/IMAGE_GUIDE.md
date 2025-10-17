# Image Organization Guide

This directory contains all images used across the Aero Fabrication Club website, organized by section.

## Folder Structure

```
images/
├── hero/           # Hero section images (drones, backgrounds)
├── about/          # About section images
├── projects/       # Project images (ongoing, future, completed)
├── gallery/        # Gallery section images
├── events/         # Events & Competitions images
├── achievements/   # Achievement and award images
├── team/           # Team member photos
└── misc/           # Miscellaneous images (logos, placeholders, etc.)
```

## How to Add Images

### 1. Hero Section (`/images/hero/`)
- Add drone images, hero backgrounds
- Recommended: High resolution (1920x1080 or higher)
- Format: PNG, JPG
- Example: `drone-main.png`, `hero-bg.jpg`

### 2. About Section (`/images/about/`)
- Workshop images, club activities
- Recommended: 1200x800
- Format: JPG, PNG

### 3. Projects Section (`/images/projects/`)
- Organize by status: `ongoing/`, `future/`, `completed/`
- Project photos and diagrams
- Recommended: 800x600
- Format: JPG, PNG

### 4. Gallery Section (`/images/gallery/`)
- General club photos, events, workshops
- Recommended: Various sizes for masonry layout
- Format: JPG
- Naming: `gallery-001.jpg`, `gallery-002.jpg`, etc.

### 5. Events Section (`/images/events/`)
- Event posters, photos from club-hosted events
- Recommended: 1200x800
- Format: JPG
- Naming: `event-name-year.jpg`

### 6. Achievements Section (`/images/achievements/`)
- Competition photos, award ceremonies
- Recommended: 1000x750
- Format: JPG
- Naming: `achievement-competition-year.jpg`

### 7. Team Section (`/images/team/`)
- Team member profile photos
- Recommended: 400x400 (square)
- Format: JPG
- Naming: `firstname-lastname.jpg` or by role

### 8. Misc (`/images/misc/`)
- Logos, placeholders, icons
- Various sizes and formats

## Current Image Mapping

### To be moved:
- `drone1.png`, `drone2.jpg`, `drone3new.png` → `hero/`
- `about.jpg`, `aboutpng.png` → `about/`
- `Project1.jpg`, `Project2.jpg`, `Project3.jpg` → `projects/`
- `ongoingProject1.jpg`, `ongoingProject2.jpg` → `projects/`
- `futureProject1-4.jpg` → `projects/`
- `gallery1-4.jpg` → `gallery/`
- `Achievement1-3.jpg` → `achievements/`
- `Coordinator.jpg`, `Co-coordinator.jpg`, `Faculty.jpg` → `team/`
- `logo.png`, `logo2.png`, `placeholder*.jpg` → `misc/`

## Usage in Code

Update image paths in components to use the new structure:

```tsx
// Old
<Image src="/gallery1.jpg" alt="Gallery" />

// New
<Image src="/images/gallery/gallery-001.jpg" alt="Gallery" />
```

## Best Practices

1. **Optimize images** before adding (use tools like TinyPNG, ImageOptim)
2. **Use descriptive names** (e.g., `drone-quadcopter-2024.jpg` not `img1.jpg`)
3. **Keep consistent naming** (lowercase, hyphens instead of spaces)
4. **WebP format** preferred for better compression
5. **Add alt text** when using images in components
6. **Version control** - Don't delete old images, rename with version suffix

## Image Specifications

| Section | Size | Format | Max File Size |
|---------|------|--------|---------------|
| Hero | 1920x1080 | PNG/WebP | 500KB |
| About | 1200x800 | JPG/WebP | 300KB |
| Projects | 800x600 | JPG/WebP | 200KB |
| Gallery | Variable | JPG/WebP | 400KB |
| Events | 1200x800 | JPG/WebP | 300KB |
| Achievements | 1000x750 | JPG/WebP | 300KB |
| Team | 400x400 | JPG/WebP | 100KB |
| Logos | Any | PNG/SVG | 100KB |
