'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Container, Heading, Input, Text, VStack, Code } from '@chakra-ui/react';
import { hashPassword, fetchAdminHash, setSessionAuth, downloadJson } from '@/lib/admin-client';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // undefined = still loading, null = not configured, string = hash from server
  const [serverHash, setServerHash] = useState<string | null | undefined>(undefined);

  // For the one-time setup helper
  const [setupPassword, setSetupPassword] = useState('');
  const [setupStatus, setSetupStatus] = useState('');

  useEffect(() => {
    fetchAdminHash().then(setServerHash);
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!serverHash) return;
    setLoading(true);
    setError('');
    const hash = await hashPassword(password);
    if (hash === serverHash) {
      setSessionAuth();
      router.push('/admin');
    } else {
      setError('Incorrect password.');
      setLoading(false);
    }
  };

  const generateConfig = async () => {
    if (setupPassword.length < 8) {
      setSetupStatus('Password must be at least 8 characters.');
      return;
    }
    const hash = await hashPassword(setupPassword);
    downloadJson('admin-config.json', { hash });
    setSetupStatus('Downloaded! Upload admin-config.json to your FTP server root, then reload this page.');
  };

  if (serverHash === undefined) {
    return <Box minH="100vh" bg="#0a0e27" />;
  }

  if (serverHash === null) {
    return (
      <Box minH="100vh" bg="#0a0e27" display="flex" alignItems="center" py={12}>
        <Container maxW="lg">
          <Box bg="blackAlpha.500" borderWidth="1px" borderColor="whiteAlpha.300" borderRadius="2xl" p={8}>
            <VStack spacing={5} align="stretch">
              <Heading textAlign="center" color="white" size="lg">Admin Setup</Heading>
              <Text color="gray.300" fontSize="sm">
                No <Code colorScheme="yellow">admin-config.json</Code> found on the server.
                Generate one below, then <strong style={{ color: 'white' }}>upload it via FTP
                to your server root</strong> (same folder as <Code colorScheme="yellow">site-content.json</Code>).
                Reload this page after uploading. Nobody can sign in without this file on the server.
              </Text>
              <Input
                type="password"
                placeholder="Choose admin password (min 8 chars)"
                value={setupPassword}
                onChange={(e) => setSetupPassword(e.target.value)}
                bg="whiteAlpha.100"
                borderColor="whiteAlpha.300"
                color="white"
              />
              <Button colorScheme="blue" onClick={generateConfig}>
                Generate &amp; Download admin-config.json
              </Button>
              {setupStatus && (
                <Text color={setupStatus.startsWith('Downloaded') ? 'green.300' : 'red.300'} fontSize="sm">
                  {setupStatus}
                </Text>
              )}
            </VStack>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="#0a0e27" display="flex" alignItems="center" py={12}>
      <Container maxW="md">
        <Box bg="blackAlpha.500" borderWidth="1px" borderColor="whiteAlpha.300" borderRadius="2xl" p={8}>
          <VStack as="form" onSubmit={onSubmit} spacing={5} align="stretch">
            <Heading textAlign="center" color="white" size="lg">Admin Login</Heading>
            <Input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="whiteAlpha.100"
              borderColor="whiteAlpha.300"
              color="white"
            />
            {error ? <Text color="red.300">{error}</Text> : null}
            <Button type="submit" isLoading={loading} colorScheme="blue">Login</Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
