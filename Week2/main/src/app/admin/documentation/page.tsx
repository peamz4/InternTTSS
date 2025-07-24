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
import { NewSide } from '@/components/NewSide/NewSide';

function Dashboard() {
    const [opened, { toggle }] = useDisclosure();
    const breadcrumbItems = [
        { title: 'Admin', href: '/' },
        { title: 'Documentation', href: '/admin/docs' },
    ].map((item) => (
        <Anchor href={item.href} key={item.href} >
            {item.title}
        </Anchor>
    ));


    return (

        // <AppShell
        //     header={{ height: 50 }}
        //     navbar={{
        //         width: 300,
        //         breakpoint: 'sm',
        //         collapsed: { mobile: !opened },
        //     }}
        //     padding="md"
        // >
        //     <AppShell.Header className='flex justify-between items-center shadow-md z-100'>
        //         <Burger
        //             opened={opened}
        //             onClick={toggle}
        //             hiddenFrom="sm"
        //             size="md"
        //         />
        //         <div className='flex justify-between items-center w-full h-full p-6'>
        //             <Image src={TTSSlogo} alt="TTSS Logo" width={180} height={45} className="xl:w-200 sm:h-100 bg-gray-100 dark:bg-slate-500 rounded-md" />

        //             <div className='flex items-center gap-2  '>
        //                 <LanguagePicker />
        //                 <ThemeButton />
        //             </div>
        //         </div>
        //     </AppShell.Header>

        //     <AppShell.Navbar p="md" className="shadow-lg z-10 bg-[var(--mantine-color-primary-5)]">
        //         <NewSide />
        //     </AppShell.Navbar>

        //     <AppShell.Main>
        <div>
            <div className='flex flex-col gap-4'>
                <h1 className='mb-1'>Documentation</h1>
                <hr style={{ border: '1px solid #ccc', width: '100%', marginTop: -5, borderColor: '#b81e16' }} />
                <h2 className='mt-1 mb-1'>Lorem ipsum dolor</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi tempore esse dolor magni at laborum ratione,
                    harum sint nulla atque delectus praesentium dolorum impedit nemo et labore est minima amet libero vitae voluptate totam
                    recusandae dignissimos. Culpa magnam tenetur fugit deserunt officiis incidunt corrupti deleniti! Voluptates odio unde
                    placeat accusamus nihil reprehenderit sapiente. Natus culpa incidunt ratione sit facere cum, cumque explicabo repellendus
                    voluptatibus eveniet libero modi? Laboriosam molestias quis necessitatibus quia nemo vitae cupiditate, assumenda corporis
                    ipsa sequi dignissimos obcaecati reprehenderit a exercitationem, maiores et fugit magnam! Quaerat, deserunt reprehenderit?
                    In ipsam aspernatur eligendi necessitatibus temporibus eum quibusdam.</p>
                <h2 className='mt-1 mb-1'>Lorem ipsum dolor</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi tempore esse dolor magni at laborum ratione,
                    harum sint nulla atque delectus praesentium dolorum impedit nemo et labore est minima amet libero vitae voluptate totam
                    recusandae dignissimos. Culpa magnam tenetur fugit deserunt officiis incidunt corrupti deleniti! Voluptates odio unde
                    placeat accusamus nihil reprehenderit sapiente. Natus culpa incidunt ratione sit facere cum, cumque explicabo repellendus
                    voluptatibus eveniet libero modi? Laboriosam molestias quis necessitatibus quia nemo vitae cupiditate, assumenda corporis
                    ipsa sequi dignissimos obcaecati reprehenderit a exercitationem, maiores et fugit magnam! Quaerat, deserunt reprehenderit?
                    In ipsam aspernatur eligendi necessitatibus temporibus eum quibusdam.</p>
                <h2 className='mt-1 mb-1'>Lorem ipsum dolor</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi tempore esse dolor magni at laborum ratione,
                    harum sint nulla atque delectus praesentium dolorum impedit nemo et labore est minima amet libero vitae voluptate totam
                    recusandae dignissimos. Culpa magnam tenetur fugit deserunt officiis incidunt corrupti deleniti! Voluptates odio unde
                    placeat accusamus nihil reprehenderit sapiente. Natus culpa incidunt ratione sit facere cum, cumque explicabo repellendus
                    voluptatibus eveniet libero modi? Laboriosam molestias quis necessitatibus quia nemo vitae cupiditate, assumenda corporis
                    ipsa sequi dignissimos obcaecati reprehenderit a exercitationem, maiores et fugit magnam! Quaerat, deserunt reprehenderit?
                    In ipsam aspernatur eligendi necessitatibus temporibus eum quibusdam.</p>
                <h2 className='mt-1 mb-1'>Lorem ipsum dolor</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi tempore esse dolor magni at laborum ratione,
                    harum sint nulla atque delectus praesentium dolorum impedit nemo et labore est minima amet libero vitae voluptate totam
                    recusandae dignissimos. Culpa magnam tenetur fugit deserunt officiis incidunt corrupti deleniti! Voluptates odio unde
                    placeat accusamus nihil reprehenderit sapiente. Natus culpa incidunt ratione sit facere cum, cumque explicabo repellendus
                    voluptatibus eveniet libero modi? Laboriosam molestias quis necessitatibus quia nemo vitae cupiditate, assumenda corporis
                    ipsa sequi dignissimos obcaecati reprehenderit a exercitationem, maiores et fugit magnam! Quaerat, deserunt reprehenderit?
                    In ipsam aspernatur eligendi necessitatibus temporibus eum quibusdam.</p>
                <h2 className='mt-1 mb-1'>Lorem ipsum dolor</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi tempore esse dolor magni at laborum ratione,
                    harum sint nulla atque delectus praesentium dolorum impedit nemo et labore est minima amet libero vitae voluptate totam
                    recusandae dignissimos. Culpa magnam tenetur fugit deserunt officiis incidunt corrupti deleniti! Voluptates odio unde
                    placeat accusamus nihil reprehenderit sapiente. Natus culpa incidunt ratione sit facere cum, cumque explicabo repellendus
                    voluptatibus eveniet libero modi? Laboriosam molestias quis necessitatibus quia nemo vitae cupiditate, assumenda corporis
                    ipsa sequi dignissimos obcaecati reprehenderit a exercitationem, maiores et fugit magnam! Quaerat, deserunt reprehenderit?
                    In ipsam aspernatur eligendi necessitatibus temporibus eum quibusdam.</p>
            </div>
        </div>

    );
}

export default Dashboard;