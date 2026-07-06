import { Geist, Geist_Mono, Baloo_2, Dancing_Script } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { SITE_URL } from '@/lib/siteConfig';
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const description =
  'Full Stack Developer (MERN) and AI/Agentic Engineer building production-ready web apps and Claude/LLM-powered agents.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ajay Sagar | Full Stack & AI Engineer',
    template: '%s | Ajay Sagar',
  },
  description,
  keywords: [
    'Ajay Sagar',
    'MERN Stack Developer',
    'Full Stack Developer',
    'AI Engineer',
    'Agentic AI',
    'LangGraph',
    'MCP',
    'Claude API',
    'OpenAI API',
    'Gemini AI',
    'React Developer',
    'Node.js Developer',
    'Bareilly',
    'Noida',
  ],
  authors: [{ name: 'Ajay Sagar', url: SITE_URL }],
  creator: 'Ajay Sagar',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Ajay Sagar',
    title: 'Ajay Sagar | Full Stack & AI Engineer',
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ajay Sagar | Full Stack & AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajay Sagar | Full Stack & AI Engineer',
    description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicons/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png' },
      { url: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicons/manifest.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ajay Sagar',
              url: SITE_URL,
              email: 'sajaysagar346@gmail.com',
              jobTitle: 'Full Stack & AI Engineer',
              sameAs: [
                'https://github.com/AjaySagar9',
                'https://linkedin.com/in/engineerajay',
                'https://codefap-1.onrender.com',
              ],
            }),
          }}
        />
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
