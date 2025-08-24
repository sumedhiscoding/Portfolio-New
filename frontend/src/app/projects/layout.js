import { Lato, Open_Sans } from "next/font/google";

import {
  Dock,
  DockItem,
  DockIcon,
  DockLabel,
} from "../components/motion-primitives/dock";
import Link from "next/link";
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from "lucide-react";
import { Merriweather, Lora, Playfair_Display } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Projects",
    icon: (
      <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Blogs",
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/blogs",
  },
  {
    title: "Activity",
    icon: (
      <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Resume",
    icon: (
      <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Contact",
    icon: (
      <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Theme",
    icon: (
      <SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

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

export function Layout({ children }) {
  return <div>{children}</div>;
}

export default Layout;
