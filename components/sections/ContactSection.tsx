'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  VStack,
  HStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const MotionBox = motion(Box);

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const bgColor = '#0a0e27';
  const cardBg = '#1a2142';

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['afc@iiitdmj.ac.in'],
      color: 'blue',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+91 70009 47461', '+91 91403 40531'],
      color: 'green',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      details: [
        'AFC Workshop',
        'Above Canteen, Hall-1',
        'IIITDM Jabalpur',
        'Pin: 482005',
      ],
      color: 'red',
    },
  ];

  const socialLinks = [
    { icon: FaInstagram, url: '#', label: 'Instagram', color: 'pink' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn', color: 'blue' },
    { icon: FaYoutube, url: '#', label: 'YouTube', color: 'red' },
  ];

  return (
    <Box id="contact" py={{ base: 12, md: 16, lg: 20 }} bg="transparent" ref={ref} w="100%" maxW="100%" overflow="hidden">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }} w="100%">
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
            bgGradient="linear(to-r, #00d4ff, #0ea5e9)"
            bgClip="text"
          >
            Get In Touch
          </Heading>
          <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} color="gray.300" maxW="3xl" mx="auto" px={{ base: 2, md: 0 }}>
            Have questions or want to collaborate? We'd love to hear from you!
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 8, md: 10, lg: 12 }}
          w="100%"
          maxW="100%"
        >
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            h="100%"
            w="100%"
            maxW="100%"
          >
            <Box
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="xl"
              borderWidth="2px"
              borderColor="#00d4ff"
              overflow="hidden"
              h="100%"
              display="flex"
              flexDirection="column"
              w="100%"
              maxW="100%"
            >
              <Heading 
                as="h3" 
                fontSize="2xl" 
                mb={0} 
                color="white" 
                px={6}
                py={4}
                bgGradient="linear(to-r, rgba(0,212,255,0.1), rgba(14,165,233,0.1))"
              >
                Our Location
              </Heading>
              <Box
                flex="1"
                position="relative"
                minH={{ base: '300px', sm: '350px', md: '450px' }}
                w="100%"
                maxW="100%"
              >
                <Box
                  as="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.926989456789!2d79.91599931495984!3d23.177434584870032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a9006297c6a3%3A0x79a1a4030eeb7795!2sHall-1%2C%20IIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1760711351482!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  position="absolute"
                  top={0}
                  left={0}
                  border="0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="H-1 IIITDM Jabalpur Location"
                  allowFullScreen
                  sx={{
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            w="100%"
            maxW="100%"
          >
            <VStack spacing={6} align="stretch" w="100%" maxW="100%">
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  boxShadow="md"
                  borderWidth="1px"
                  borderColor="gray.200"
                  _dark={{ borderColor: 'gray.700' }}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateX(5px)',
                    borderColor: 'brand.500',
                  }}
                >
                  <HStack spacing={4} align="start">
                    <Box
                      bg={`${info.color}.100`}
                      _dark={{ bg: `${info.color}.900` }}
                      p={3}
                      borderRadius="lg"
                    >
                      <Icon
                        as={info.icon}
                        boxSize={6}
                        color={`${info.color}.500`}
                        transform={info.title === 'Phone' ? 'rotate(90deg)' : undefined}
                        transformOrigin="center"
                        transition="transform 0.2s ease"
                      />
                    </Box>
                    <Box>
                      <Heading as="h4" fontSize="lg" mb={2}>
                        {info.title}
                      </Heading>
                      {info.details.map((detail, idx) => (
                        <Text
                          key={idx}
                          color="gray.300"
                          _dark={{ color: 'gray.400' }}
                        >
                          {detail}
                        </Text>
                      ))}
                    </Box>
                  </HStack>
                </Box>
              ))}

              <Box
                bg={cardBg}
                p={6}
                borderRadius="xl"
                boxShadow="md"
                borderWidth="1px"
                borderColor="gray.200"
                _dark={{ borderColor: 'gray.700' }}
              >
                <Heading as="h4" fontSize="lg" mb={4}>
                  Follow Us
                </Heading>
                <HStack spacing={4}>
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      as="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme={social.color}
                      variant="ghost"
                      size="lg"
                      _hover={{
                        transform: 'translateY(-2px)',
                        bg: `${social.color}.100`,
                      }}
                    >
                      <Icon as={social.icon} boxSize={6} />
                    </Button>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </MotionBox>
        </Grid>
      </Container>
    </Box>
  );
}
