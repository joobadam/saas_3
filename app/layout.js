import { Mochiy_Pop_One, Inter } from "next/font/google";
import "./globals.css";
import { Footer4 } from "@/components/Footer4";
import Navbar2 from "@/components/Navbar2";

// Figma Design System betűtípusok
const mochiyPopOne = Mochiy_Pop_One({
  weight: "400", // Mochiy Pop One csak 400 weight-ben érhető el
  subsets: ["latin"],
  variable: "--font-mochiy-pop-one",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Innovative Solution - Elevate Your Experience",
  description: "Discover the perfect blend of functionality and style. Our product is designed to enhance your daily routine effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mochiyPopOne.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar2 />
        <main className="page-transition">
          {children}
        </main>
        <Footer4 />
      </body>
    </html>
  );
}