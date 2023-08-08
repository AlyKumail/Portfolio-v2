import { Inter, PT_Serif, Rubik } from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const ptserif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ptserif",
});
