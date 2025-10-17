'use client';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Container,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => {
  const scrollToSection = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    onClick?.();
  };

  return (
    <Button
      as="a"
      href={href}
      variant="ghost"
      color="white"
      onClick={scrollToSection}
      _hover={{
        bg: 'rgba(0, 212, 255, 0.1)',
        color: '#00d4ff',
        transform: 'translateY(-2px)',
      }}
      transition="all 0.2s"
    >
      {children}
    </Button>
  );
};

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Events', href: '#events' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <MotionBox
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={scrolled ? 'rgba(10, 14, 39, 0.95)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      borderBottomWidth={scrolled ? '1px' : '0'}
      borderColor="rgba(0, 212, 255, 0.2)"
      boxShadow={scrolled ? '0 4px 30px rgba(0, 212, 255, 0.1)' : 'none'}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 } as any}
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box
            as="a"
            href="#home"
            cursor="pointer"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
            }}
            _hover={{
              transform: 'scale(1.05)',
            }}
            transition="transform 0.2s"
          >
            <Image
              src="/logo.png"
              alt="Aero Fabrication Club"
              height="50px"
              width="auto"
            />
          </Box>

          <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </HStack>

          <IconButton
            aria-label="Open menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color="white"
            _hover={{ bg: 'rgba(0, 212, 255, 0.1)', color: '#00d4ff' }}
          />
        </Flex>

        {isOpen && (
          <MotionBox
            pb={4}
            display={{ md: 'none' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 } as any}
          >
            <Stack as="nav" spacing={2}>
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={onClose}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </MotionBox>
        )}
      </Container>
    </MotionBox>
  );
}

