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
import { DEFAULT_SITE_CONTENT, type AchievementsContent } from '@/lib/site-content';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const iconMap = {
  trophy: FaTrophy,
  medal: FaMedal,
  award: FaAward,
};

export default function AchievementsSection({
  content = DEFAULT_SITE_CONTENT.achievements,
}: {
  content?: AchievementsContent;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const bgColor = '#0a0e27';

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
            {content.heading}
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="3xl" mx="auto">
            {content.subheading}
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={8}
          mb={16}
        >
          {content.items.map((achievement, index) => (
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
                    <Icon as={iconMap[achievement.icon] ?? FaTrophy} boxSize={6} />
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
            {content.journeyHeading}
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

            {content.timeline.map((event, index) => (
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
