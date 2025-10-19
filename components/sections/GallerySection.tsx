"use client";

import { useState } from 'react';
import { Box, Container, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

const galleryImages = [
  // Big feature image on the left (spans 2 cols x 2 rows on md+)
  {
    id: 1,
    src: '/images/gallery/gallery1.jpg',
    alt: 'gallery 1',
    mobileSpan: 2,
    mobileRowSpan: 2,
    gridColumnMd: '1 / span 2',
    gridRowMd: '1 / span 2',
  },
  // Top right small images
  {
    id: 2,
    src: '/images/gallery/gallery2.jpg',
    alt: 'gallery 2',
    mobileSpan: 1,
    mobileRowSpan: 1,
    gridColumnMd: '3 / span 1',
    gridRowMd: '1 / span 1',
  },
  {
    id: 3,
    src: '/images/gallery/gallery3.jpg',
    alt: 'gallery 3',
    mobileSpan: 1,
    mobileRowSpan: 1,
    gridColumnMd: '4 / span 1',
    gridRowMd: '1 / span 1',
  },
  // Tall image to the right spanning two rows (md+)
  {
    id: 4,
    src: '/images/gallery/gallery4.jpg',
    alt: 'gallery 4',
    mobileSpan: 2,
    mobileRowSpan: 1,
    gridColumnMd: '3 / span 1',
    gridRowMd: '2 / span 2',
  },
  // Wide image on the right column (md+)
  {
    id: 5,
    src: '/images/gallery/gallery5.jpg',
    alt: 'gallery 5',
    mobileSpan: 2,
    mobileRowSpan: 1,
    gridColumnMd: '4 / span 1',
    gridRowMd: '2 / span 1',
  },
  // Bottom left smalls under the big image
  {
    id: 6,
    src: '/images/gallery/gallery6.jpg',
    alt: 'gallery 6',
    mobileSpan: 2,
    mobileRowSpan: 1,
    gridColumnMd: '1 / span 1',
    gridRowMd: '3 / span 1',
  },
  {
    id: 7,
    src: '/images/gallery/gallery7.jpg',
    alt: 'gallery 7',
    mobileSpan: 2,
    mobileRowSpan: 1,
    gridColumnMd: '2 / span 1',
    gridRowMd: '3 / span 1',
  },
  // Bottom right additional image for an 8th slot
  {
    id: 8,
    src: '/images/gallery/gallery8.jpg',
    alt: 'gallery 8',
    mobileSpan: 2,
    mobileRowSpan: 1,
    gridColumnMd: '4 / span 1',
    gridRowMd: '3 / span 1',
  },
];

export default function GallerySection() {
  // Inline expand state and hover state
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleImageClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box id="gallery" py={{ base: 12, md: 20 }} bg="transparent" position="relative" w="100%" maxW="100%" overflow="hidden">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <MotionBox
          textAlign="center"
          mb={{ base: 8, md: 16 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 } as any}
        >
          <Heading
            as="h2"
            size={{ base: 'xl', md: '2xl' }}
            mb={4}
            bgGradient="linear(to-r, #00d4ff, #0ea5e9)"
            bgClip="text"
          >
            Gallery
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400">
            Capturing our journey in aerial innovation
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
          gap={{ base: 2, md: 4 }}
          autoRows={{ base: '150px', md: '200px' }}
          gridAutoFlow="dense"
        >
          <AnimatePresence>
            {galleryImages.map((image, index) => {
              const isExpanded = expandedId === image.id;
              const anyExpanded = expandedId !== null;
              return (
                <MotionGridItem
                  key={image.id}
                  // Mobile: toggle span on expand; MD+: expand to full width and taller rows
                  colSpan={{ base: isExpanded ? 2 : image.mobileSpan }}
                  rowSpan={{ base: isExpanded ? 2 : image.mobileRowSpan }}
                  gridColumn={{ md: isExpanded ? '1 / -1' : anyExpanded ? 'auto' : image.gridColumnMd }}
                  gridRow={{ md: isExpanded ? 'auto / span 3' : anyExpanded ? 'auto' : image.gridRowMd }}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    layout: { duration: 0.4, type: "spring", stiffness: 100 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3, delay: index * 0.05 }
                  } as any}
                  cursor="pointer"
                  onClick={() => handleImageClick(image.id)}
                  onMouseEnter={() => setHoveredId(image.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  position="relative"
                  overflow="hidden"
                  borderRadius={{ base: 'md', md: 'lg' }}
                  border="2px solid"
                  borderColor={hoveredId === image.id || isExpanded ? '#00d4ff' : 'rgba(0,212,255,0.2)'}
                  boxShadow={hoveredId === image.id || isExpanded ? '0 0 20px rgba(0,212,255,0.5)' : 'none'}
                  zIndex={isExpanded ? 1 : 0}
                  bg="#1a2142"
                >
                  <Box
                    position="relative"
                    width="100%"
                    height="100%"
                    transition="transform 0.3s ease"
                    transform={hoveredId === image.id && !isExpanded ? 'scale(1.05)' : 'scale(1)'}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </MotionGridItem>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
}
