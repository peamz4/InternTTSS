"use client";
import { AppShell, Burger, Breadcrumbs, Anchor, TextInput, Select, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSearch, IconSun, IconMoon } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import styles from '@/styles/demo.module.css';
import { NavbarNested } from '@/libs/Navbar/NavbarNested';
import { StatsGrid } from '@/libs/StatsGrid/StatsGrid';
import { StatsGroup } from '@/libs/StatsGroup/StatsGroup';
import { useState } from 'react';

function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  const [username, setUsername] = useState('Pirawish Pathumngern');
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // Sample data for the chart
  const chartData = [100, 200, 150, 80, 120];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Dashboard', href: '/dashboard' },
  ].map((item) => (
    <Anchor href={item.href} key={item.href} className={styles.breadcrumbLink}>
      {item.title}
    </Anchor>
  ));

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={styles.header}>
        <div className={styles.headerContent}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className={styles.logoContainer}>
            <Image src="/logo/removebg.png" alt="TTSS logo" width={70} height={70} />
            <h1 className={styles.companyName}>T.T. Software Solution</h1>
          </div>
          
          <div className={styles.navControls}>
            {/* Search Bar */}
            <TextInput 
              placeholder="Search..." 
              rightSection={<IconSearch size={16} />} 
              className={styles.searchBar}
            />

            {/* Language Selector */}
            <Select
              data={['English', 'Thai']}
              defaultValue="English"
              className={styles.languageSelect}
            />

            {/* Dark/Light mode toggle */}
            <ActionIcon 
              variant="outline" 
              onClick={toggleColorScheme} 
              size="lg" 
              className={styles.themeToggle}
            >
              {isDarkMode ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>
          </div>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md" className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <NavbarNested />
        </div>
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: '#fde4d7' }}>
        <div className={styles.mainContent} style={{ display: "flex", flexDirection: "column", gap: '20px' }}>
          <h1>Dashboard</h1>
          <Breadcrumbs separator=">" mt="md">{breadcrumbItems}</Breadcrumbs>
          <hr style={{ border: '1px solid #ccc', width: '100%', marginTop: -5, borderColor: '#b81e16' }} />
          <StatsGrid />
          <StatsGroup />
           {/* Simple Bar Chart */}
           
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

export default Dashboard;
