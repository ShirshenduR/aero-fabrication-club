'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { DEFAULT_SITE_CONTENT, normalizeSiteContent, type SiteContent } from '@/lib/site-content';
import { hashPassword, setSessionAuth, clearSessionAuth, downloadJson } from '@/lib/admin-client';

export default function AdminPanel() {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(DEFAULT_SITE_CONTENT);
  const [rawJson, setRawJson] = useState(JSON.stringify(DEFAULT_SITE_CONTENT, null, 2));
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/site-content.json', { cache: 'no-store' });
        if (res.ok) {
          const raw = (await res.json()) as Partial<SiteContent>;
          const data = normalizeSiteContent(raw);
          setContent(data);
          setRawJson(JSON.stringify(data, null, 2));
        }
      } catch {
        // use defaults
      }
      setLoading(false);
    };
    void load();
  }, []);

  const updateHero = (key: keyof SiteContent['hero'], value: string) => {
    setContent((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [key]: value,
      },
    }));
  };

  const updateSectionHeadings = (
    section: 'about' | 'projects' | 'gallery' | 'events' | 'achievements' | 'team' | 'alumni' | 'contact',
    key: 'heading' | 'subheading',
    value: string
  ) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const addAlumni = () => {
    setContent((prev) => ({
      ...prev,
      alumni: {
        ...prev.alumni,
        members: [
          ...prev.alumni.members,
          { name: '', role: '', image: '', linkedIn: 'https://www.linkedin.com/' },
        ],
      },
    }));
  };

  const removeAlumni = (index: number) => {
    setContent((prev) => ({
      ...prev,
      alumni: {
        ...prev.alumni,
        members: prev.alumni.members.filter((_, i) => i !== index),
      },
    }));
  };

  const updateAlumni = (
    index: number,
    field: keyof SiteContent['alumni']['members'][number],
    value: string
  ) => {
    setContent((prev) => ({
      ...prev,
      alumni: {
        ...prev.alumni,
        members: prev.alumni.members.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
      },
    }));
  };

  useEffect(() => {
    setRawJson(JSON.stringify(content, null, 2));
  }, [content]);

  const parsedJson = useMemo(() => {
    try {
      return JSON.parse(rawJson) as SiteContent;
    } catch {
      return null;
    }
  }, [rawJson]);

  const saveContent = (payload: SiteContent) => {
    downloadJson('site-content.json', payload);
    setMessage('site-content.json downloaded — upload it to your server via FTP to publish changes.');
  };

  const changePassword = async () => {
    if (newPassword.length < 8) {
      setMessage('New password must be at least 8 characters.');
      return;
    }
    setChangingPassword(true);
    const hash = await hashPassword(newPassword);
    downloadJson('admin-config.json', { hash });
    setNewPassword('');
    setCurrentPassword('');
    setChangingPassword(false);
    setMessage('admin-config.json downloaded — upload it via FTP to update your password, then log in again.');
  };

  const logout = () => {
    clearSessionAuth();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <Box minH="100vh" bg="#0a0e27" color="white" display="flex" alignItems="center" justifyContent="center">
        Loading admin panel...
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="#0a0e27" color="white" py={8}>
      <Container maxW="container.xl">
        <VStack align="stretch" spacing={8}>
          <HStack justify="space-between" align="center">
            <Heading size="lg">Admin Panel</Heading>
            <Button onClick={logout} variant="outline" colorScheme="red">
              Logout
            </Button>
          </HStack>

          <Box p={5} bg="blackAlpha.500" borderRadius="xl" borderWidth="1px" borderColor="whiteAlpha.300">
            <Heading size="md" mb={4}>Hero Section</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
              <Input value={content.hero.titleTop} onChange={(e) => updateHero('titleTop', e.target.value)} placeholder="Title top" />
              <Input value={content.hero.titleMiddle} onChange={(e) => updateHero('titleMiddle', e.target.value)} placeholder="Title middle" />
              <Input value={content.hero.titleBottom} onChange={(e) => updateHero('titleBottom', e.target.value)} placeholder="Title bottom" />
              <Input value={content.hero.tagline} onChange={(e) => updateHero('tagline', e.target.value)} placeholder="Tagline" />
              <Input value={content.hero.primaryButtonLabel} onChange={(e) => updateHero('primaryButtonLabel', e.target.value)} placeholder="Primary button label" />
              <Input value={content.hero.secondaryButtonLabel} onChange={(e) => updateHero('secondaryButtonLabel', e.target.value)} placeholder="Secondary button label" />
            </Grid>
            <Textarea mt={4} value={content.hero.description} onChange={(e) => updateHero('description', e.target.value)} placeholder="Hero description" rows={4} />
          </Box>

          <Box p={5} bg="blackAlpha.500" borderRadius="xl" borderWidth="1px" borderColor="whiteAlpha.300">
            <Heading size="md" mb={4}>Section Headings</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
              <Input value={content.about.heading} onChange={(e) => updateSectionHeadings('about', 'heading', e.target.value)} placeholder="About heading" />
              <Input value={content.about.subheading} onChange={(e) => updateSectionHeadings('about', 'subheading', e.target.value)} placeholder="About subheading" />
              <Input value={content.projects.heading} onChange={(e) => updateSectionHeadings('projects', 'heading', e.target.value)} placeholder="Projects heading" />
              <Input value={content.projects.subheading} onChange={(e) => updateSectionHeadings('projects', 'subheading', e.target.value)} placeholder="Projects subheading" />
              <Input value={content.gallery.heading} onChange={(e) => updateSectionHeadings('gallery', 'heading', e.target.value)} placeholder="Gallery heading" />
              <Input value={content.gallery.subheading} onChange={(e) => updateSectionHeadings('gallery', 'subheading', e.target.value)} placeholder="Gallery subheading" />
              <Input value={content.events.heading} onChange={(e) => updateSectionHeadings('events', 'heading', e.target.value)} placeholder="Events heading" />
              <Input value={content.events.subheading} onChange={(e) => updateSectionHeadings('events', 'subheading', e.target.value)} placeholder="Events subheading" />
              <Input value={content.achievements.heading} onChange={(e) => updateSectionHeadings('achievements', 'heading', e.target.value)} placeholder="Achievements heading" />
              <Input value={content.achievements.subheading} onChange={(e) => updateSectionHeadings('achievements', 'subheading', e.target.value)} placeholder="Achievements subheading" />
              <Input value={content.team.heading} onChange={(e) => updateSectionHeadings('team', 'heading', e.target.value)} placeholder="Team heading" />
              <Input value={content.team.subheading} onChange={(e) => updateSectionHeadings('team', 'subheading', e.target.value)} placeholder="Team subheading" />
              <Input value={content.alumni.heading} onChange={(e) => updateSectionHeadings('alumni', 'heading', e.target.value)} placeholder="Alumni heading" />
              <Input value={content.alumni.subheading} onChange={(e) => updateSectionHeadings('alumni', 'subheading', e.target.value)} placeholder="Alumni subheading" />
              <Input value={content.contact.heading} onChange={(e) => updateSectionHeadings('contact', 'heading', e.target.value)} placeholder="Contact heading" />
              <Input value={content.contact.subheading} onChange={(e) => updateSectionHeadings('contact', 'subheading', e.target.value)} placeholder="Contact subheading" />
            </Grid>
          </Box>

          <Box p={5} bg="blackAlpha.500" borderRadius="xl" borderWidth="1px" borderColor="whiteAlpha.300">
            <HStack justify="space-between" mb={4}>
              <Heading size="md">Alumni Section</Heading>
              <Button onClick={addAlumni} colorScheme="blue">Add Alumni</Button>
            </HStack>

            <VStack align="stretch" spacing={4}>
              {content.alumni.members.map((item, index) => (
                <Box key={`${item.name}-${index}`} p={4} borderWidth="1px" borderColor="whiteAlpha.300" borderRadius="lg">
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={3}>
                    <Input value={item.name} onChange={(e) => updateAlumni(index, 'name', e.target.value)} placeholder="Name" />
                    <Input value={item.role} onChange={(e) => updateAlumni(index, 'role', e.target.value)} placeholder="Role / Batch" />
                    <Input value={item.linkedIn} onChange={(e) => updateAlumni(index, 'linkedIn', e.target.value)} placeholder="LinkedIn URL" />
                    <Input value={item.image} onChange={(e) => updateAlumni(index, 'image', e.target.value)} placeholder="Image path (e.g. /images/team/photo.jpg)" />
                  </Grid>
                  <HStack mt={3}>
                    <Button onClick={() => removeAlumni(index)} colorScheme="red" variant="outline">
                      Remove
                    </Button>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>

          <Box p={5} bg="blackAlpha.500" borderRadius="xl" borderWidth="1px" borderColor="whiteAlpha.300">
            <Heading size="md" mb={3}>Images</Heading>
            <Text fontSize="sm" color="gray.400">
              Upload images to your server via FTP (e.g. to <code>/images/team/photo.jpg</code>), then enter
              the path in the fields above.
            </Text>
          </Box>

          <Box p={5} bg="blackAlpha.500" borderRadius="xl" borderWidth="1px" borderColor="whiteAlpha.300">
            <Heading size="md" mb={3}>Change Password</Heading>
            <Text fontSize="sm" color="gray.400" mb={3}>
              Enter a new password to generate a new <code>admin-config.json</code>. Upload it via FTP to apply.
            </Text>
            <Grid templateColumns={{ base: '1fr', md: '1fr auto' }} gap={3}>
              <Input type="password" placeholder="New password (min 8 chars)" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <Button colorScheme="orange" isLoading={changingPassword} onClick={changePassword}>Download New Config</Button>
            </Grid>
          </Box>

          <Box p={5} bg="blackAlpha.500" borderRadius="xl" borderWidth="1px" borderColor="whiteAlpha.300">
            <Heading size="md" mb={2}>Full Site JSON Editor</Heading>
            <Text fontSize="sm" color="gray.300" mb={3}>
              Edit every section, image, card, and list from one place. This controls the full homepage content.
            </Text>
            <Textarea value={rawJson} onChange={(e) => setRawJson(e.target.value)} rows={24} fontFamily="mono" />
            <HStack mt={3}>
              <Button
                onClick={() => {
                  if (parsedJson) {
                    setContent(parsedJson);
                    setMessage('JSON applied to form.');
                  } else {
                    setMessage('JSON is invalid.');
                  }
                }}
                variant="outline"
              >
                Apply JSON To Form
              </Button>
              <Button
                onClick={() => {
                  if (parsedJson) {
                    void saveContent(parsedJson);
                  } else {
                    setMessage('JSON is invalid. Fix before saving.');
                  }
                }}
                colorScheme="teal"
              >
                Download JSON
              </Button>
            </HStack>
          </Box>

          <Divider borderColor="whiteAlpha.300" />

          <HStack>
            <Button onClick={() => saveContent(content)} colorScheme="blue">
              Download site-content.json
            </Button>
            {message ? <Text color="cyan.200">{message}</Text> : null}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
