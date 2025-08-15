import "@/styles/style.sass";
import { Lato, Open_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Sumedh Blogs",
  description: "A collection of blogs by Sumedh Gavai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} ${opensans.variable} ${lato.variable}`}
      >
        <Header />
        {children} 
        <Footer />
      </body>
    </html>
  );
}
