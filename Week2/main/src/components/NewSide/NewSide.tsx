"use client"; // บังคับให้เป็น Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // ✅ ใช้ usePathname แทน useRouter
import {
  IconBellRinging,
  IconDatabaseImport,
  IconFileAnalytics,
  IconFingerprint,
  IconKey,
  IconReceipt2,
  IconSettings,
} from '@tabler/icons-react';
import { Box, Flex, Group } from '@mantine/core';
import classes from './NavbarSimpleColored.module.css';
import { UserButton } from '@/components/UserButton/UserButton';

interface LinkItem {
  link: string;
  label: string;
  Icon: React.ComponentType<{ className?: string; stroke?: number }>;
}

const data: LinkItem[] = [
  { link: '/admin/dashboard', label: 'Dashboard', Icon: IconBellRinging },
  { link: '/admin/analytic', label: 'Analytic', Icon: IconReceipt2 },
  { link: '/admin/saas', label: 'SaaS', Icon: IconFingerprint },
];

const apps: LinkItem[] = [
  { link: '/admin/billing', label: 'Billing', Icon: IconReceipt2 },
  { link: '/admin/security', label: 'Security', Icon: IconFingerprint },
  { link: '/admin/ssh-keys', label: 'SSH Keys', Icon: IconKey },
  { link: '/admin/databases', label: 'Databases', Icon: IconDatabaseImport },
  { link: '/admin/settings', label: 'Settings', Icon: IconSettings },
];

const auth: LinkItem[] = [
  { link: '/admin/create-account', label: 'Create Account', Icon: IconKey },
  { link: '/admin/reset-password', label: 'Reset Password', Icon: IconFingerprint },
  { link: '/admin/user-manage', label: 'User Manage', Icon: IconDatabaseImport },
];

const documentation: LinkItem[] = [
  { link: '/admin/documentation', label: 'Documentation', Icon: IconFileAnalytics },
];

export function NewSide() {
  const pathname = usePathname(); // ✅ อ่าน URL ปัจจุบัน
  const generateLinks = (links: LinkItem[]) =>
    links?.map(({ link, label, Icon }) => {
      const isActive = pathname.startsWith(link); // ✅ ตรวจสอบ active

      return (
        <Link
          href={link}
          key={label}
          className={classes.link}
          data-active={isActive ? "true" : undefined}
        >
          <Icon className={classes.linkIcon} stroke={1.5} />
          <Box component="span">{label}</Box>
        </Link>
      );
    });

  return (
    <Box className="overflow-y-auto">
      <Flex flex={1} direction={"column"}>
        <Group className="sticky z-10 top-0" align="center">
          <UserButton />
        </Group>
        <Flex flex={1} direction={"column"} p={"sm"}>
          <Box c={'gray.6'} className="mb-2">Dashboard</Box>
          {generateLinks(data)}
          <Box c={'gray.6'} className="mb-2 mt-2">Apps</Box>
          {generateLinks(apps)}
          <Box c={'gray.6'} className="mb-2 mt-2">Authentication</Box>
          {generateLinks(auth)}
          <Box c={'gray.6'} className="mb-2 mt-2">Documentation</Box>
          {generateLinks(documentation)}
        </Flex>
      </Flex>
    </Box>
  );
}
