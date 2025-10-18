'use client';

import { Box, Container, Heading, Text, Stack, Button, Flex, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Drone3DCanvas = dynamic(() => import('../Drone3DCanvas'), { 
  ssr: false,
  loading: () => (
    <Box 
      h="100%" 
      w="100%" 
      bg="transparent" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
      <Spinner size="xl" color="#00d4ff" thickness="4px" />
    </Box>
  )
});

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function HeroSection() {
  return (
    <Box
      id="home"
      minH="100vh"
      bg="transparent"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      <Box
        position="absolute"
        top="20%"
        left="10%"
        width="300px"
        height="300px"
        borderRadius="50%"
        bgGradient="radial(circle, rgba(0,212,255,0.2), transparent)"
        filter="blur(80px)"
        className="glow-animation"
      />

      <Box
        position="absolute"
        bottom="10%"
        right="15%"
        width="400px"
        height="400px"
        borderRadius="50%"
        bgGradient="radial(circle, rgba(13,71,161,0.3), transparent)"
        filter="blur(90px)"
        className="glow-animation-alt"
      />

      <Container maxW="container.xl" position="relative" zIndex={1} px={{ base: 4, sm: 5, md: 6, lg: 6, xl: 8 }} py={{ base: 4, md: 0 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 4, xs: 5, sm: 7, md: 9, lg: 8, xl: 12 }}
          pt={{ base: 20, sm: 22, md: 24, lg: 20, xl: 24 }}
          pb={{ base: 6, sm: 8, md: 10, lg: 8, xl: 0 }}
        >
          <Stack 
            spacing={{ base: 2.5, xs: 3, sm: 4, md: 5, lg: 5, xl: 6 }} 
            flex={1} 
            maxW={{ lg: '52%', xl: '50%' }} 
            w="full"
            align={{ base: 'center', lg: 'flex-start' }}
          >
            <MotionHeading
              as="h1"
              fontSize={{ base: '1.65rem', xs: '2rem', sm: '2.5rem', md: '3.25rem', lg: '4rem', xl: '4.75rem', '2xl': '5.5rem' }}
              fontWeight="extrabold"
              lineHeight={{ base: '1.1', md: '1.1' }}
              letterSpacing="tight"
              textAlign={{ base: 'center', lg: 'left' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 } as any}
            >
              <Text
                as="span"
                bgGradient="linear(to-r, #00d4ff, #0ea5e9)"
                bgClip="text"
              >
                AERO
              </Text>
              <br />
              <Text
                as="span"
                bgGradient="linear(to-r, #0ea5e9, #0D47A1)"
                bgClip="text"
              >
                FABRICATION
              </Text>
              <br />
              <Text as="span" color="white">
                CLUB
              </Text>
            </MotionHeading>

            <MotionText
              fontSize={{ base: 'xs', xs: 'sm', sm: 'md', md: 'lg', lg: 'xl', xl: '2xl' }}
              fontWeight="bold"
              color="#00d4ff"
              textAlign={{ base: 'center', lg: 'left' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 } as any}
            >
              Where Innovation Takes Flight ✈️
            </MotionText>

            <MotionText
              fontSize={{ base: '2xs', xs: 'xs', sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }}
              color="gray.400"
              maxW={{ base: '95%', sm: '100%', lg: '90%', xl: '100%' }}
              lineHeight={{ base: '1.4', sm: '1.5', md: '1.6' }}
              textAlign={{ base: 'center', lg: 'left' }}
              px={{ base: 1, sm: 0 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 } as any}
            >
              Designing, building, and flying innovative unmanned aerial vehicles. 
              Join us in pushing the boundaries of aerospace engineering.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 } as any}
            >
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: 3, md: 4 }} w="full">
                <Button
                  size={{ base: 'md', md: 'lg' }}
                  bg="#00d4ff"
                  color="black"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 5, md: 6 }}
                  fontSize={{ base: 'md', md: 'lg' }}
                  w={{ base: 'full', sm: 'auto' }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  _hover={{
                    bg: '#0ea5e9',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)',
                  }}
                >
                  Explore Projects
                </Button>
                <Button
                  size={{ base: 'md', md: 'lg' }}
                  variant="outline"
                  borderColor="#00d4ff"
                  color="#00d4ff"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 5, md: 6 }}
                  fontSize={{ base: 'md', md: 'lg' }}
                  w={{ base: 'full', sm: 'auto' }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  _hover={{
                    bg: "rgba(0, 212, 255, 0.1)",
                    transform: 'translateY(-2px)',
                  }}
                >
                  Get In Touch
                </Button>
              </Stack>
            </MotionBox>
          </Stack>

          <MotionBox
            flex={1}
            h={{ 
              base: '260px',   // Compact for phones
              xs: '280px',     // Slightly taller
              sm: '340px',     // Medium phones
              md: '400px',     // Tablets
              lg: '480px',     // Laptops
              xl: '540px',     // Desktop
              '2xl': '600px'   // Large screens
            }}
            w="100%"
            maxW={{ base: '100%', sm: '95%', md: '90%', lg: '48%', xl: '50%' }}
            minH={{ base: '260px', sm: '280px', md: '360px', lg: '440px' }}
            aspectRatio={{ base: 'auto', md: '4/3', lg: 'auto' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 } as any}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
          >
            <Drone3DCanvas 
              height="100%"
              width="100%"
            />
          </MotionBox>
        </Flex>
      </Container>

      <MotionBox
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        } as any}
      >
        <Box
          w="2px"
          h={{ base: '40px', md: '60px' }}
          bgGradient="linear(to-b, #00d4ff, transparent)"
          borderRadius="full"
        />
      </MotionBox>

      <style jsx global>{`
        @keyframes glow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
        
        .glow-animation {
          animation: glow 8s ease-in-out infinite;
        }
        
        .glow-animation-alt {
          animation: glow 10s ease-in-out infinite reverse;
        }
      `}</style>
    </Box>
  );
}
