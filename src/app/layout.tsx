import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hifza Khizer — Digital Marketing Student",
  description:
    "Hifza Khizer — Business Data Analytics student (Marketing major) turning curiosity into campaigns. Case studies: VoiceTact, Tohfa Tales PK, and a CNN product classifier.",
  keywords: [
    "Hifza Khizer",
    "digital marketing",
    "social media management",
    "VoiceTact",
    "Tohfa Tales PK",
    "performance marketing",
    "Rawalpindi",
  ],
  openGraph: {
    title: "Hifza Khizer — Digital Marketing Student",
    description: "Turning curiosity into campaigns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-brand-white text-brand-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
