import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_TRACKING_ID = "G-FBGBNKX5P9";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

const siteUrl = "https://www.alfredchoi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alfred Choi — Principal Frontend Engineer",
    template: "%s | Alfred Choi",
  },
  description:
    "Technical Lead specializing in frontend — building web applications that are fast, scalable, and solve real problems.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Alfred Choi",
    title: "Alfred Choi — Principal Frontend Engineer",
    description:
      "Technical Lead specializing in frontend — building web applications that are fast, scalable, and solve real problems.",
  },
  twitter: {
    card: "summary",
    title: "Alfred Choi — Principal Frontend Engineer",
    description:
      "Technical Lead specializing in frontend — building web applications that are fast, scalable, and solve real problems.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body>{children}</body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </html>
  );
}
