'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
  useColorModeValue,
  Icon,
  AspectRatio,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaBullseye, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const bgColor = '#0a0e27';
  const cardBg = '#1a2142';
  const cardBorder = '#00d4ff';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box id="about" py={{ base: 12, md: 16, lg: 20 }} bg="transparent" ref={ref} w="100%" maxW="100%" overflow="hidden">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={{ base: 8, md: 12, lg: 16 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="extrabold"
            mb={{ base: 3, md: 4 }}
            bgGradient="linear(to-r, #00d4ff, #0ea5e9)"
            bgClip="text"
          >
            About Us
          </Heading>
          <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} color="gray.300" maxW="3xl" mx="auto" px={{ base: 2, md: 0 }}>
            Meet the passionate individuals driving innovation and excellence in
            aerospace engineering
          </Text>
        </MotionBox>

        <MotionGrid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 8, md: 10, lg: 12 }}
          mb={{ base: 8, md: 12, lg: 16 }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <MotionBox variants={itemVariants}>
            <Box
              borderRadius={{ base: 'xl', md: '2xl' }}
              overflow="hidden"
              boxShadow="2xl"
              _hover={{
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease',
              }}
              bg="#000"
            >
              <AspectRatio ratio={16/9}>
                <Box position="relative" w="100%" h="100%">
                  <Image
                    src="/images/about/about.jpg"
                    alt="Aero Fabrication Club Team"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(min-width: 1024px) 800px, 100vw"
                  />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient="linear(to-t, blackAlpha.700, transparent)"
                  />
                </Box>
              </AspectRatio>
            </Box>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Stack spacing={{ base: 4, md: 6 }}>
              <Heading as="h3" fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
                Who We Are
              </Heading>
              <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} color="gray.300" _dark={{ color: 'gray.300' }} lineHeight={{ base: '1.6', md: '1.7' }}>
                The Aero Fabrication Club embodies the spirit of "Creating to Learn, 
                Learning to Create." We believe in building from the very basic laws 
                provided by nature, incorporating the fundamental principles of aerospace 
                and fabrication engineering.
              </Text>
              <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} color="gray.300" _dark={{ color: 'gray.300' }} lineHeight={{ base: '1.6', md: '1.7' }}>
                Our mission is to provide hands-on experience in designing, building, 
                and flying unmanned aerial vehicles. We foster innovation, teamwork, 
                and practical engineering skills among our members.
              </Text>
              <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} color="gray.300" _dark={{ color: 'gray.300' }} lineHeight={{ base: '1.6', md: '1.7' }}>
                Constituting participation from all years of the undergraduate program, 
                we are an ever-growing and ever-learning family dedicated to pushing 
                the boundaries of what's possible in aerospace engineering.
              </Text>
            </Stack>
          </MotionBox>
        </MotionGrid>

        <MotionGrid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={{ base: 6, md: 8 }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius={{ base: 'xl', md: '2xl' }}
              p={{ base: 6, md: 8 }}
              h="100%"
              borderWidth="2px"
              borderColor={cardBorder}
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '2xl',
                borderColor: 'brand.500',
              }}
            >
              <Icon
                as={FaBullseye}
                w={{ base: 10, md: 12 }}
                h={{ base: 10, md: 12 }}
                color="brand.500"
                mb={4}
              />
              <Heading as="h4" fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} mb={{ base: 3, md: 4 }}>
                Our Vision
              </Heading>
              <Text color="gray.300" fontSize={{ base: 'sm', md: 'md' }} lineHeight={{ base: '1.6', md: '1.7' }} _dark={{ color: 'gray.300' }}>
                To be at the forefront of innovation in unmanned aerial vehicle 
                technology, inspiring the next generation of aerospace engineers 
                through hands-on learning and collaborative problem-solving.
              </Text>
            </Box>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius={{ base: 'xl', md: '2xl' }}
              p={{ base: 6, md: 8 }}
              h="100%"
              borderWidth="2px"
              borderColor={cardBorder}
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '2xl',
                borderColor: 'brand.500',
              }}
            >
              <Icon
                as={FaRocket}
                w={{ base: 10, md: 12 }}
                h={{ base: 10, md: 12 }}
                color="brand.500"
                mb={4}
              />
              <Heading as="h4" fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} mb={{ base: 3, md: 4 }}>
                Our Mission
              </Heading>
              <Text color="gray.300" fontSize={{ base: 'sm', md: 'md' }} lineHeight={{ base: '1.6', md: '1.7' }} _dark={{ color: 'gray.300' }}>
                To provide students with practical experience in aerospace engineering 
                through competitions, workshops, and collaborative projects, creating 
                an environment where they can apply theoretical knowledge to real-world 
                challenges.
              </Text>
            </Box>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Box
              bg={cardBg}
              borderRadius={{ base: 'xl', md: '2xl' }}
              p={{ base: 6, md: 8 }}
              h="100%"
              borderWidth="2px"
              borderColor={cardBorder}
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '2xl',
                borderColor: 'brand.500',
              }}
            >
              <Icon
                as={FaUsers}
                w={{ base: 10, md: 12 }}
                h={{ base: 10, md: 12 }}
                color="brand.500"
                mb={4}
              />
              <Heading as="h4" fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} mb={{ base: 3, md: 4 }}>
                Our Community
              </Heading>
              <Text color="gray.300" fontSize={{ base: 'sm', md: 'md' }} lineHeight={{ base: '1.6', md: '1.7' }} _dark={{ color: 'gray.300' }}>
                We envision a community where students can freely explore their ideas, 
                learn from failures, and celebrate successes in a supportive environment 
                that promotes technical excellence and creativity.
              </Text>
            </Box>
          </MotionBox>
        </MotionGrid>
      </Container>
    </Box>
  );
}
