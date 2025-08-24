import "@/styles/style.sass";
import { Lato, Open_Sans, Red_Hat_Display } from "next/font/google";
import { Merriweather, Lora, Playfair_Display } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const redhatdisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat",
});

export const metadata = {
  title: "Sumedh Blogs",
  description: "A collection of blogs by Sumedh Gavai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${opensans.className}${redhatdisplay.variable} ${merriweather.variable} ${lora.variable} ${opensans.variable} ${lato.variable}  ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
