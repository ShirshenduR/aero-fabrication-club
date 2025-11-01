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
  Collapse,
  Link,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaUsers, FaChartLine, FaDollarSign, FaCalendarAlt, FaHashtag, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

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
      image: '/images/team/fic.jpeg',
      description:
        'Providing guidance and mentorship to the team, bringing years of experience in aerospace engineering and research.',
    },
    {
      name: 'Chetan Anand Jhariya',
      role: 'Coordinator',
      image: '/images/team/coordinator.jpeg',
      description:
        "Leading the team's overall direction and strategy, coordinating between different sub-teams to ensure cohesive project execution.",
    },
    {
      name: 'Shashaank Srivastava',
      role: 'Co-Coordinator',
      image: '/images/team/co-coordinator.jpeg',
      description:
        'Supporting the coordination efforts and providing leadership in specific project areas, ensuring smooth day-to-day operations.',
    },
    {
      name: 'Rohit TM',
      role: 'Co-Coordinator',
      image: '/images/team/co-coordinator1.jpg',
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
        "Handles promotion, outreach, and communication of the club's activities .",
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

  // Sample members data for each division. Replace with real data as needed.
  const membersByDivision: Record<string, Array<{ name: string; image?: string; linkedin?: string }>> = {
    'Technical Team': [
      { name: 'Aman Kumar', image: '/images/team/tech1.jpg', linkedin: 'https://www.linkedin.com/in/aman-kumar' },
      { name: 'Priya Singh', image: '/images/team/tech2.jpg', linkedin: 'https://www.linkedin.com/in/priya-singh' },
    ],
    'Management Team': [
      { name: 'Rahul Verma', image: '/images/team/mgmt1.jpg', linkedin: 'https://www.linkedin.com/in/rahul-verma' },
    ],
    'Finance Team': [
      { name: 'Shirshendu R Tripathi', image: '/images/team/Shirsh.jpeg', linkedin: 'https://www.linkedin.com/in/shirshendur'

       },
       { name: 'Apurva Verma', image: '/images/team/Apurva.jpeg', linkedin: 'https://www.linkedin.com/in/apurva-verma-04aab1318/' }
    ],
    'Events Team': [
      { name: 'Karan Joshi', image: '/images/team/events1.jpg', linkedin: 'https://www.linkedin.com/in/karan-joshi' },
    ],
    'Social Media Team': [
      { name: 'Anjali Rao', image: '/images/team/social1.jpg', linkedin: 'https://www.linkedin.com/in/anjali-rao' },
    ],
  };

  const [openDivision, setOpenDivision] = useState<number | null>(null);

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
    <Box id="team" py={{ base: 12, md: 16, lg: 20 }} bg="transparent" ref={ref} w="100%" maxW="100%" overflow="hidden">
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
            color="white"
          >
            OUR TEAM
          </Heading>
          <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} color="gray.400" maxW="3xl" mx="auto" px={{ base: 2, md: 0 }}>
            Meet the passionate individuals driving innovation and excellence in
            aerospace engineering
          </Text>
        </MotionBox>

        <MotionGrid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={{ base: 6, md: 8 }}
          mb={{ base: 12, md: 16, lg: 20 }}
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
                <Box>
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
                    role="button"
                    cursor="pointer"
                    onClick={() => setOpenDivision(openDivision === index ? null : index)}
                    aria-expanded={openDivision === index}
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
                  <Collapse in={openDivision === index} animateOpacity>
                    <Box mt={4} bg="blackAlpha.300" p={4} borderRadius="md">
                      <Stack spacing={6} align="center">
                        {(membersByDivision[division.name] || []).map((m, mi) => (
                          <VStack key={mi} spacing={2} align="center" w="100%">
                            <Avatar size="xl" src={m.image} name={m.name} mb={2} />
                            <Text color="white" fontWeight="bold" fontSize="lg" textAlign="center">
                              {m.name}
                            </Text>
                            <Link href={m.linkedin} isExternal color="blue.300" aria-label={`LinkedIn profile of ${m.name}`}>
                              <HStack justify="center">
                                <FaLinkedin />
                                <Text fontSize="sm">LinkedIn</Text>
                              </HStack>
                            </Link>
                          </VStack>
                        ))}

                        {!(membersByDivision[division.name] || []).length && (
                          <Text color="gray.400">No members listed yet</Text>
                        )}
                      </Stack>
                    </Box>
                  </Collapse>
                </Box>
              </MotionBox>
            ))}
          </MotionGrid>
        </Box>
      </Container>
    </Box>
  );
}
