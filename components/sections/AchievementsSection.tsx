'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  useColorModeValue,
  Icon,
  Flex,
  Badge,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';
import Image from 'next/image';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const bgColor = '#0a0e27';

  const achievements = [
    {
      id: 1,
      title: 'Aerothon 2024',
      year: '2024',
      award: 'Winner - Best Autonomous Drone',
      image: '/images/achievements/Aerothon24.jpg',
      description:
        'At Aerothon 2024, our autonomous platform won the Best Autonomous Drone award for robust perception, planning, and mission execution.',
      icon: FaTrophy,
      color: 'yellow',
    },
    {
      id: 2,
      title: 'Sky Maneuver - IIT Roorkee',
      year: '2025',
      award: '2nd Prize',
      image: '/images/achievements/SkyManeuver25.jpg',
      description:
        'Secured 2nd prize in Sky Maneuver at IIT Roorkee with consistent performance across precision flight and maneuvering rounds.',
      icon: FaMedal,
      color: 'blue',
    },
    {
      id: 3,
      title: 'Flight Fury - IIT Roorkee',
      year: '2024',
      award: 'Participated',
      image: '/images/achievements/Flight%20Fury%20IIT%20Roorkee.jpg',
      description:
        'Participated in Flight Fury at IIT Roorkee, gaining valuable experience in competitive aerial challenges and race formats.',
      icon: FaAward,
      color: 'orange',
    },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Aerothon 2024 – Best Autonomous Drone (Winner)',
      description:
        'We won the Best Autonomous Drone award at Aerothon 2024 for robust perception, planning, and mission execution.',
    },
    {
      year: '2024',
      title: 'SIH 2024 – Hardware Edition (Winners)',
      description:
        'Winners at Smart India Hackathon 2024 (Hardware Edition), delivering a practical, high-impact solution under tight constraints.',
    },
    {
      year: '2024',
      title: 'Flight Fury – IIT Roorkee (Participated)',
      description:
        'Participated in Flight Fury at IIT Roorkee, gaining valuable race-format experience and competitive exposure.',
    },
    {
      year: '2025',
      title: 'Sky Maneuver – IIT Roorkee (2nd Prize)',
      description:
        'Secured 2nd prize in Sky Maneuver at IIT Roorkee with consistent performance across precision flight and maneuver rounds.',
    },
  ];  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box id="achievements" py={{ base: 12, md: 16, lg: 20 }} bg="transparent" ref={ref} w="100%" maxW="100%" overflow="hidden">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={16}
        >
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="extrabold"
            mb={4}
            bgGradient="linear(to-r, #00d4ff, #0ea5e9)"
            bgClip="text"
          >
            ACHIEVEMENTS
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="3xl" mx="auto">
            Our victories and recognition in national and international drone competitions
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={8}
          mb={16}
        >
          {achievements.map((achievement, index) => (
            <MotionBox
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box
                bg="#1a2142"
                borderRadius="2xl"
                overflow="hidden"
                borderWidth="2px"
                borderColor="rgba(0,212,255,0.3)"
                h="100%"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-10px)',
                  borderColor: '#00d4ff',
                  boxShadow: '0 0 20px rgba(0,212,255,0.5)',
                }}
              >
                <Box position="relative" h="200px">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    position="absolute"
                    top={4}
                    left={4}
                    bg={`${achievement.color}.500`}
                    color="white"
                    p={2}
                    borderRadius="full"
                  >
                    <Icon as={achievement.icon} boxSize={6} />
                  </Box>
                </Box>
                <Box p={6}>
                  <Badge colorScheme={achievement.color} mb={2}>
                    {achievement.year}
                  </Badge>
                  <Heading as="h3" fontSize="lg" mb={2}>
                    {achievement.title}
                  </Heading>
                  <Text color="brand.500" fontWeight="bold" mb={2}>
                    {achievement.award}
                  </Text>
                  <Text fontSize="sm" color="gray.300" _dark={{ color: 'gray.400' }}>
                    {achievement.description}
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </Grid>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Heading
            as="h3"
            fontSize={{ base: '2xl', md: '3xl' }}
            textAlign="center"
            mb={12}
          >
            Our Journey
          </Heading>

          <Box position="relative">
            <Box
              position="absolute"
              left={{ base: '20px', md: '50%' }}
              top={0}
              bottom={0}
              w="2px"
              bg="brand.500"
              transform={{ md: 'translateX(-50%)' }}
            />

            {timeline.map((event, index) => (
              <MotionFlex
                key={index}
                variants={itemVariants}
                direction={{ base: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                align="center"
                mb={12}
                position="relative"
              >
                <Box flex={1} display={{ base: 'none', md: 'block' }} />

                <Flex
                  position="absolute"
                  left={{ base: '12px', md: '50%' }}
                  transform={{ md: 'translateX(-50%)' }}
                  bg="brand.500"
                  color="white"
                  w="60px"
                  h="60px"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  fontWeight="bold"
                  fontSize="lg"
                  boxShadow="0 0 20px rgba(24, 144, 255, 0.5)"
                  zIndex={1}
                >
                  {event.year}
                </Flex>

                <Box
                  flex={1}
                  ml={{ base: '90px', md: index % 2 === 0 ? '80px' : '0' }}
                  mr={{ base: '0', md: index % 2 === 0 ? '0' : '80px' }}
                  bg="#1a2142"
                  p={6}
                  borderRadius="xl"
                  boxShadow="lg"
                  borderWidth="1px"
                  borderColor="rgba(0,212,255,0.3)"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'scale(1.02)',
                    borderColor: '#00d4ff',
                  }}
                >
                  <Heading as="h4" fontSize="xl" mb={2}>
                    {event.title}
                  </Heading>
                  <Text color="gray.300" _dark={{ color: 'gray.400' }}>
                    {event.description}
                  </Text>
                </Box>
              </MotionFlex>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
