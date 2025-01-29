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
import { Group } from '@mantine/core';
import classes from './NavbarSimpleColored.module.css';
import { UserButton } from '@/components/UserButton/UserButton';

const data = [
  { link: '/admin/dashboard', label: 'Dashboard', icon: IconBellRinging },
  { link: '/analytic', label: 'Analytic', icon: IconReceipt2 },
  { link: '/saas', label: 'SaaS', icon: IconFingerprint },
];

const apps = [
  { link: '/billing', label: 'Billing', icon: IconReceipt2 },
  { link: '/security', label: 'Security', icon: IconFingerprint },
  { link: '/ssh-keys', label: 'SSH Keys', icon: IconKey },
  { link: '/databases', label: 'Databases', icon: IconDatabaseImport },
  { link: '/admin/settings', label: 'Settings', icon: IconSettings },
];

const auth = [
  { link: '/create-account', label: 'Create Account', icon: IconKey },
  { link: '/reset-password', label: 'Reset Password', icon: IconFingerprint },
  { link: '/user-manage', label: 'User Manage', icon: IconDatabaseImport },
];

const documentation = [
  { link: '/admin/documentation', label: 'Documentation', icon: IconFileAnalytics },
];

export function NewSide() {
  const pathname = usePathname(); // ✅ อ่าน URL ปัจจุบัน

  interface LinkItem {
    link: string;
    label: string;
    icon: React.ComponentType<{ className?: string; stroke?: number }>;
  }

  const generateLinks = (links: LinkItem[]) =>
    links.map((item: LinkItem) => {
      const isActive = pathname.startsWith(item.link); // ✅ ตรวจสอบ active

      return (
        <Link
          href={item.link}
          key={item.label}
          className={classes.link}
          data-active={isActive ? "true" : undefined}
        >
          <item.icon className={classes.linkIcon} stroke={1.5} />
          <span>{item.label}</span>
        </Link>
      );
    });

  return (
    <div className={`${classes.container} overflow-y-auto`}>
      <div className={classes.navbarMain}>
        <Group className="sticky z-10 top-0 bg-orange-600" align="center">
          <UserButton />
        </Group>
        <p className="mb-2 text-white">Dashboard</p>
        {generateLinks(data)}
        <p className="mb-2 mt-2 text-white">Apps</p>
        {generateLinks(apps)}
        <p className="mb-2 mt-2 text-white">Authentication</p>
        {generateLinks(auth)}
        <p className="mb-2 mt-2 text-white">Documentation</p>
        {generateLinks(documentation)}
      </div>
    </div>
  );
}
