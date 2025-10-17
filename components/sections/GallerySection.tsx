'use client';

import { useState } from 'react';
import { Box, Container, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

const galleryImages = [
  { id: 1, src: '/gallery1.jpg', alt: 'Drone Project 1', description: 'Advanced quadcopter design', span: 2, rowSpan: 2 },
  { id: 2, src: '/gallery2.jpg', alt: 'Drone Project 2', description: 'Flight testing session', span: 1, rowSpan: 1 },
  { id: 3, src: '/gallery3.jpg', alt: 'Workshop 1', description: 'Electronics workshop', span: 1, rowSpan: 1 },
  { id: 4, src: '/gallery4.jpg', alt: 'Team Photo 1', description: 'Team collaboration', span: 1, rowSpan: 2 },
  { id: 5, src: '/drone1.png', alt: 'Drone Project 3', description: 'Custom frame assembly', span: 2, rowSpan: 1 },
  { id: 6, src: '/drone2.jpg', alt: 'Event 1', description: 'Annual drone competition', span: 1, rowSpan: 1 },
];

export default function GallerySection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleImageClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box id="gallery" py={20} bg="transparent" position="relative">
      <Container maxW="container.xl">
        <MotionBox
          textAlign="center"
          mb={16}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 } as any}
        >
          <Heading
            as="h2"
            size="2xl"
            mb={4}
            bgGradient="linear(to-r, #00d4ff, #0ea5e9)"
            bgClip="text"
          >
            Gallery
          </Heading>
          <Text fontSize="lg" color="gray.400">
            Capturing our journey in aerial innovation
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
          gap={4}
          autoRows="200px"
        >
          <AnimatePresence>
            {galleryImages.map((image, index) => {
              const isExpanded = expandedId === image.id;
              
              return (
                <MotionGridItem
                  key={image.id}
                  colSpan={isExpanded ? { base: 2, md: 4 } : { base: image.span, md: image.span }}
                  rowSpan={isExpanded ? { base: 3, md: 3 } : image.rowSpan}
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
                  borderRadius="lg"
                  border="2px solid"
                  borderColor={hoveredId === image.id || isExpanded ? '#00d4ff' : 'rgba(0,212,255,0.2)'}
                  boxShadow={hoveredId === image.id || isExpanded ? '0 0 20px rgba(0,212,255,0.5)' : 'none'}
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
                  
                  <MotionBox
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={isExpanded ? 6 : 4}
                    bg="linear-gradient(to top, rgba(10,14,39,0.95), transparent)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: (hoveredId === image.id || isExpanded) ? 1 : 0 }}
                    transition={{ duration: 0.3 } as any}
                  >
                    <Text 
                      color="white" 
                      fontWeight="bold" 
                      fontSize={isExpanded ? "2xl" : "md"}
                      transition="font-size 0.3s ease"
                    >
                      {image.description}
                    </Text>
                    {isExpanded && (
                      <MotionBox
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 } as any}
                      >
                        <Text color="gray.300" mt={2} fontSize="md">
                          Click to collapse
                        </Text>
                      </MotionBox>
                    )}
                  </MotionBox>
                </MotionGridItem>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
}
