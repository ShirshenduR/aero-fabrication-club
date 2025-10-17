#!/bin/bash

# Image Migration Script for Aero Fabrication Club Website
# This script organizes existing images into proper folders

echo "🚀 Starting image organization..."

# Navigate to public directory
cd /workspaces/aero-fabrication-club/public

# Move Hero section images
echo "📸 Moving hero section images..."
mv drone1.png images/hero/ 2>/dev/null || echo "  ⚠️  drone1.png not found or already moved"
mv drone2.jpg images/hero/ 2>/dev/null || echo "  ⚠️  drone2.jpg not found or already moved"
mv drone3new.png images/hero/ 2>/dev/null || echo "  ⚠️  drone3new.png not found or already moved"
mv drone2-removebg-preview.png images/hero/ 2>/dev/null || echo "  ⚠️  drone2-removebg-preview.png not found or already moved"
mv drone3.jpeg images/hero/ 2>/dev/null || echo "  ⚠️  drone3.jpeg not found or already moved"
mv bgdrone.png images/hero/ 2>/dev/null || echo "  ⚠️  bgdrone.png not found or already moved"
mv hero-bg.png images/hero/ 2>/dev/null || echo "  ⚠️  hero-bg.png not found or already moved"
mv landing.jpg images/hero/ 2>/dev/null || echo "  ⚠️  landing.jpg not found or already moved"
mv landing_cleanup.jpg images/hero/ 2>/dev/null || echo "  ⚠️  landing_cleanup.jpg not found or already moved"

# Move About section images
echo "📸 Moving about section images..."
mv about.jpg images/about/ 2>/dev/null || echo "  ⚠️  about.jpg not found or already moved"
mv aboutpng.png images/about/ 2>/dev/null || echo "  ⚠️  aboutpng.png not found or already moved"

# Move Projects section images
echo "📸 Moving projects section images..."
mv Project1.jpg images/projects/ 2>/dev/null || echo "  ⚠️  Project1.jpg not found or already moved"
mv Project2.jpg images/projects/ 2>/dev/null || echo "  ⚠️  Project2.jpg not found or already moved"
mv Project3.jpg images/projects/ 2>/dev/null || echo "  ⚠️  Project3.jpg not found or already moved"
mv ongoingProject1.jpg images/projects/ 2>/dev/null || echo "  ⚠️  ongoingProject1.jpg not found or already moved"
mv ongoingProject2.jpg images/projects/ 2>/dev/null || echo "  ⚠️  ongoingProject2.jpg not found or already moved"
mv futureProject1.jpg images/projects/ 2>/dev/null || echo "  ⚠️  futureProject1.jpg not found or already moved"
mv futureProject2.jpg images/projects/ 2>/dev/null || echo "  ⚠️  futureProject2.jpg not found or already moved"
mv futureProject3.jpg images/projects/ 2>/dev/null || echo "  ⚠️  futureProject3.jpg not found or already moved"
mv futureProject4.jpg images/projects/ 2>/dev/null || echo "  ⚠️  futureProject4.jpg not found or already moved"

# Move Gallery section images
echo "📸 Moving gallery section images..."
mv gallery1.jpg images/gallery/ 2>/dev/null || echo "  ⚠️  gallery1.jpg not found or already moved"
mv gallery2.jpg images/gallery/ 2>/dev/null || echo "  ⚠️  gallery2.jpg not found or already moved"
mv gallery3.jpg images/gallery/ 2>/dev/null || echo "  ⚠️  gallery3.jpg not found or already moved"
mv gallery4.jpg images/gallery/ 2>/dev/null || echo "  ⚠️  gallery4.jpg not found or already moved"

# Move Achievements section images
echo "📸 Moving achievements section images..."
mv Achievement1.jpg images/achievements/ 2>/dev/null || echo "  ⚠️  Achievement1.jpg not found or already moved"
mv Achievement2.jpg images/achievements/ 2>/dev/null || echo "  ⚠️  Achievement2.jpg not found or already moved"
mv Achievement3.jpg images/achievements/ 2>/dev/null || echo "  ⚠️  Achievement3.jpg not found or already moved"

# Move Team section images
echo "📸 Moving team section images..."
mv Coordinator.jpg images/team/ 2>/dev/null || echo "  ⚠️  Coordinator.jpg not found or already moved"
mv coordinator.jpeg images/team/ 2>/dev/null || echo "  ⚠️  coordinator.jpeg not found or already moved"
mv Co-coordinator.jpg images/team/ 2>/dev/null || echo "  ⚠️  Co-coordinator.jpg not found or already moved"
mv co-coordinator.jpeg images/team/ 2>/dev/null || echo "  ⚠️  co-coordinator.jpeg not found or already moved"
mv co-coordinator1.jpg images/team/ 2>/dev/null || echo "  ⚠️  co-coordinator1.jpg not found or already moved"
mv Faculty.jpg images/team/ 2>/dev/null || echo "  ⚠️  Faculty.jpg not found or already moved"
mv fic.jpeg images/team/ 2>/dev/null || echo "  ⚠️  fic.jpeg not found or already moved"

# Move Misc images
echo "📸 Moving miscellaneous images..."
mv logo.png images/misc/ 2>/dev/null || echo "  ⚠️  logo.png not found or already moved"
mv logo2.png images/misc/ 2>/dev/null || echo "  ⚠️  logo2.png not found or already moved"
mv placeholder-logo.png images/misc/ 2>/dev/null || echo "  ⚠️  placeholder-logo.png not found or already moved"
mv placeholder-logo.svg images/misc/ 2>/dev/null || echo "  ⚠️  placeholder-logo.svg not found or already moved"
mv placeholder-user.jpg images/misc/ 2>/dev/null || echo "  ⚠️  placeholder-user.jpg not found or already moved"
mv placeholder.jpg images/misc/ 2>/dev/null || echo "  ⚠️  placeholder.jpg not found or already moved"
mv placeholder.svg images/misc/ 2>/dev/null || echo "  ⚠️  placeholder.svg not found or already moved"
mv profile.png images/misc/ 2>/dev/null || echo "  ⚠️  profile.png not found or already moved"
mv place.png images/misc/ 2>/dev/null || echo "  ⚠️  place.png not found or already moved"
mv instaQR.jpg images/misc/ 2>/dev/null || echo "  ⚠️  instaQR.jpg not found or already moved"
mv googledocs.png images/misc/ 2>/dev/null || echo "  ⚠️  googledocs.png not found or already moved"

echo "✅ Image organization complete!"
echo ""
echo "📋 Summary:"
echo "   Hero images → /images/hero/"
echo "   About images → /images/about/"
echo "   Project images → /images/projects/"
echo "   Gallery images → /images/gallery/"
echo "   Event images → /images/events/"
echo "   Achievement images → /images/achievements/"
echo "   Team images → /images/team/"
echo "   Misc images → /images/misc/"
echo ""
echo "⚠️  IMPORTANT: You need to update image paths in components!"
echo "   Run: bash public/images/update-components.sh"
