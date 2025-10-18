'use client';

import { Box } from '@chakra-ui/react';
import InteractiveDotBackground from '@/components/InteractiveDotBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GallerySection from '@/components/sections/GallerySection';
import EventReportsSection from '@/components/sections/EventReportsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <Box position="relative" minH="100vh" w="100%" overflow="hidden">
      <InteractiveDotBackground />
      <Box position="relative" zIndex={1} w="100%">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
        <EventReportsSection />
        <AchievementsSection />
        <TeamSection />
        <ContactSection />
      </Box>
    </Box>
  );
}
