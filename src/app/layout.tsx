import type { Metadata } from "next";
import { Roboto_Serif, Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nolo Sound — Building Icons from Silence to Sound",
  description:
    "A boutique music label for the exceptional. We don't just produce tracks, we craft legacies.",
  openGraph: {
    title: "Nolo Sound — Building Icons from Silence to Sound",
    description:
      "A boutique music label for the exceptional. We don't just produce tracks, we craft legacies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={`${robotoSerif.variable} ${robotoFlex.variable}`}>
      <body>{children}</body>
    </html>
  );
}
