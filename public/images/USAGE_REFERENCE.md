# Image Usage Reference

This document shows which images are currently used in which components and what the new paths should be.

## HeroSection.tsx
**Current Path** → **New Path**
- `/drone3new.png` → `/images/hero/drone3new.png`
- `/drone1.png` → `/images/hero/drone1.png` (fallback)
- `/hero-bg.png` → `/images/hero/hero-bg.png` (if used)

## AboutSection.tsx
**Current Path** → **New Path**
- (Currently using no images, but can add from `/images/about/`)

## ProjectsSection.tsx
**Current Path** → **New Path**
- `/Project1.jpg` → `/images/projects/Project1.jpg`
- `/Project2.jpg` → `/images/projects/Project2.jpg`
- `/Project3.jpg` → `/images/projects/Project3.jpg`
- `/ongoingProject1.jpg` → `/images/projects/ongoingProject1.jpg`
- `/ongoingProject2.jpg` → `/images/projects/ongoingProject2.jpg`
- `/futureProject1.jpg` → `/images/projects/futureProject1.jpg`
- `/futureProject2.jpg` → `/images/projects/futureProject2.jpg`
- `/futureProject3.jpg` → `/images/projects/futureProject3.jpg`
- `/futureProject4.jpg` → `/images/projects/futureProject4.jpg`

## GallerySection.tsx
**Current Path** → **New Path**
- `/gallery1.jpg` → `/images/gallery/gallery1.jpg`
- `/gallery2.jpg` → `/images/gallery/gallery2.jpg`
- `/gallery3.jpg` → `/images/gallery/gallery3.jpg`
- `/gallery4.jpg` → `/images/gallery/gallery4.jpg`
- `/drone1.png` → `/images/hero/drone1.png`
- `/drone2.jpg` → `/images/hero/drone2.jpg`

## EventReportsSection.tsx
**Current Path** → **New Path**
- `/gallery1.jpg` → `/images/events/event1.jpg` (rename for clarity)
- `/gallery2.jpg` → `/images/events/event2.jpg`
- `/gallery3.jpg` → `/images/events/event3.jpg`
- `/gallery4.jpg` → `/images/events/event4.jpg`

## AchievementsSection.tsx
**Current Path** → **New Path**
- `/Achievement1.jpg` → `/images/achievements/Achievement1.jpg`
- `/Achievement2.jpg` → `/images/achievements/Achievement2.jpg`
- `/Achievement3.jpg` → `/images/achievements/Achievement3.jpg`

## TeamSection.tsx
**Current Path** → **New Path**
- `/Coordinator.jpg` → `/images/team/Coordinator.jpg`
- `/Co-coordinator.jpg` → `/images/team/Co-coordinator.jpg`
- `/Faculty.jpg` → `/images/team/Faculty.jpg`
- `/placeholder-user.jpg` → `/images/misc/placeholder-user.jpg`

## Navigation.tsx / Layout
**Current Path** → **New Path**
- `/logo.png` → `/images/misc/logo.png`

## Files to Update

After running the migration script, update these component files:

1. `/components/sections/HeroSection.tsx`
2. `/components/sections/ProjectsSection.tsx`
3. `/components/sections/GallerySection.tsx`
4. `/components/sections/EventReportsSection.tsx`
5. `/components/sections/AchievementsSection.tsx`
6. `/components/sections/TeamSection.tsx`
7. `/components/Navigation.tsx`
8. `/app/layout.tsx`

## Quick Find & Replace Commands

Use these VSCode find & replace patterns (Regex enabled):

### Gallery Images
Find: `src=["']/gallery(\d+)\.jpg["']`
Replace: `src="/images/gallery/gallery$1.jpg"`

### Project Images
Find: `src=["']/(Project\d+|ongoingProject\d+|futureProject\d+)\.jpg["']`
Replace: `src="/images/projects/$1.jpg"`

### Achievement Images
Find: `src=["']/Achievement(\d+)\.jpg["']`
Replace: `src="/images/achievements/Achievement$1.jpg"`

### Team Images
Find: `src=["']/(Coordinator|Co-coordinator|Faculty)\.jpg["']`
Replace: `src="/images/team/$1.jpg"`

### Hero/Drone Images
Find: `src=["']/(drone\d+\w*)\.png["']`
Replace: `src="/images/hero/$1.png"`

### Logo
Find: `src=["']/logo\.png["']`
Replace: `src="/images/misc/logo.png"`
