import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Penda Home Care LLC | Assisted Living in Maricopa, AZ",
    template: "%s | Penda Home Care · Maricopa, AZ",
  },
  description:
    "Penda Home Care LLC provides personalized assisted living in a warm private home in Maricopa, Arizona—helping seniors live safely, comfortably, and with dignity.",
  openGraph: {
    title: "Penda Home Care LLC | Maricopa, AZ",
    description:
      "Personalized care in Maricopa, Arizona. Safety, comfort, independence, and peace of mind for your loved one.",
    locale: "en_US",
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
      <body className={`${display.variable} ${sans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
