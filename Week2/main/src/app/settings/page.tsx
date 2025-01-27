"use client";
import { Anchor, AppShell, Burger, Breadcrumbs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarNested as Sidebar } from '@/components/Sidebar/NavbarNested';
import Image from 'next/image';
import TTSSlogo from '../../../public/logo/TTSSlogo.svg';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { ThemeButton } from '@/components/ThemeButton/ThemeButton';
import { LanguagePicker } from '@/components/LanguagePicker/LanguagePicker';
import { StatsGrid } from '../../libs/StatsGrid/StatsGrid';
import { StatsGroup } from '../../libs/StatsGroup/StatsGroup';
import { ProgressCard } from '@/components/ProcessCard/ProcessCard';
import  chart  from '@/components/OverviewChart/Chart';

function Settings() {
    const [opened, { toggle }] = useDisclosure();
    const breadcrumbItems = [
        { title: 'Home', href: '/' },
        { title: 'Settings', href: '/settings' },
      ].map((item) => (
        <Anchor href={item.href} key={item.href} >
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
            <AppShell.Header className='flex justify-between items-center shadow-md'>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <div className='flex justify-between items-center w-full h-full p-6'>
                    <Image src={TTSSlogo} alt="TTSS Logo" width={180} height={150} className="xl:w-200 sm:h-100" />

                    <div className='flex items-center gap-2  '>
                        <TextInput
                            placeholder="Search..."
                            rightSection={<IconSearch size={16} />}
                            radius="lg"
                            size="sm"
                            className="sm:size-md hidden xl:block"
                        />
                        <LanguagePicker />
                        <ThemeButton />
                    </div>
                </div>
            </AppShell.Header>

            <AppShell.Navbar p="md" className="shadow-md">
                <Sidebar />
            </AppShell.Navbar>

            <AppShell.Main>
                <div className='flex flex-col gap-4 p-6'>
                <h1 className='mb-1'>Settings</h1>
                <Breadcrumbs className=''>{breadcrumbItems}</Breadcrumbs>
                <hr style={{ border: '1px solid #ccc', width: '100%', marginTop: -5, borderColor: '#b81e16' }} />
                <chart /> 
                <ProgressCard />
                <StatsGrid />
                <StatsGroup />
                </div>

            </AppShell.Main>
        </AppShell>
    );
}

export default Settings;