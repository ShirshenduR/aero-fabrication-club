'use client';

import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import InteractiveDotBackground from '@/components/InteractiveDotBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GallerySection from '@/components/sections/GallerySection';
import EventReportsSection from '@/components/sections/EventReportsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import TeamSection from '@/components/sections/TeamSection';
import AlumniSection from '@/components/sections/AlumniSection';
import ContactSection from '@/components/sections/ContactSection';
import { DEFAULT_SITE_CONTENT, normalizeSiteContent, type SiteContent } from '@/lib/site-content';

export default function Home() {
  const [content, setContent] = useState<SiteContent>(DEFAULT_SITE_CONTENT);

  useEffect(() => {
    const loadContent = async () => {
      const response = await fetch('/site-content.json', { cache: 'no-store' });
      if (!response.ok) {
        return;
      }

      const raw = (await response.json()) as Partial<SiteContent>;
      const data = normalizeSiteContent(raw);
      setContent(data);
    };

    void loadContent();
  }, []);

  return (
    <Box position="relative" minH="100vh" w="100%">
      <InteractiveDotBackground />
      <Box position="relative" zIndex={1} w="100%">
        <HeroSection content={content.hero} />
        <AboutSection content={content.about} />
        <ProjectsSection content={content.projects} />
        <GallerySection content={content.gallery} />
        <EventReportsSection content={content.events} />
        <AchievementsSection content={content.achievements} />
        <TeamSection content={content.team} />
        <AlumniSection content={content.alumni} />
        <ContactSection content={content.contact} />
      </Box>
    </Box>
  );
}
