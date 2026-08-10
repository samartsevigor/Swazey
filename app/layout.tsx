import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/app/lib/constants";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${COMPANY.name} | ${COMPANY.tagline} | New Brunswick`,
  description:
    "B.P. certified roofing contractor serving Fredericton & Saint John. Asphalt & metal roofing, free estimates, extended warranties. Call (506) 273-1609.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: COMPANY.name,
    description:
      "Professional asphalt & metal roofing in New Brunswick. Free estimates available.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
