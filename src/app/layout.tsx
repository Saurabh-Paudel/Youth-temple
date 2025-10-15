import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationButton from "@/components/DonationButton";
export const metadata: Metadata = {
  title: "Asha Ko Mandir",
  description: "Asha Ko Mandir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-0 md:pt-16 lg:pt-44">{children}</main>
        <Footer />
        <DonationButton />
      </body>
    </html>
  );
}
