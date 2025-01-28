"use client";
import { Anchor, AppShell, Burger, Breadcrumbs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import TTSSlogo from '../../../public/logo/TTSSlogo.svg';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { ThemeButton } from '@/components/ThemeButton/ThemeButton';
import { LanguagePicker } from '@/components/LanguagePicker/LanguagePicker';
import HexagonNavigation from '@/components/HexagonNavigation/HexagonNavigation';
function Dashboard() {
    const [opened, { toggle }] = useDisclosure();
    const breadcrumbItems = [
        { title: 'Admin', href: '/admin' },
        { title: 'Dashboard', href: '/admin/dashboard' },
    ].map((item) => (
        <Anchor href={item.href} key={item.href}>
            {item.title}
        </Anchor>
    ));

    return (
        <AppShell
            header={{ height: 80 }}
            padding="md"
        >
            <AppShell.Header className='flex justify-between items-center shadow-md'>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="md"
                />
                <div className='flex justify-between items-center w-full h-full p-6'>
                    <Image src={TTSSlogo} alt="TTSS Logo" width={180} height={150} className="xl:w-200 sm:h-100" />
                    <div className='flex items-center gap-2'>
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

            <AppShell.Main>
                <div className='flex flex-col gap-4 p-6 items-center'>
                    <h1 className='mb-1'>Admin Menu</h1>
                    <Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
                </div>
                <div className='mt-10'>
                <HexagonNavigation />
                </div>
            </AppShell.Main>
        </AppShell>
    );
}

export default Dashboard;
