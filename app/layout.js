import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mehmet ŞILAK",
  description: "My portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Footer />
        {children}
      </body>
    </html>
  );
}
