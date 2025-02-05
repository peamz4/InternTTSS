"use client";
import { Anchor, AppShell, Burger, Breadcrumbs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarNested as Sidebar } from '@/components/Sidebar/NavbarNested';
import Image from 'next/image';
import TTSSlogo from '../../../../public/logo/TTSSlogo.svg';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { ThemeButton } from '@/components/ThemeButton/ThemeButton';
import { LanguagePicker } from '@/components/LanguagePicker/LanguagePicker';
import { StatsGrid } from '../../../libs/StatsGrid/StatsGrid';
import { StatsGroup } from '../../../libs/StatsGroup/StatsGroup';
import { ProgressCard } from '@/components/ProcessCard/ProcessCard';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

function Dashboard() {
  const [opened, { toggle }] = useDisclosure();

  const pathname = usePathname();

  const breadcrumbItems = useMemo(() => {
    const pathParts = pathname.split('/').filter(part => part);
    return pathParts.map((part, index) => {
      // biome-ignore lint/style/useTemplate: <explanation>
      const href = '/' + pathParts.slice(0, index + 1).join('/');
      return (
        <Anchor href={href} key={href}>
          {part}
        </Anchor>
      );
    });
  }, [pathname]);


  return (
    <>
      <h1 className='mb-1'>Dashboard</h1>
      {/* <hr style={{ border: '1px solid #ccc', width: '100%', marginTop: -5, borderColor: '#b81e16' }} /> */}
      <ProgressCard />
      <StatsGrid />
      <StatsGroup />
    </>
    
  );
}

export default Dashboard;