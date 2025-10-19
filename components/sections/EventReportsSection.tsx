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
    title: 'Thrust – Annual Water Rocket Event',
    year: '2025',
    icon: FaRocket,
    image: '/images/events/Thrust.jpg',
    description:
      'Our annual flagship water rocket event specially curated for first-year students. Teams design, build, and launch water-propelled rockets competing for maximum altitude and accuracy.',
    color: '#00d4ff',
  },
  {
    title: 'Udaan – RC Glider Competition',
    year: '2025',
    icon: FaTrophy,
    image: '/images/events/udaan.jpg',
    description:
      'A club-organized RC glider competition focused on fundamentals of aerodynamics and flight. Participants design, build, and test fly their gliders for glide time and control precision.',
    color: '#0ea5e9',
  },
];

export default function EventReportsSection() {
  return (
    <Box id="events" py={{ base: 12, md: 16, lg: 20 }} bg="transparent" w="100%" maxW="100%" overflow="hidden">
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
