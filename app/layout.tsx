import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SINGATHURAI C — Backend & Cloud/DevOps Engineer',
  description:
    'International-standard developer portfolio of Singathurai C. Production backend systems (NestJS, PostgreSQL, Prisma, Google OAuth 2.0), DevSecOps CI/CD (Jenkins, SonarQube, Trivy, AWS EC2), and AWS EC2 Observability Platform (Prometheus, Grafana, Alertmanager).',
  keywords: [
    'Singathurai C',
    'Backend Developer',
    'DevOps Engineer',
    'Cloud Architect',
    'NestJS',
    'PostgreSQL',
    'Prisma ORM',
    'AWS EC2',
    'Docker',
    'Jenkins',
    'SonarQube',
    'Trivy',
    'Prometheus',
    'Grafana'
  ],
  authors: [{ name: 'Singathurai C', url: 'https://github.com/singathurai007' }],
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: 'SINGATHURAI C — Backend & Cloud/DevOps Engineer',
    description:
      'Production backend systems and automated cloud deployments with verified architecture diagrams.',
    url: 'https://singathurai.website',
    siteName: 'Singathurai C Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#07080b] text-[#f4f4f5] antialiased selection:bg-amber-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

