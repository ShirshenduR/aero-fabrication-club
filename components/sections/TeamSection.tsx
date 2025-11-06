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
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaChartLine, FaDollarSign, FaCalendarAlt, FaHashtag, FaChevronDown } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedDivision, setSelectedDivision] = useState<number | null>(null);

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
      name: 'Events Team',
      icon: FaCalendarAlt,
      description:
        'Oversees club operations, membership, and coordination between different teams.',
      color: 'orange',
      members: [
        { name: 'Taraka Raghu Ram', role: 'Events Team', image: '/images/team/Ram.jpg' },
        { name: 'Aakash Dhyani', role: 'Events Team', image: '/images/team/Aakash.jpg' },
        { name: 'Ansh Yelore', role: 'Events Team', image: '/images/team/Ansh.jpg' },
        { name: 'Dyumna Negi', role: 'Events Team', image: '/images/team/Dyumna.jpg' },
      ],
    },
    {
      name: 'Finance Team',
      icon: FaDollarSign,
      description:
        'Manages budgeting, fundraising, and financial planning for all club projects and activities.',
      color: 'green',
      members: [
        { name: 'Shirshendu R Tripathi', role: 'Finance Member', image: '/images/team/Shirshendu.jpg' },
        { name: 'Apurva Verma', role: 'Finance Member', image: '/images/team/Apurva.jpg' },
        { name: 'Shrreyansh Anil Singh', role: 'Finance Member', image: '/images/team/Shrreyansh.jpg' },
        { name: 'Rudra Chaudhary', role: 'Finance Member', image: '/images/team/Rudra.jpg' },
      ],
    },
    {
      name: 'Social Media Team',
      icon: FaHashtag,
      description:
        'Handles promotion, outreach, and communication of the club\'s activities and achievements.',
      color: 'pink',
      members: [
        { name: 'Rajyavardhan Singh Rathore', role: 'Social Media Team', image: '/images/team/Rajyavardhan.jpg' },
        { name: 'Vivek Malav', role: 'Social Media Team', image: '/images/team/Vivek.jpg' },
        { name: 'Bhawani', role: 'Social Media Team', image: '/images/team/Bhawani.jpg' },
        { name: 'Yash Dubey', role: 'Social Media Team', image: '/images/team/Yash.jpg' },
      ],
    },
    {
      name: 'Resources Team',
      icon: FaChartLine,
      description:
        'Manages all club components, resources and inventory to support club operations.',
      color: 'purple',
      members: [
        { name: 'Laxman', role: 'Resources Team', image: '/images/team/Laxman.jpg' },
        { name: 'Sharad Gupta', role: 'Resource Team', image: '/images/team/Sharad.jpg' },
        { name: 'Harsh Giri', role: 'Resource Team', image: '/images/team/Harsh.jpg' },
        { name: 'Abhay', role: 'Resource Team', image: '/images/team/Abhay.jpg' },
      ],
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

  const DivisionCard = ({ division, index, isSelected, onClick }: { 
    division: any; 
    index: number;
    isSelected: boolean;
    onClick: () => void;
  }) => {
    return (
      <Box w="100%" h="100%">
        <VStack
          bg="blackAlpha.400"
          borderRadius="xl"
          p={{ base: 5, md: 6 }}
          spacing={4}
          borderWidth="1px"
          borderColor={isSelected ? `${division.color}.500` : 'whiteAlpha.300'}
          transition="all 0.3s ease"
          cursor="pointer"
          onClick={onClick}
          h="100%"
          minH={{ base: '280px', md: '300px' }}
          justify="space-between"
          _hover={{
            transform: 'translateY(-5px)',
            bg: 'blackAlpha.600',
            borderColor: `${division.color}.500`,
          }}
        >
          <VStack spacing={4} flex={1} justify="center">
            <Flex
              w={{ base: '56px', md: '60px' }}
              h={{ base: '56px', md: '60px' }}
              bg={`${division.color}.500`}
              borderRadius="full"
              align="center"
              justify="center"
              boxShadow="md"
            >
              <Icon as={division.icon} boxSize={{ base: 5, md: 6 }} color="white" />
            </Flex>

            <Heading 
              as="h4" 
              fontSize={{ base: 'md', md: 'lg' }} 
              color="white" 
              textAlign="center"
            >
              {division.name}
            </Heading>

            <Text
              color="gray.400"
              fontSize={{ base: 'xs', md: 'sm' }}
              textAlign="center"
              noOfLines={3}
            >
              {division.description}
            </Text>
          </VStack>

          <Flex align="center" gap={2} color={`${division.color}.400`} mt={2}>
            <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold">
              {isSelected ? 'Hide' : 'View'} Team Members
            </Text>
            <Box
              as="span"
              display="inline-block"
              transform={isSelected ? 'rotate(180deg)' : 'rotate(0deg)'}
              transition="transform 0.3s ease"
            >
              <Icon as={FaChevronDown} boxSize={{ base: 3, md: 4 }} />
            </Box>
          </Flex>
        </VStack>

        {/* Mobile Team Members Section - Appears below each card on mobile only */}
        <Box display={{ base: 'block', md: 'none' }}>
          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden', marginTop: '16px' }}
              >
                <Box
                  bg="blackAlpha.500"
                  borderRadius="xl"
                  p={4}
                  borderWidth="2px"
                  borderColor={`${division.color}.500`}
                >
                  <VStack spacing={4} align="stretch">
                    <Text 
                      color="gray.400" 
                      fontSize="xs"
                      textAlign="center"
                      fontWeight="semibold"
                    >
                      {division.members.length} Members
                    </Text>

                    <VStack spacing={3} w="100%">
                      {division.members.map((member: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                          style={{ width: '100%' }}
                        >
                          <Flex
                            bg="blackAlpha.700"
                            borderRadius="lg"
                            p={3}
                            align="center"
                            gap={3}
                            borderWidth="1px"
                            borderColor={`${division.color}.500`}
                            transition="all 0.2s ease"
                            minH="72px"
                            w="100%"
                            _hover={{
                              transform: 'translateX(5px)',
                              borderColor: `${division.color}.400`,
                            }}
                          >
                            <Avatar
                              size="md"
                              src={member.image}
                              name={member.name}
                              border="2px solid"
                              borderColor={`${division.color}.500`}
                              flexShrink={0}
                            />
                            <VStack spacing={0} align="start" flex={1} minW={0}>
                              <Text
                                fontSize="sm"
                                fontWeight="bold"
                                color="white"
                                noOfLines={1}
                              >
                                {member.name}
                              </Text>
                              <Text
                                fontSize="xs"
                                color={`${division.color}.300`}
                                noOfLines={1}
                              >
                                {member.role}
                              </Text>
                            </VStack>
                          </Flex>
                        </motion.div>
                      ))}
                    </VStack>
                  </VStack>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    );
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

          <Grid
            templateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={{ base: 4, md: 6 }}
            alignItems="stretch"
          >
            {divisions.map((division, index) => (
              <DivisionCard 
                key={index} 
                division={division} 
                index={index}
                isSelected={selectedDivision === index}
                onClick={() => setSelectedDivision(selectedDivision === index ? null : index)}
              />
            ))}
          </Grid>

          {/* Desktop Team Members Section - Shows below all cards as a grid on desktop only */}
          <Box display={{ base: 'none', md: 'block' }}>
            <AnimatePresence mode="wait">
              {selectedDivision !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 48 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <Box
                    bg="blackAlpha.500"
                    borderRadius="2xl"
                    p={{ base: 6, md: 8 }}
                    borderWidth="2px"
                    borderColor={`${divisions[selectedDivision].color}.500`}
                  >
                    <VStack spacing={6} align="stretch">
                      <Flex 
                        align="center" 
                        justify="space-between"
                        flexDirection={{ base: 'column', md: 'row' }}
                        gap={4}
                      >
                        <Heading
                          as="h3"
                          fontSize={{ base: 'xl', md: '2xl' }}
                          color="white"
                        >
                          {divisions[selectedDivision].name} Members
                        </Heading>
                        <Text 
                          color="gray.400" 
                          fontSize="sm"
                          textAlign={{ base: 'center', md: 'right' }}
                        >
                          {divisions[selectedDivision].members.length} Members
                        </Text>
                      </Flex>

                      <Grid
                        templateColumns={{
                          base: '1fr',
                          sm: 'repeat(2, 1fr)',
                          md: 'repeat(3, 1fr)',
                          lg: 'repeat(4, 1fr)',
                        }}
                        gap={6}
                        alignItems="stretch"
                      >
                        {divisions[selectedDivision].members.map((member: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                            style={{ height: '100%' }}
                          >
                            <VStack
                              bg="blackAlpha.700"
                              borderRadius="xl"
                              p={6}
                              spacing={4}
                              borderWidth="1px"
                              borderColor={`${divisions[selectedDivision].color}.500`}
                              transition="all 0.3s ease"
                              h="100%"
                              minH="220px"
                              justify="center"
                              _hover={{
                                transform: 'translateY(-8px)',
                                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.5)`,
                                borderColor: `${divisions[selectedDivision].color}.400`,
                              }}
                            >
                              <Avatar
                                size="xl"
                                src={member.image}
                                name={member.name}
                                border="3px solid"
                                borderColor={`${divisions[selectedDivision].color}.500`}
                              />
                              <VStack spacing={1} w="100%">
                                <Text
                                  fontSize="lg"
                                  fontWeight="bold"
                                  color="white"
                                  textAlign="center"
                                  noOfLines={2}
                                >
                                  {member.name}
                                </Text>
                                <Text
                                  fontSize="sm"
                                  color={`${divisions[selectedDivision].color}.300`}
                                  textAlign="center"
                                  fontWeight="medium"
                                  noOfLines={1}
                                >
                                  {member.role}
                                </Text>
                              </VStack>
                            </VStack>
                          </motion.div>
                        ))}
                      </Grid>
                    </VStack>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
