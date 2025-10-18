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

/**
 * Events & Achievements Section Component
 * Features: Timeline of major achievements and events
 */
export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const bgColor = '#0a0e27';

  const achievements = [
    {
      id: 1,
      title: 'Autonomous Drone-Aerothon 2022',
      year: '2022',
      award: '2nd Place - Design Phase',
      image: '/images/achievements/Achievement1.jpg',
      description:
        'Secured 2nd place in the design phase of the prestigious Autonomous Drone-Aerothon22, competing against top engineering colleges nationwide. Our innovative autonomous navigation system impressed the judges.',
      icon: FaMedal,
      color: 'blue',
    },
    {
      id: 2,
      title: 'SAE Indian Southern Section DDC 2023',
      year: '2023',
      award: '1st Place - Best Aerodynamics (CFD)',
      image: '/images/achievements/Achievement2.jpg',
      description:
        'Won 1st place in Best Aerodynamics Analysis (CFD) category at SAE Indian Southern Section DDC 23. Our advanced computational fluid dynamics simulation demonstrated superior airframe design optimization.',
      icon: FaTrophy,
      color: 'yellow',
    },
    {
      id: 3,
      title: 'IIT Roorkee Cognizance Tech Fest',
      year: '2023',
      award: '3rd Place - Flight Fury',
      image: '/images/achievements/Achievement3.jpg',
      description:
        'Achieved 3rd place in Flight Fury competition at IIT Roorkee\'s prestigious Cognizance Tech Fest. Competed in challenging aerial maneuvers and precision flying tasks against 50+ teams.',
      icon: FaAward,
      color: 'orange',
    },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'National Drone Competition Finalist',
      description:
        'Qualified as top 10 finalists in the National Drone Design Competition among 100+ participating teams from premier engineering institutes across India.',
    },
    {
      year: '2022',
      title: 'Best Innovation Award - TechnoXian',
      description:
        'Received Best Innovation Award at TechnoXian World Robotics Championship for our swarm robotics implementation in autonomous drones.',
    },
    {
      year: '2023',
      title: 'Winners - Inter IIT Tech Meet',
      description:
        'Secured 1st position in the Drone Racing category at Inter IIT Tech Meet, showcasing superior piloting skills and technical prowess.',
    },
    {
      year: '2024',
      title: 'National Level Recognition',
      description:
        'Featured in National Innovation Council for our groundbreaking work in low-cost autonomous surveillance drones for agricultural applications.',
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

        {/* Major Achievements Grid */}
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

        {/* Timeline Section */}
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
            {/* Timeline line */}
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
                {/* Spacer for desktop */}
                <Box flex={1} display={{ base: 'none', md: 'block' }} />

                {/* Timeline dot */}
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

                {/* Content card */}
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
