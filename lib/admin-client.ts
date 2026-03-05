/** Client-side admin utilities (no server dependencies) */

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function downloadJson(filename: string, data: unknown): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const AUTH_KEY = 'afc_admin_auth';

export function isSessionAuthed(): boolean {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(AUTH_KEY) === 'true';
}

export function setSessionAuth(): void {
  sessionStorage.setItem(AUTH_KEY, 'true');
}

export function clearSessionAuth(): void {
  sessionStorage.removeItem(AUTH_KEY);
}

/** Fetches /admin-config.json from the server. Returns the stored hash or null if not configured. */
export async function fetchAdminHash(): Promise<string | null> {
  try {
    const res = await fetch('/admin-config.json', { cache: 'no-store' });
    if (!res.ok) return null;
    const data = (await res.json()) as { hash?: string };
    return data.hash && data.hash.length === 64 ? data.hash : null;
  } catch {
    return null;
  }
}
