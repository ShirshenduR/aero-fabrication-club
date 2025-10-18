'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const MotionBox = motion(Box);

const projects = [
  {
    id: 1,
    title: 'Micro Class UAV',
    category: 'Completed',
    image: '/images/projects/Project1.jpg',
    description: 'The club designed, built and flew a 3D printed RC Plane. The Micro Class UAV made trades between two potentially conflicting requirements: carrying the highest payload fraction possible and pursuing the lowest empty weight possible.',
    tags: ['3D Printing', 'RC Plane', 'Payload Optimization'],
    details: 'Advanced lightweight design with optimized payload capacity. Features include autonomous flight control, real-time telemetry, and modular payload system.',
  },
  {
    id: 2,
    title: 'Autonomous UAV with Hotspot Detection',
    category: 'Completed',
    image: '/images/projects/Project2.jpg',
    description: 'The Club designed, built and flew an Autonomous unmanned aerial vehicle that met many anticipated requirements and was capable of hotspot detection.',
    tags: ['Autonomous', 'Thermal Imaging', 'AI/ML'],
    details: 'Equipped with thermal cameras and AI-powered detection algorithms. Can autonomously patrol areas and identify heat anomalies in real-time.',
  },
  {
    id: 3,
    title: 'Racing Drone',
    category: 'Completed',
    image: '/images/projects/Project3.jpg',
    description: 'The club designed, built and flew a high-speed, agile unmanned aerial vehicle designed specifically for competitive racing. Its sleek, aerodynamic frame is typically made from lightweight carbon fiber to maximize speed and maneuverability.',
    tags: ['Racing', 'Carbon Fiber', 'High-Speed'],
    details: 'Top speed of 120+ km/h with sub-3 second 0-100 acceleration. Features FPV camera system and advanced flight controller.',
  },
  {
    id: 4,
    title: 'Tactical UAV',
    category: 'Ongoing',
    image: '/images/projects/ongoingProject1.jpg',
    description: 'A mid-range tactical UAV designed for surveillance and reconnaissance missions with extended flight time and advanced payload capabilities.',
    tags: ['Surveillance', 'Long Range', 'Advanced Sensors'],
    details: 'Under development: 2-hour flight time, 10km range, HD video transmission, and multi-sensor integration.',
  },
  {
    id: 5,
    title: 'Hybrid VTOL Drone',
    category: 'Ongoing',
    image: '/images/projects/ongoingProject2.jpg',
    description: 'An innovative hybrid drone combining vertical takeoff and landing capabilities with efficient fixed-wing flight for extended range missions.',
    tags: ['VTOL', 'Hybrid', 'Long Endurance'],
    details: 'Combines quadcopter and fixed-wing capabilities for versatile mission profiles. Target endurance: 3 hours.',
  },
  {
    id: 6,
    title: 'Swarm Robotics',
    category: 'Ongoing',
    image: '/images/projects/futureProject1.jpg',
    description: 'Multiple autonomous drones working together in coordinated swarm behavior for complex mission scenarios.',
    tags: ['Swarm AI', 'Multi-Agent', 'Coordination'],
    details: 'Research project exploring decentralized swarm intelligence with 5+ drones operating in synchronized formation.',
  },
];

