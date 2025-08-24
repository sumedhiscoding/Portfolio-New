import React from "react";
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
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/app/components/motion-primitives/dock";

export const data = [
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
    href: "/activity",
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

function AppleStyleDock({ className = "" }) {
  return (
    <div className={className}>
      <Dock className="items-end pb-3 backdrop-blur-xs">
        {data &&
          data?.map((item, idx) => (
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
      <AppleStyleDock className="sticky bottom-0 w-full text-center py-2" />
    </div>
  );
}

export default Layout;
