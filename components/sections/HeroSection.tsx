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

      <Container maxW="container.xl" position="relative" zIndex={1} px={{ base: 4, md: 6 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 6, md: 8, lg: 12 }}
          pt={{ base: 16, md: 20 }}
        >
          <Stack spacing={{ base: 4, md: 6 }} flex={1} maxW={{ lg: '50%' }} w="full">
            <MotionHeading
              as="h1"
              fontSize={{ base: '2.5rem', xs: '3rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem', xl: '7xl' }}
              fontWeight="extrabold"
              lineHeight={{ base: '1.2', md: '1.1' }}
              letterSpacing="tight"
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
              fontSize={{ base: 'lg', xs: 'xl', sm: '2xl', md: '2xl', lg: '3xl' }}
              fontWeight="bold"
              color="#00d4ff"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 } as any}
            >
              Where Innovation Takes Flight ✈️
            </MotionText>

            <MotionText
              fontSize={{ base: 'sm', xs: 'md', md: 'lg' }}
              color="gray.400"
              maxW="600px"
              lineHeight={{ base: '1.6', md: '1.7' }}
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
            h={{ base: '300px', xs: '350px', sm: '400px', md: '500px', lg: '600px' }}
            w="100%"
            maxW={{ lg: '50%' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 } as any}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Drone3DCanvas 
              height={{ base: '300px', xs: '350px', sm: '400px', md: '500px', lg: '600px' }}
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
