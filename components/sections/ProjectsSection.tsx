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
    image: '/Project1.jpg',
    description: 'The club designed, built and flew a 3D printed RC Plane. The Micro Class UAV made trades between two potentially conflicting requirements: carrying the highest payload fraction possible and pursuing the lowest empty weight possible.',
    tags: ['3D Printing', 'RC Plane', 'Payload Optimization'],
    details: 'Advanced lightweight design with optimized payload capacity. Features include autonomous flight control, real-time telemetry, and modular payload system.',
  },
  {
    id: 2,
    title: 'Autonomous UAV with Hotspot Detection',
    category: 'Completed',
    image: '/Project2.jpg',
    description: 'The Club designed, built and flew an Autonomous unmanned aerial vehicle that met many anticipated requirements and was capable of hotspot detection.',
    tags: ['Autonomous', 'Thermal Imaging', 'AI/ML'],
    details: 'Equipped with thermal cameras and AI-powered detection algorithms. Can autonomously patrol areas and identify heat anomalies in real-time.',
  },
  {
    id: 3,
    title: 'Racing Drone',
    category: 'Completed',
    image: '/Project3.jpg',
    description: 'The club designed, built and flew a high-speed, agile unmanned aerial vehicle designed specifically for competitive racing. Its sleek, aerodynamic frame is typically made from lightweight carbon fiber to maximize speed and maneuverability.',
    tags: ['Racing', 'Carbon Fiber', 'High-Speed'],
    details: 'Top speed of 120+ km/h with sub-3 second 0-100 acceleration. Features FPV camera system and advanced flight controller.',
  },
  {
    id: 4,
    title: 'Tactical UAV',
    category: 'Ongoing',
    image: '/ongoingProject1.jpg',
    description: 'A mid-range tactical UAV designed for surveillance and reconnaissance missions with extended flight time and advanced payload capabilities.',
    tags: ['Surveillance', 'Long Range', 'Advanced Sensors'],
    details: 'Under development: 2-hour flight time, 10km range, HD video transmission, and multi-sensor integration.',
  },
  {
    id: 5,
    title: 'Hybrid VTOL Drone',
    category: 'Ongoing',
    image: '/ongoingProject2.jpg',
    description: 'An innovative hybrid drone combining vertical takeoff and landing capabilities with efficient fixed-wing flight for extended range missions.',
    tags: ['VTOL', 'Hybrid', 'Long Endurance'],
    details: 'Combines quadcopter and fixed-wing capabilities for versatile mission profiles. Target endurance: 3 hours.',
  },
  {
    id: 6,
    title: 'Swarm Robotics',
    category: 'Ongoing',
    image: '/futureProject1.jpg',
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
    <Box id="projects" py={20} bg="transparent" position="relative">
      <Container maxW="7xl">
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
          gap={8}
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

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay bg="rgba(0, 0, 0, 0.9)" backdropFilter="blur(10px)" />
        <ModalContent bg="#1a2142" border="2px solid #00d4ff" boxShadow="0 0 50px rgba(0, 212, 255, 0.5)">
          <ModalCloseButton color="#00d4ff" _hover={{ bg: 'rgba(0, 212, 255, 0.2)' }} />
          <ModalBody p={0}>
            {selectedProject && (
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 } as any}
              >
                <Box position="relative" w="100%" h="400px">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    position="absolute"
                    top={4}
                    right={4}
                  >
                    <Badge
                      colorScheme={selectedProject.category === 'Completed' ? 'green' : 'blue'}
                      fontSize="md"
                      px={4}
                      py={2}
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
                <VStack align="stretch" p={8} spacing={4} bg="#0f1535">
                  <Heading as="h2" size="xl" color="white">
                    {selectedProject.title}
                  </Heading>
                  <Text color="gray.300" fontSize="lg" lineHeight="tall">
                    {selectedProject.description}
                  </Text>
                  <Text color="#00d4ff" fontSize="md" lineHeight="tall">
                    {selectedProject.details}
                  </Text>
                  <HStack spacing={3} flexWrap="wrap" pt={4}>
                    {selectedProject.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        bg="rgba(0, 212, 255, 0.2)"
                        color="#00d4ff"
                        fontSize="md"
                        px={4}
                        py={2}
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
