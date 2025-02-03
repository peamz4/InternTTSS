"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconBellRinging,
  IconDatabaseImport,
  IconFileAnalytics,
  IconFingerprint,
  IconKey,
  IconReceipt2,
  IconSettings,
  IconMail,
  IconChevronDown,
} from "@tabler/icons-react";
import { Box, Flex, Group } from "@mantine/core";
import classes from "./NavbarSimpleColored.module.css";
import { UserButton } from "@/components/UserButton/UserButton";

interface LinkItem {
  link: string;
  label: string;
  Icon: React.ComponentType<{ className?: string; stroke?: number }>;
  links?: LinkItem[];
}

const data: LinkItem[] = [
  { link: "/admin/dashboard", label: "Dashboard", Icon: IconBellRinging },
  { link: "/admin/analytic", label: "Analytic", Icon: IconReceipt2 },
  { link: "/admin/saas", label: "SaaS", Icon: IconFingerprint },
];

const apps: LinkItem[] = [
  {
    link: "/admin/email",
    label: "Email",
    Icon: IconMail,
    links: [
      { link: "/admin/email/inbox", label: "Inbox", Icon: IconMail },
      { link: "/admin/email/details", label: "Details", Icon: IconMail },
      { link: "/admin/email/draft", label: "Draft", Icon: IconMail },
    ],
  },
  { link: "/admin/billing", label: "Billing", Icon: IconReceipt2 },
  { link: "/admin/security", label: "Security", Icon: IconFingerprint },
  { link: "/admin/ssh-keys", label: "SSH Keys", Icon: IconKey },
  { link: "/admin/databases", label: "Databases", Icon: IconDatabaseImport },
  { link: "/admin/settings", label: "Settings", Icon: IconSettings },
];

const auth: LinkItem[] = [
  { link: "/admin/create-account", label: "Create Account", Icon: IconKey },
  { link: "/admin/reset-password", label: "Reset Password", Icon: IconFingerprint },
  { link: "/admin/user-manage", label: "User Manage", Icon: IconDatabaseImport },
];

const documentation: LinkItem[] = [
  { link: "/admin/documentation", label: "Documentation", Icon: IconFileAnalytics },
];

export function NewSide() {
  const pathname = usePathname();
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const toggleSubMenu = (label: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const generateLinks = (links: LinkItem[]) =>
    links.map(({ link, label, Icon, links }) => {
      const isActive = pathname.startsWith(link);
      const hasSubmenu = links && links.length > 0;
      const isSubmenuOpen = openSubMenus[label] || false;

      return (
        <Box key={label}>
          <Link
            href={!hasSubmenu ? link : "#"}
            className={classes.link}
            data-active={isActive ? "true" : undefined}
            onClick={(e) => {
              if (hasSubmenu) {
                e.preventDefault();
                toggleSubMenu(label);
              }
            }}
          >
            <Icon className={classes.linkIcon} stroke={1.5} />
            <Box component="span">{label}</Box>
            {hasSubmenu && <IconChevronDown className={classes.chevronIcon} />}
          </Link>
          {hasSubmenu && isSubmenuOpen && (
            <Box className={classes.subMenu}>
              {links.map(({ link, label, Icon }) => (
                <Link
                  href={link}
                  key={label}
                  className={classes.subLink}
                  data-active={pathname === link ? "true" : undefined}
                >
                  <Icon className={classes.subLinkIcon} stroke={1.5} />
                  <Box component="span">{label}</Box>
                </Link>
              ))}
            </Box>
          )}
        </Box>
      );
    });

  return (
    <Box className="overflow-y-auto ">
      <Flex flex={1} direction={"column"}>
        <Group className={classes.header} align="center">
          <UserButton />
        </Group>
        <Flex flex={1} direction={"column"} p={"sm"}>
          <Box className={classes.category}>Dashboard</Box>
          {generateLinks(data)}
          <Box className={classes.category}>Apps</Box>
          {generateLinks(apps)}
          <Box className={classes.category}>Authentication</Box>
          {generateLinks(auth)}
          <Box className={classes.category}>Documentation</Box>
          {generateLinks(documentation)}
          <div className="h-20">
          </div>
        </Flex>
      </Flex>
    </Box>
  );
}
