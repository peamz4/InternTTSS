'use client';
import { Anchor, AppShell, Burger, Breadcrumbs, Stack, Flex } from '@mantine/core';
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
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="md"
        />
        <Flex justify={"space-between"} align={"center"} px={'sm'} className="overflow-hidden w-full h-full">
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
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="0" className="shadow-lg z-10">
        <NewSide />
      </AppShell.Navbar>
      <AppShell.Main>
        <div>
          <div className='w-full bg-[var(--mantine-color-primary-1)] dark:bg-[var(--mantine-color-primary)]   p-2'>
        <Breadcrumbs >{breadcrumbItems}</Breadcrumbs>
          </div>
          <div className='p-4'>
        <Stack gap={'md'} p={'md'} >
          {children}
        </Stack>
          </div>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
