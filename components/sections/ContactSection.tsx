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
import { DEFAULT_SITE_CONTENT, type ContactContent } from '@/lib/site-content';

const MotionBox = motion(Box);

const contactIconMap = {
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
};

const socialIconMap = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
};

export default function ContactSection({
  content = DEFAULT_SITE_CONTENT.contact,
}: {
  content?: ContactContent;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const bgColor = '#0a0e27';
  const cardBg = '#1a2142';

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
            {content.heading}
          </Heading>
          <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} color="gray.300" maxW="3xl" mx="auto" px={{ base: 2, md: 0 }}>
            {content.subheading}
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
                {content.locationTitle}
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
                  src={content.mapEmbedUrl}
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
              {content.contactInfo.map((info, index) => (
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
                        as={contactIconMap[info.icon] ?? FaEnvelope}
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
                  {content.socialLinks.map((social, index) => (
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
                      <Icon as={socialIconMap[social.icon] ?? FaInstagram} boxSize={6} />
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
