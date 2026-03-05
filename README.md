# Aero Fabrication Club — IIITDM Jabalpur

Official website for the Aero Fabrication Club at IIIT Design & Manufacturing Jabalpur. Built with Next.js, Chakra UI, and Framer Motion. Deployed as a static site (FTP-compatible).

## Tech Stack

- **Framework:** Next.js 15 (static export)
- **UI:** Chakra UI v2 + Framer Motion
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Emotion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                    # Next.js App Router pages
  admin/                # Admin panel (login + editor)
  about/ achievements/ contact/ ...  # Section pages
components/
  sections/             # Homepage section components
  admin/                # AdminPanel component
  ui/                   # shadcn/ui primitives
lib/
  site-content.ts       # Full content schema + defaults
  admin-client.ts       # Client-side auth helpers
public/
  site-content.json     # Editable site content (FTP-deployed)
  admin-config.json     # Password hash (FTP-deployed, gitignored)
  images/               # All site images
theme/                  # Chakra UI custom theme
```

## Content Management

All site content is stored in `public/site-content.json`. The admin panel at `/admin` provides a visual editor.

### First-time admin setup

1. Visit `/admin/login` — the **Admin Setup** screen appears (no config on server yet)
2. Enter a password → click **Generate & Download admin-config.json**
3. Upload `admin-config.json` to your server root via FTP
4. Reload the page → log in with your password

### Editing content

1. Log in at `/admin`
2. Edit sections using the forms, or use the **Full Site JSON Editor** for full control
3. Click **Download site-content.json**
4. Upload the file to your server root via FTP — changes go live immediately

### Changing password

From the admin panel → **Change Password** → enter new password → download and FTP the new `admin-config.json`.

## Deployment (Static FTP)

```bash
npm run build
```

Upload the contents of the `out/` directory to your FTP server root.

Also upload:
- `public/admin-config.json` — password hash (generate via admin setup)
- `public/site-content.json` — site content (starts as `{}`, uses defaults)

> **Note:** `admin-config.json` is gitignored. Never commit it.

## Images

Place images under `public/images/`. Refer to `public/images/IMAGE_GUIDE.md` for naming conventions.

## License

MIT
