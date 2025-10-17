'use client';

import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Icon,
  Heading,
  HStack,
  Button,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';

/**
 * Footer Component
 * Features: Copyright, social links, quick navigation, IITDMJ credit
 */
export default function Footer() {
  const bgColor = useColorModeValue('gray.900', 'gray.900');
  const borderColor = useColorModeValue('gray.700', 'gray.700');

  const socialLinks = [
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
    { icon: FaEnvelope, url: 'mailto:afc@iiitdmj.ac.in', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box 
      bg="#1a2142" 
      color="white" 
      borderTopWidth="2px" 
      borderColor="#00d4ff" 
      position="relative"
      zIndex={10}
      mt={20}
    >
      <Container maxW="container.xl" py={12}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align={{ base: 'start', lg: 'start' }}
          gap={8}
        >
          {/* Club Info */}
          <Stack spacing={4} maxW="400px">
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, #00d4ff, #0ea5e9)"
              bgClip="text"
            >
              AERO FABRICATION CLUB
            </Heading>
            <Text fontSize="sm" color="gray.400">
              Where Innovation Takes Flight. Designing, building, and flying
              innovative unmanned aerial vehicles at IIITDM Jabalpur.
            </Text>
            <HStack spacing={3}>
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  as="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  colorScheme="brand"
                  size="sm"
                  _hover={{
                    bg: 'brand.900',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Icon as={social.icon} boxSize={5} />
                </Button>
              ))}
            </HStack>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={4}>
            <Heading as="h4" fontSize="lg" fontWeight="semibold" color="white" mb={2}>
              Quick Links
            </Heading>
            <Stack spacing={2}>
              {quickLinks.map((link, index) => (
                <Text
                  key={index}
                  as="button"
                  onClick={() => scrollToSection(link.href)}
                  fontSize="sm"
                  cursor="pointer"
                  color="gray.300"
                  _hover={{
                    color: '#00d4ff',
                  }}
                >
                  {link.label}
                </Text>
              ))}
            </Stack>
          </Stack>

          {/* Contact Info */}
          <Stack spacing={4}>
            <Heading as="h4" fontSize="lg" fontWeight="semibold" color="white" mb={2}>
              Contact Us
            </Heading>
            <Stack spacing={2} fontSize="sm" color="gray.300">
              <Text>AFC Workshop</Text>
              <Text>Above Canteen, Hall-1</Text>
              <Text>IIITDM Jabalpur</Text>
              <Text>Pin: 482005</Text>
              <Text>Email: afc@iiitdmj.ac.in</Text>
              <Text>Phone: +91 70009 47461</Text>
            </Stack>
          </Stack>
        </Flex>

        <Divider my={8} borderColor={borderColor} />

        {/* Bottom Section */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color="gray.300" textAlign={{ base: 'center', md: 'left' }}>
            © {new Date().getFullYear()} Aero Fabrication Club. All rights
            reserved.
          </Text>
          <Text fontSize="sm" color="gray.300" textAlign={{ base: 'center', md: 'right' }}>
            PDPM Indian Institute of Information Technology, Design and
            Manufacturing, Jabalpur
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
