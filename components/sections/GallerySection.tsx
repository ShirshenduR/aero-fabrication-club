"use client";

import { useState } from 'react';
import { Box, Container, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { DEFAULT_SITE_CONTENT, type GalleryContent } from '@/lib/site-content';

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

export default function GallerySection({
  content = DEFAULT_SITE_CONTENT.gallery,
}: {
  content?: GalleryContent;
}) {
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
            {content.heading}
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400">
            {content.subheading}
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
          gap={{ base: 2, md: 4 }}
          autoRows={{ base: '150px', md: '200px' }}
          gridAutoFlow="dense"
        >
          <AnimatePresence>
            {content.images.map((image, index) => {
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
                  minH={isExpanded ? { base: '300px', md: '500px' } : 'auto'}
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
                      style={{ 
                        objectFit: isExpanded ? 'contain' : 'cover'
                      }}
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
