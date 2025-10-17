'use client';

import { Box, Container, Heading, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <Stack spacing={6} flex={1} maxW={{ lg: '50%' }}>
            <MotionHeading
              as="h1"
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              fontWeight="extrabold"
              lineHeight="1.1"
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
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              fontWeight="bold"
              color="#00d4ff"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 } as any}
            >
              Where Innovation Takes Flight ✈️
            </MotionText>

            <MotionText
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.400"
              maxW="600px"
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
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button
                  size="lg"
                  bg="#00d4ff"
                  color="black"
                  px={8}
                  py={6}
                  fontSize="lg"
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
                  size="lg"
                  variant="outline"
                  borderColor="#00d4ff"
                  color="#00d4ff"
                  px={8}
                  py={6}
                  fontSize="lg"
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
            h={{ base: '400px', md: '600px' }}
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
            <Box
              position="relative"
              width={{ base: '300px', md: '450px', lg: '550px' }}
              height={{ base: '300px', md: '450px', lg: '550px' }}
              className="drone-float"
            >
              <Image
                src="/drone3new.png"
                alt="AFC Drone"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
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
          h="60px"
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
        
        @keyframes droneFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        
        .drone-float {
          animation: droneFloat 4s ease-in-out infinite;
        }
      `}</style>
    </Box>
  );
}
