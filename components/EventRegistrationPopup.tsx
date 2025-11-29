'use client';

import { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  Icon,
  useDisclosure,
  Box,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaTrophy, FaRocket } from 'react-icons/fa';

const MotionBox = motion(Box);

export default function EventRegistrationPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasShown, setHasShown] = useState(false);

  // Google Form URL - you'll replace this with your actual form link
  const REGISTRATION_FORM_URL = 'https://forms.gle/gGYaYJnSmMh5zcxp8';

  useEffect(() => {
    // Show popup after 2 seconds on first visit
    const timer = setTimeout(() => {
      const alreadyShown = sessionStorage.getItem('eventPopupShown');
      if (!alreadyShown && !hasShown) {
        onOpen();
        setHasShown(true);
        sessionStorage.setItem('eventPopupShown', 'true');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onOpen, hasShown]);

  const handleRegister = () => {
    window.open(REGISTRATION_FORM_URL, '_blank');
    onClose();
  };

  return (
    <>
      {/* Floating Register Button - Always visible */}
      <MotionBox
        position="fixed"
        bottom={{ base: 4, md: 8 }}
        right={{ base: 4, md: 8 }}
        zIndex={999}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      >
        <Button
          onClick={onOpen}
          size={{ base: 'md', md: 'lg' }}
          colorScheme="orange"
          bgGradient="linear(to-r, orange.400, red.500)"
          _hover={{
            bgGradient: 'linear(to-r, orange.500, red.600)',
            transform: 'scale(1.05)',
          }}
          boxShadow="0 4px 20px rgba(255, 100, 0, 0.4)"
          leftIcon={<Icon as={FaTrophy} />}
          px={{ base: 4, md: 6 }}
          py={{ base: 5, md: 6 }}
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="bold"
        >
          Register Now
        </Button>
      </MotionBox>

      {/* Registration Modal */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size={{ base: 'sm', md: 'xl' }}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay
          bg="blackAlpha.700"
          backdropFilter="blur(10px)"
        />
        <ModalContent
          bg="linear-gradient(135deg, #1a2142 0%, #0a0e27 100%)"
          borderWidth="2px"
          borderColor="orange.500"
          borderRadius="2xl"
          mx={{ base: 4, md: 0 }}
        >
          <ModalHeader
            pt={{ base: 6, md: 8 }}
            pb={4}
            textAlign="center"
          >
            <VStack spacing={3}>
              <Icon 
                as={FaRocket} 
                boxSize={{ base: 12, md: 16 }} 
                color="orange.400"
              />
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                bgGradient="linear(to-r, orange.400, red.500)"
                bgClip="text"
              >
                Drone Soccer League 2026
              </Heading>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="orange.300"
                fontWeight="bold"
              >
                January 23-25, 2026
              </Text>
            </VStack>
          </ModalHeader>
          <ModalCloseButton 
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
          
          <ModalBody px={{ base: 6, md: 8 }} pb={6}>
            <VStack spacing={4} align="stretch">
              <Text 
                fontSize={{ base: 'sm', md: 'md' }} 
                color="gray.300"
                textAlign="center"
              >
                5v5 aerial chaos! Build custom micro drones with your team and battle your way to glory!
              </Text>

              <Box
                bg="whiteAlpha.100"
                borderRadius="lg"
                p={4}
                borderWidth="1px"
                borderColor="whiteAlpha.300"
              >
                <VStack spacing={2} align="start">
                  <Text fontSize="sm" color="gray.400">
                    🔥 5-person teams
                  </Text>
                  <Text fontSize="sm" color="gray.400">
                    ⚡ Build your own drones
                  </Text>
                  <Text fontSize="sm" color="gray.400">
                    🏆 Sweet prizes
                  </Text>
                </VStack>
              </Box>

              <Text 
                fontSize="xs" 
                color="gray.500" 
                textAlign="center"
                mt={2}
              >
                Limited spots - Register now!
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter 
            flexDirection="column" 
            gap={3}
            px={{ base: 6, md: 8 }}
            pb={{ base: 6, md: 8 }}
          >
            <Button
              onClick={handleRegister}
              w="100%"
              size={{ base: 'md', md: 'lg' }}
              colorScheme="orange"
              bgGradient="linear(to-r, orange.400, red.500)"
              _hover={{
                bgGradient: 'linear(to-r, orange.500, red.600)',
                transform: 'scale(1.02)',
              }}
              leftIcon={<Icon as={FaTrophy} />}
              boxShadow="0 4px 20px rgba(255, 100, 0, 0.4)"
            >
              Register Your Team Now!
            </Button>
            
            <Button
              onClick={onClose}
              w="100%"
              size={{ base: 'sm', md: 'md' }}
              variant="ghost"
              color="gray.400"
              _hover={{ bg: 'whiteAlpha.100' }}
            >
              Maybe Later
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
