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
import { NewSide } from '@/components/NewSide/NewSide';
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
        
        <AppShell
            header={{ height: 50 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header className='flex justify-between items-center shadow-md z-100'>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="md"
                />
                <div className='flex justify-between items-center w-full h-full p-6'>
                    <Image src={TTSSlogo} alt="TTSS Logo" width={180} height={45} className="xl:w-200 sm:h-100 bg-gray-100 dark:bg-slate-500 rounded-md" />

                    <div className='flex items-center gap-2  '>
                        <LanguagePicker />
                        <ThemeButton />
                    </div>
                </div>
            </AppShell.Header>

            <AppShell.Navbar p="md" className="shadow-lg z-10 bg-[var(--mantine-color-primary-5)]">
                <NewSide />
            </AppShell.Navbar>

            <AppShell.Main>
                <Breadcrumbs className=''>{breadcrumbItems}</Breadcrumbs>
                <div className='flex flex-col gap-4 p-6'>
                <h1 className='mb-1'>Dashboard</h1>
                <hr style={{ border: '1px solid #ccc', width: '100%', marginTop: -5, borderColor: '#b81e16' }} />
                <ProgressCard />
                <StatsGrid />
                <StatsGroup />
                </div>

            </AppShell.Main>
        </AppShell>
    );
}

export default Dashboard;