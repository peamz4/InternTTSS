'use client';
import { Anchor, AppShell, Burger, Breadcrumbs, Stack, Flex, Code } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import TTSSlogo from '../../../public/logo/TTSSlogo.svg';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { ThemeButton } from '@/components/ThemeButton/ThemeButton';
import { LanguagePicker } from '@/components/LanguagePicker/LanguagePicker';
import { NewSide } from '@/components/NewSide/NewSide';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();

  const pathname = usePathname();

  const breadcrumbItems = useMemo(() => {
    const pathParts = pathname.split('/').filter(part => part);
    return pathParts.map((part, index) => {
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
      padding={0}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header className='flex justify-between items-center shadow-sm'>
        
        <Flex justify={"space-between"} align={"center"} px={'sm'} className="overflow-hidden w-full h-full">
          <Link href="/">
          <Image src={TTSSlogo} alt="TTSS Logo"  className="xl:w-[150px] sm:h-[50px] h-[30px] w-[130px]" />
          </Link>
          <div className='flex items-center gap-2'> 
            <LanguagePicker />
            <ThemeButton />
          </div>
        </Flex>
        <Code className='text-center w-[74px] xl:w-[65px] text-base xl:mr-4 xl:ml-2 c'>
          v.1.0
        </Code>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="md"
          className='mr-4 ml-4 xl:ml-0'
        />
      </AppShell.Header>

      <AppShell.Navbar p="0" className="shadow-lg z-10">
        <NewSide />
      </AppShell.Navbar>
      <AppShell.Main>
        <div>
          <div className='w-full bg-transparent shadow-md px-4 p-2'>
        <Breadcrumbs >{breadcrumbItems}</Breadcrumbs>
          </div>
          <div className='p-4'>
        <Stack gap={'md'} p={'md'} >
          {children}
        </Stack>
          </div>
        </div>
      </AppShell.Main>
        <AppShell.Footer>
          <div className='flex justify-center items-center h-full p-2'>
            T.T. Software Solution © 2025
          </div>
        </AppShell.Footer>
    </AppShell>
  );
}
