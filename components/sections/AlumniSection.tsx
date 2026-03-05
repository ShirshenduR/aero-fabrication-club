'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  VStack,
  Avatar,
  HStack,
  Icon,
  Link,
  Button,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { DEFAULT_SITE_CONTENT, type AlumniContent } from '@/lib/site-content';

const MotionBox = motion(Box);

export default function AlumniSection({
  content = DEFAULT_SITE_CONTENT.alumni,
}: {
  content?: AlumniContent;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box id="alumni" py={{ base: 12, md: 16, lg: 20 }} bg="transparent" ref={ref} w="100%" maxW="100%" overflow="hidden">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={{ base: 8, md: 12 }}
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
          <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} color="gray.300" maxW="3xl" mx="auto">
            {content.subheading}
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={{ base: 5, md: 7 }}
        >
          {content.members.map((alumni, index) => (
            <MotionBox
              key={alumni.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack
                spacing={4}
                p={{ base: 5, md: 6 }}
                bg="blackAlpha.500"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
                borderRadius="2xl"
                align="stretch"
                h="100%"
                _hover={{
                  borderColor: '#00d4ff',
                  transform: 'translateY(-4px)',
                }}
                transition="all 0.25s ease"
              >
                <HStack spacing={4}>
                  <Avatar src={alumni.image} name={alumni.name} size="lg" borderWidth="2px" borderColor="#00d4ff" />
                  <VStack spacing={1} align="start" minW={0}>
                    <Text color="white" fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} noOfLines={2}>
                      {alumni.name}
                    </Text>
                    <Text color="#7dd3fc" fontSize={{ base: 'sm', md: 'md' }}>
                      {alumni.role}
                    </Text>
                  </VStack>
                </HStack>

                <Link href={alumni.linkedIn} isExternal _hover={{ textDecoration: 'none' }}>
                  <Button
                    w="full"
                    leftIcon={<Icon as={FaLinkedin} />}
                    bg="#0a66c2"
                    color="white"
                    _hover={{ bg: '#084c93' }}
                  >
                    View LinkedIn
                  </Button>
                </Link>
              </VStack>
            </MotionBox>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
