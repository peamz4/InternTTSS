import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './HeroBullets.module.css';
import Link from 'next/link';

export function HeroBullets() {
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.highlight}>powerful</span> Admin <br /> Management System
                    </Title>
                    <Text c="dimmed" mt="md">
                        Streamline your operations with our all-in-one admin management system. Manage users,
                        track performance, and optimize workflows effortlessly.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck size={12} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>User Management</b> – control access, roles, and permissions with ease
                        </List.Item>
                        <List.Item>
                            <b>Analytics Dashboard</b> – get real-time insights and make data-driven decisions
                        </List.Item>
                        <List.Item>
                            <b>Secure and Scalable</b> – built with security in mind, ready to grow with your business
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Link href="/login">
                            <Button radius="xl" size="md" className={classes.control}>
                                Get Started
                            </Button>
                        </Link>

                    </Group>
                </div>
                <Image src='/logo/removebg.png' className={classes.image} />
            </div>
        </Container>
    );
}
