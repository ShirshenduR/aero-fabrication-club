'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Avatar,
  useColorModeValue,
  VStack,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaChartLine, FaDollarSign, FaCalendarAlt, FaHashtag } from 'react-icons/fa';
import Image from 'next/image';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

/**
 * Team Section Component
 * Features: Circular profile cards with hover animations
 */
export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const bgGradient = useColorModeValue(
    'linear(to-b, blue.950, gray.900)',
    'linear(to-b, blue.950, gray.900)'
  );

  const leadership = [
    {
      name: 'Dr. Akshay Pandey',
      role: 'Faculty Incharge',
      image: '/fic.jpeg',
      description:
        'Providing guidance and mentorship to the team, bringing years of experience in aerospace engineering and research.',
    },
    {
      name: 'Chetan Anand Jhariya',
      role: 'Coordinator',
      image: '/coordinator.jpeg',
      description:
        "Leading the team's overall direction and strategy, coordinating between different sub-teams to ensure cohesive project execution.",
    },
    {
      name: 'Shashaank Srivastava',
      role: 'Co-Coordinator',
      image: '/co-coordinator.jpeg',
      description:
        'Supporting the coordination efforts and providing leadership in specific project areas, ensuring smooth day-to-day operations.',
    },
    {
      name: 'Rohit TM',
      role: 'Co-Coordinator',
      image: '/co-coordinator1.jpg',
      description:
        'Supporting the coordination efforts and providing leadership in specific project areas, ensuring smooth day-to-day operations.',
    },
  ];

  const divisions = [
    {
      name: 'Technical Team',
      icon: FaUsers,
      description:
        'Responsible for the design, engineering, and technical aspects of all drone projects.',
      color: 'blue',
    },
    {
      name: 'Management Team',
      icon: FaChartLine,
      description:
        "Handles promotion, outreach, and communication of the club's activities and achievements.",
      color: 'purple',
    },
    {
      name: 'Finance Team',
      icon: FaDollarSign,
      description:
        'Manages budgeting, fundraising, and financial planning for all club projects and activities.',
      color: 'green',
    },
    {
      name: 'Events Team',
      icon: FaCalendarAlt,
      description:
        'Oversees club operations, membership, and coordination between different teams.',
      color: 'orange',
    },
    {
      name: 'Social Media Team',
      icon: FaHashtag,
      description:
        'Focuses on acquiring resources, developing partnerships, and planning for future growth.',
      color: 'pink',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box id="team" py={20} bg="transparent" ref={ref}>
      <Container maxW="container.xl">
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
            color="white"
          >
            OUR TEAM
          </Heading>
          <Text fontSize="lg" color="gray.400" maxW="3xl" mx="auto">
            Meet the passionate individuals driving innovation and excellence in
            aerospace engineering
          </Text>
        </MotionBox>

        {/* Leadership Section */}
        <MotionGrid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={8}
          mb={20}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {leadership.map((leader, index) => (
            <MotionBox key={index} variants={itemVariants}>
              <VStack
                bg="blackAlpha.400"
                borderRadius="2xl"
                p={6}
                h="100%"
                borderWidth="2px"
                borderColor="brand.700"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-10px)',
                  borderColor: 'brand.400',
                  boxShadow: '0 20px 40px rgba(24, 144, 255, 0.3)',
                }}
              >
                {/* Circular Profile Image */}
                <Box position="relative" mb={4}>
                  <Avatar
                    size="2xl"
                    src={leader.image}
                    name={leader.name}
                    border="4px solid"
                    borderColor="brand.500"
                    boxShadow="0 0 20px rgba(24, 144, 255, 0.5)"
                  />
                </Box>

                <Heading as="h3" fontSize="xl" color="white" textAlign="center">
                  {leader.name}
                </Heading>

                <Text
                  color="brand.300"
                  fontWeight="bold"
                  fontSize="md"
                  textAlign="center"
                >
                  {leader.role}
                </Text>

                <Text color="gray.400" fontSize="sm" textAlign="center">
                  {leader.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </MotionGrid>

        {/* Team Divisions */}
        <Box>
          <Heading
            as="h3"
            fontSize={{ base: '2xl', md: '3xl' }}
            textAlign="center"
            color="white"
            mb={12}
          >
            Team Divisions
          </Heading>

          <MotionGrid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(5, 1fr)',
            }}
            gap={6}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {divisions.map((division, index) => (
              <MotionBox key={index} variants={itemVariants}>
                <VStack
                  bg="blackAlpha.400"
                  borderRadius="xl"
                  p={6}
                  h="100%"
                  spacing={4}
                  borderWidth="1px"
                  borderColor="whiteAlpha.300"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-5px)',
                    bg: 'blackAlpha.600',
                    borderColor: `${division.color}.500`,
                  }}
                >
                  <Flex
                    w="60px"
                    h="60px"
                    bg={`${division.color}.500`}
                    borderRadius="full"
                    align="center"
                    justify="center"
                    boxShadow="md"
                  >
                    <Icon as={division.icon} boxSize={6} color="white" />
                  </Flex>

                  <Heading as="h4" fontSize="lg" color="white" textAlign="center">
                    {division.name}
                  </Heading>

                  <Text
                    color="gray.400"
                    fontSize="sm"
                    textAlign="center"
                    flex={1}
                  >
                    {division.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </MotionGrid>
        </Box>
      </Container>
    </Box>
  );
}
