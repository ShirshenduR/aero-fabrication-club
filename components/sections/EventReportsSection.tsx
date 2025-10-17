'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTrophy, FaUsers, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

const MotionBox = motion(Box);

const events = [
  {
    title: 'Annual Drone Workshop',
    year: '2024',
    icon: FaUsers,
    image: '/images/events/place.png',
    description:
      'Our flagship workshop series introducing students to drone design, assembly, and programming. Hands-on sessions covering basic to advanced concepts with expert mentors guiding participants through the complete drone building process.',
    color: '#00d4ff',
  },
  {
    title: 'AFC Tech Talks',
    year: '2024',
    icon: FaRocket,
    image: '/images/events/place.png',
    description:
      'Monthly technical seminars featuring industry experts, alumni, and professors discussing latest trends in UAV technology, autonomous systems, and aerospace innovations. Open to all students passionate about drones.',
    color: '#0ea5e9',
  },
  {
    title: 'THRUST 3.0',
    year: '2024',
    icon: FaRocket,
    image: '/images/events/place.png',
    description:
      '3rd Iteration of Exciting Competition of Water Rockets where teams design, build, and launch water-propelled rockets to achieve maximum altitude and accuracy. Encourages innovation in lightweight materials and aerodynamics.',
    color: '#00d4ff',
  },
  {
    title: 'Project Exhibition Day',
    year: '2025',
    icon: FaCalendarAlt,
    image: '/images/events/place.png',
    description:
      'Annual showcase of innovative projects developed by club members throughout the year. Features live demonstrations, technical presentations, and interactive displays of autonomous drones, surveillance systems, and racing quadcopters.',
    color: '#0ea5e9',
  },
];

export default function EventReportsSection() {
  return (
    <Box id="events" py={{ base: 12, md: 16, lg: 20 }} bg="transparent">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={{ base: 8, md: 12, lg: 16 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            bgGradient="linear(to-r, #00d4ff, #0ea5e9)"
            bgClip="text"
            mb={{ base: 3, md: 4 }}
          >
            Events & Competitions
          </Heading>
          <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }} color="gray.300" maxW="2xl" mx="auto" px={{ base: 2, md: 0 }}>
            Workshops, competitions, and activities hosted by our club throughout the year
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {events.map((event, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              bg="#1a2142"
              borderRadius="2xl"
              overflow="hidden"
              borderWidth="2px"
              borderColor="rgba(0,212,255,0.3)"
              sx={{
                transition: 'all 0.3s ease',
              }}
              _hover={{
                transform: 'translateY(-10px)',
                borderColor: '#00d4ff',
                boxShadow: '0 0 20px rgba(0,212,255,0.5)',
              }}
            >
              {/* Event Image */}
              <Box position="relative" h="250px" overflow="hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-b, transparent, rgba(10,14,39,0.9))"
                />
                <Box
                  position="absolute"
                  top={4}
                  right={4}
                  bg="rgba(0,212,255,0.2)"
                  backdropFilter="blur(10px)"
                  px={4}
                  py={2}
                  borderRadius="full"
                  border="1px solid"
                  borderColor={event.color}
                >
                  <HStack spacing={2}>
                    <Icon as={FaCalendarAlt} color={event.color} />
                    <Text color="white" fontSize="sm" fontWeight="bold">
                      {event.year}
                    </Text>
                  </HStack>
                </Box>
              </Box>

              {/* Event Content */}
              <VStack align="start" spacing={4} p={6}>
                <HStack spacing={3}>
                  <Icon
                    as={event.icon}
                    boxSize={7}
                    color={event.color}
                  />
                  <Heading as="h3" fontSize="xl" color="white">
                    {event.title}
                  </Heading>
                </HStack>

                <Text color="gray.300" fontSize="md" lineHeight="tall">
                  {event.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
