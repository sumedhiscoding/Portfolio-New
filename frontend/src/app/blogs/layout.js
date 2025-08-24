import { Lato, Open_Sans } from "next/font/google";

import {
  Dock,
  DockItem,
  DockIcon,
  DockLabel,
} from "../components/motion-primitives/dock";
import Link from "next/link";
import { TransitionLayout } from "../components/motion-primitives/transition-layout";
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from "lucide-react";
import Footer from "../components/Footer";
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
    href: "/projects",
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

function AppleStyleDock({ className = "" }) {
  return (
    <div className={className}>
      <Dock className="items-end pb-3 backdrop-blur-xs">
        {data &&
          data.map((item, idx) => (
            <Link href={item.href} key={idx}>
              <DockItem
                key={idx}
                className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 hover:cursor-pointer"
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ))}
      </Dock>
    </div>
  );
}

export function Layout({ children }) {
  return (
    <div>
      {children}
      <AppleStyleDock className="fixed bottom-2 py-2  left-0 w-full z-50 " />
    </div>
  );
}

export default Layout;
