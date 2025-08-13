import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PageTransition } from "@/components/layout/PageTransition";
import { Analytics } from "@/components/analytics/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instagram Appointment Setting Mastery | Premium Resource for High-Ticket B2B Coaches",
  description:
    "Master Instagram appointment setting with a complete system: profile optimization, content strategy, DM automation, story selling, lives, analytics, and a 30-day implementation plan.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Instagram Appointment Setting Mastery",
    description:
      "Premium resource hub for high-ticket B2B coaches to scale appointments from Instagram.",
    type: "website",
    url: "https://your-domain.com",
    images: [{ url: "/og-cover.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Appointment Setting Mastery",
    description:
      "Premium resource hub for high-ticket B2B coaches to scale appointments from Instagram.",
    images: ["/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ScrollProgress />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
