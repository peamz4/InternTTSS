"use client";
import { Anchor, AppShell, Burger, TextInput, Group, Button, Card, Grid, Breadcrumbs, Paper, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarNested as Sidebar } from '@/components/Sidebar/NavbarNested';
import Image from 'next/image';
import TTSSlogo from '../../../../public/logo/TTSSlogo.svg';
import { IconSearch } from '@tabler/icons-react';
import { ThemeButton } from '@/components/ThemeButton/ThemeButton';
import { LanguagePicker } from '@/components/LanguagePicker/LanguagePicker';

function SettingsPage() {
    const [opened, { toggle }] = useDisclosure();
    const breadcrumbItems = [
        { title: 'Admin', href: '/' },
        { title: 'Settings', href: '/admin/settings' },
    ].map((item) => (
        <Anchor href={item.href} key={item.href}>
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
            <AppShell.Header className="flex justify-between items-center shadow-md">
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="md"
                />
                <div className="flex justify-between items-center w-full h-full p-6">
                    <Image src={TTSSlogo} alt="TTSS Logo" width={180} height={150} className="xl:w-200 sm:h-100" />

                    <div className="flex items-center gap-2">
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
                <div className="flex flex-col gap-4 p-6">
                    <h1 className="mb-1">Settings</h1>
                    <Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
                    <hr style={{ border: '1px solid #ccc', width: '100%', marginTop: -5, borderColor: '#b81e16' }} />

                    {/* Account Information */}
                    <div className='flex flex-col xl:flex-row gap-4 p-6 items-center'>
                        <div>
                            <Card shadow="sm" padding="lg" className="mt-4">
                                <h2 className="text-lg font-semibold mb-4">Account Information</h2>
                                <Grid gutter="md">
                                    {/* Left Side - Personal Information */}
                                    <Grid.Col span={{ base: 12, sm: 6 }}>
                                        <TextInput label="First Name" placeholder="Enter your first name" />
                                        <TextInput label="Last Name" placeholder="Enter your last name" className="mt-4" />
                                        <TextInput label="Email" placeholder="Enter your email" className="mt-4" />
                                        <TextInput label="Address" placeholder="Enter your address" className="mt-4" />
                                    </Grid.Col>

                                    {/* Right Side - Additional Info */}
                                    <Grid.Col span={{ base: 12, sm: 6 }}>
                                        <TextInput label="Apartment/Studio/Floor" placeholder="Apartment, Studio, or Floor" />
                                        <TextInput label="City" placeholder="Enter your city" className="mt-4" />
                                        <TextInput label="State" placeholder="Enter your state" className="mt-4" />
                                        <TextInput label="Zip Code" placeholder="Enter your zip code" className="mt-4" />
                                    </Grid.Col>
                                </Grid>
                            </Card>
                        </div>

                        {/* Mockup for Theme and Language Settings */}
                        <div className="flex gap-4 mt-6 flex-wrap">
  <Card shadow="sm" padding="lg" className="flex-1">
    <h3 className="text-lg font-semibold">Theme Settings</h3>
    <Paper p="md" withBorder className="mt-4">
      <Text>Choose your preferred theme for the application:</Text>
      <Button variant="outline" color="blue" className="mt-4">Dark Mode</Button>
      <Button variant="outline" color="blue" className="mt-2">Light Mode</Button>
    </Paper>
  </Card>

  <Card shadow="sm" padding="lg" className="flex-1">
    <h3 className="text-lg font-semibold">Language Settings</h3>
    <Paper p="md" withBorder className="mt-4">
      <Text>Select your preferred language:</Text>
      <Button variant="outline" color="blue" className="mt-4">English</Button>
      <Button variant="outline" color="blue" className="mt-2">Thai</Button>
    </Paper>
  </Card>
</div>

                    </div>

                    {/* Save Changes Button */}
                    <Button fullWidth className="mt-4" color="blue">
                        Save Changes
                    </Button>
                </div>
            </AppShell.Main>
        </AppShell>
    );
}

export default SettingsPage;
