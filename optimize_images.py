#!/usr/bin/env python3
"""
Image Optimization Script for Aero Fabrication Club Website
Resizes and compresses all images to improve loading speed
"""

import os
from pathlib import Path
from PIL import Image
import sys

# Configuration
MAX_WIDTH = 1920  # Maximum width for images
MAX_HEIGHT = 1080  # Maximum height for images
QUALITY = 85  # JPEG quality (1-100, 85 is good balance)
THUMBNAIL_SIZE = (800, 800)  # For gallery thumbnails

# Directories to process
IMAGE_DIRS = [
    "public/images/about",
    "public/images/achievements",
    "public/images/alumni",
    "public/images/events",
    "public/images/gallery",
    "public/images/hero",
    "public/images/misc",
    "public/images/projects",
    "public/images/team"
]

def get_image_size_mb(filepath):
    """Get file size in MB"""
    return os.path.getsize(filepath) / (1024 * 1024)

def optimize_image(image_path, output_path=None, max_width=MAX_WIDTH, max_height=MAX_HEIGHT, quality=QUALITY):
    """
    Optimize a single image by resizing and compressing
    """
    if output_path is None:
        output_path = image_path
    
    try:
        # Open image
        img = Image.open(image_path)
        
        # Convert RGBA to RGB if needed (for JPEG compatibility)
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background
        
        # Get original dimensions
        original_width, original_height = img.size
        original_size = get_image_size_mb(image_path)
        
        # Calculate new dimensions maintaining aspect ratio
        ratio = min(max_width / original_width, max_height / original_height)
        
        if ratio < 1:  # Only resize if image is larger than max dimensions
            new_width = int(original_width * ratio)
            new_height = int(original_height * ratio)
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            resized = True
        else:
            new_width, new_height = original_width, original_height
            resized = False
        
        # Save optimized image
        img.save(output_path, 'JPEG', quality=quality, optimize=True)
        
        new_size = get_image_size_mb(output_path)
        saved = original_size - new_size
        
        return {
            'success': True,
            'original_size': original_size,
            'new_size': new_size,
            'saved': saved,
            'original_dimensions': (original_width, original_height),
            'new_dimensions': (new_width, new_height),
            'resized': resized
        }
    
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

def process_directory(directory):
    """Process all images in a directory"""
    dir_path = Path(directory)
    
    if not dir_path.exists():
        print(f"⚠️  Directory not found: {directory}")
        return
    
    # Supported image formats
    image_extensions = {'.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff'}
    
    # Find all images
    images = []
    for ext in image_extensions:
        images.extend(dir_path.glob(f'*{ext}'))
        images.extend(dir_path.glob(f'*{ext.upper()}'))
    
    if not images:
        print(f"  No images found in {directory}")
        return
    
    print(f"\n📁 Processing {directory} ({len(images)} images)")
    print("-" * 70)
    
    total_original = 0
    total_new = 0
    processed = 0
    errors = 0
    
    for img_path in images:
        original_size_mb = get_image_size_mb(img_path)
        
        # Create backup
        backup_path = img_path.with_suffix(img_path.suffix + '.backup')
        if not backup_path.exists():
            img_path.rename(backup_path)
            source_path = backup_path
        else:
            source_path = img_path
        
        result = optimize_image(str(source_path), str(img_path))
        
        if result['success']:
            processed += 1
            total_original += result['original_size']
            total_new += result['new_size']
            
            status = "🔄 Resized" if result['resized'] else "✓ Optimized"
            print(f"{status} {img_path.name}")
            print(f"   {result['original_dimensions'][0]}x{result['original_dimensions'][1]} → "
                  f"{result['new_dimensions'][0]}x{result['new_dimensions'][1]}")
            print(f"   {result['original_size']:.2f}MB → {result['new_size']:.2f}MB "
                  f"(saved {result['saved']:.2f}MB)")
        else:
            errors += 1
            print(f"❌ Error processing {img_path.name}: {result['error']}")
    
    print("-" * 70)
    print(f"✅ Processed: {processed} | ❌ Errors: {errors}")
    print(f"💾 Total saved: {total_original - total_new:.2f}MB "
          f"({((total_original - total_new) / total_original * 100) if total_original > 0 else 0:.1f}% reduction)")

def main():
    """Main function to process all image directories"""
    print("=" * 70)
    print("🚀 AERO FABRICATION CLUB - IMAGE OPTIMIZATION")
    print("=" * 70)
    print(f"Max dimensions: {MAX_WIDTH}x{MAX_HEIGHT}")
    print(f"JPEG Quality: {QUALITY}")
    print(f"Backups will be created as .backup files")
    
    grand_total_original = 0
    grand_total_new = 0
    
    for directory in IMAGE_DIRS:
        process_directory(directory)
    
    print("\n" + "=" * 70)
    print("✅ OPTIMIZATION COMPLETE!")
    print("=" * 70)
    print("\n💡 Tips:")
    print("  • Original images backed up with .backup extension")
    print("  • To restore: remove .backup extension from backup files")
    print("  • To remove backups: delete all .backup files")
    print("\nRun this command to remove backups after verification:")
    print("  find public/images -name '*.backup' -delete")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Operation cancelled by user")
        sys.exit(1)
