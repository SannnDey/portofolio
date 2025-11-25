This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SMTP / Contact form

To enable real email delivery for the contact form, create a `.env.local` file at the project root (do not commit it) and provide SMTP credentials. Copy the example file:

```powershell
copy .env.local.example .env.local
```

Fill in the values in `.env.local`:

- `SMTP_HOST` — your SMTP server host (e.g. `smtp.gmail.com`)
- `SMTP_PORT` — port (usually `587` for TLS)
- `SMTP_USER` / `SMTP_PASS` — authentication
- `SMTP_SECURE` — set to `true` if using SSL on port 465
- `FROM_ADDRESS` / `TO_ADDRESS` — email addresses used for sending/receiving

After creating `.env.local`, restart the dev server. The contact form will attempt to send email via `nodemailer` using these variables; if not configured, messages are logged to the server console.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
