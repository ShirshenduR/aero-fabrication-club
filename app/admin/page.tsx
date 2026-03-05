'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@chakra-ui/react';
import AdminPanel from '@/components/admin/AdminPanel';
import { isSessionAuthed } from '@/lib/admin-client';

export default function AdminPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isSessionAuthed()) {
      router.push('/admin/login');
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) {
    return <Box minH="100vh" bg="#0a0e27" />;
  }

  return <AdminPanel />;
}