export default function ProjectsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box id="projects" py={{ base: 12, md: 16, lg: 20 }} bg="transparent" position="relative" w="100%" maxW="100%" overflow="hidden">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 } as any}
          textAlign="center"
          mb={16}
        >
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            bgGradient="linear(to-r, #00d4ff, #0ea5e9)"
            bgClip="text"
            mb={4}
          >
            Our Projects
          </Heading>
          <Text fontSize="xl" color="gray.400" maxW="2xl" mx="auto">
            Pushing the boundaries of unmanned aerial vehicle technology
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={{ base: 6, md: 8 }}
          w="100%"
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <MotionBox
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 } as any}
                bg="#1a2142"
                borderRadius="xl"
                overflow="hidden"
                cursor="pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openProject(project)}
                border="2px solid"
                borderColor={hoveredIndex === index ? '#00d4ff' : 'transparent'}
                boxShadow={hoveredIndex === index ? '0 0 30px rgba(0, 212, 255, 0.5)' : 'none'}
                _hover={{
                  transform: 'translateY(-10px) scale(1.02)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Box position="relative" h="250px">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    position="absolute"
                    top={4}
                    right={4}
                  >
                    <Badge
                      colorScheme={project.category === 'Completed' ? 'green' : 'blue'}
                      fontSize="sm"
                      px={3}
                      py={1}
                      borderRadius="full"
                      bg={project.category === 'Completed' ? 'rgba(0, 255, 0, 0.2)' : 'rgba(0, 212, 255, 0.2)'}
                      color={project.category === 'Completed' ? '#00ff00' : '#00d4ff'}
                      border="1px solid"
                      borderColor={project.category === 'Completed' ? '#00ff00' : '#00d4ff'}
                    >
                      {project.category}
                    </Badge>
                  </Box>
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg={hoveredIndex === index ? 'rgba(0, 212, 255, 0.2)' : 'transparent'}
                    transition="all 0.3s ease"
                  />
                </Box>

                <Box p={6}>
                  <Heading as="h3" size="md" color="white" mb={3}>
                    {project.title}
                  </Heading>
                  <Text color="gray.400" fontSize="sm" mb={4} noOfLines={3}>
                    {project.description}
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        bg="rgba(0, 212, 255, 0.1)"
                        color="#00d4ff"
                        fontSize="xs"
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              </MotionBox>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', sm: 'xl', md: '2xl', lg: '4xl' }} isCentered motionPreset="slideInBottom">
        <ModalOverlay bg="rgba(0, 0, 0, 0.9)" backdropFilter="blur(10px)" />
        <ModalContent 
          bg="#1a2142" 
          border={{ base: 'none', sm: '2px solid #00d4ff' }}
          boxShadow="0 0 50px rgba(0, 212, 255, 0.5)"
          mx={{ base: 0, sm: 4, md: 'auto' }}
          my={{ base: 0, sm: 4, md: 'auto' }}
          maxH={{ base: '100vh', sm: '90vh' }}
          borderRadius={{ base: 0, sm: 'lg', md: 'xl' }}
          overflow="hidden"
        >
          <ModalCloseButton 
            color="#00d4ff" 
            bg="rgba(0, 212, 255, 0.2)"
            border="2px solid #00d4ff"
            borderRadius="full"
            size={{ base: 'md', md: 'lg' }}
            top={{ base: 2, sm: 3, md: 4 }}
            right={{ base: 2, sm: 3, md: 4 }}
            fontSize={{ base: 'lg', md: 'xl' }}
            zIndex={10}
            _hover={{ 
              bg: '#00d4ff',
              color: '#0a0e27',
              transform: 'scale(1.1)',
            }}
            _active={{
              bg: '#0ea5e9',
            }}
          />
          <ModalBody p={0} maxH={{ base: '100vh', sm: '90vh' }} overflowY="auto" css={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(0, 212, 255, 0.1)',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#00d4ff',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#0ea5e9',
            },
          }}>
            {selectedProject && (
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 } as any}
              >
                <Box position="relative" w="100%" h={{ base: '250px', xs: '280px', sm: '320px', md: '380px', lg: '400px' }}>
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    position="absolute"
                    top={{ base: 2, sm: 3, md: 4 }}
                    left={{ base: 2, sm: 3, md: 4 }}
                  >
                    <Badge
                      colorScheme={selectedProject.category === 'Completed' ? 'green' : 'blue'}
                      fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                      px={{ base: 2, sm: 3, md: 4 }}
                      py={{ base: 1, sm: 1.5, md: 2 }}
                      borderRadius="full"
                      bg={selectedProject.category === 'Completed' ? 'rgba(0, 255, 0, 0.3)' : 'rgba(0, 212, 255, 0.3)'}
                      color={selectedProject.category === 'Completed' ? '#00ff00' : '#00d4ff'}
                      border="2px solid"
                      borderColor={selectedProject.category === 'Completed' ? '#00ff00' : '#00d4ff'}
                    >
                      {selectedProject.category}
                    </Badge>
                  </Box>
                </Box>
                <VStack align="stretch" p={{ base: 4, xs: 5, sm: 6, md: 8 }} spacing={{ base: 3, sm: 4 }} bg="#0f1535">
                  <Heading as="h2" size={{ base: 'lg', sm: 'xl' }} color="white" lineHeight="shorter">
                    {selectedProject.title}
                  </Heading>
                  <Text color="gray.300" fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} lineHeight="tall">
                    {selectedProject.description}
                  </Text>
                  <Text color="#00d4ff" fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} lineHeight="tall">
                    {selectedProject.details}
                  </Text>
                  <HStack spacing={{ base: 2, sm: 3 }} flexWrap="wrap" pt={{ base: 2, sm: 4 }}>
                    {selectedProject.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        bg="rgba(0, 212, 255, 0.2)"
                        color="#00d4ff"
                        fontSize={{ base: '2xs', xs: 'xs', sm: 'sm', md: 'md' }}
                        px={{ base: 2, sm: 3, md: 4 }}
                        py={{ base: 1, sm: 1.5, md: 2 }}
                        borderRadius="md"
                        border="1px solid #00d4ff"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </HStack>
                </VStack>
              </MotionBox>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
