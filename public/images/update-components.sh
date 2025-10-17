#!/bin/bash

# Component Update Script
# This script updates all image paths in component files

echo "🔄 Updating component image paths..."

cd /workspaces/aero-fabrication-club

# Function to update file
update_file() {
    local file=$1
    echo "  📝 Updating $file..."
    
    # Gallery images
    sed -i "s|src=['\"]\/gallery\([0-9]\+\)\.jpg['\"]|src=\"/images/gallery/gallery\1.jpg\"|g" "$file"
    
    # Project images
    sed -i "s|src=['\"]\/Project\([0-9]\+\)\.jpg['\"]|src=\"/images/projects/Project\1.jpg\"|g" "$file"
    sed -i "s|src=['\"]\/ongoingProject\([0-9]\+\)\.jpg['\"]|src=\"/images/projects/ongoingProject\1.jpg\"|g" "$file"
    sed -i "s|src=['\"]\/futureProject\([0-9]\+\)\.jpg['\"]|src=\"/images/projects/futureProject\1.jpg\"|g" "$file"
    
    # Achievement images
    sed -i "s|src=['\"]\/Achievement\([0-9]\+\)\.jpg['\"]|src=\"/images/achievements/Achievement\1.jpg\"|g" "$file"
    
    # Team images
    sed -i "s|src=['\"]\/Coordinator\.jpg['\"]|src=\"/images/team/Coordinator.jpg\"|g" "$file"
    sed -i "s|src=['\"]\/Co-coordinator\.jpg['\"]|src=\"/images/team/Co-coordinator.jpg\"|g" "$file"
    sed -i "s|src=['\"]\/Faculty\.jpg['\"]|src=\"/images/team/Faculty.jpg\"|g" "$file"
    sed -i "s|src=['\"]\/placeholder-user\.jpg['\"]|src=\"/images/misc/placeholder-user.jpg\"|g" "$file"
    
    # Drone/Hero images
    sed -i "s|src=['\"]\/drone1\.png['\"]|src=\"/images/hero/drone1.png\"|g" "$file"
    sed -i "s|src=['\"]\/drone2\.jpg['\"]|src=\"/images/hero/drone2.jpg\"|g" "$file"
    sed -i "s|src=['\"]\/drone3new\.png['\"]|src=\"/images/hero/drone3new.png\"|g" "$file"
    
    # Logo images
    sed -i "s|src=['\"]\/logo\.png['\"]|src=\"/images/misc/logo.png\"|g" "$file"
    sed -i "s|href=['\"]\/logo\.png['\"]|href=\"/images/misc/logo.png\"|g" "$file"
    
    # Image property (for event images and others)
    sed -i "s|image: '\/gallery\([0-9]\+\)\.jpg'|image: '/images/events/event\1.jpg'|g" "$file"
}

# Update all component files
update_file "components/sections/HeroSection.tsx"
update_file "components/sections/ProjectsSection.tsx"
update_file "components/sections/GallerySection.tsx"
update_file "components/sections/EventReportsSection.tsx"
update_file "components/sections/AchievementsSection.tsx"
update_file "components/sections/TeamSection.tsx"
update_file "components/Navigation.tsx"
update_file "app/layout.tsx"

echo "✅ Component files updated!"
echo ""
echo "⚠️  MANUAL CHECKS NEEDED:"
echo "   1. Verify image paths in all components"
echo "   2. Check that all images display correctly"
echo "   3. Update any hardcoded paths not caught by script"
echo "   4. Test on development server (pnpm dev)"
