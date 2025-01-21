import { IconChevronRight } from '@tabler/icons-react';
import { Avatar, Group, Text, UnstyledButton, Menu, ActionIcon } from '@mantine/core';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import classes from './UserButton.module.css';
import Link from 'next/link';

export function UserButton() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton className={classes.user}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              radius="xl"
            />

            <div style={{ flex: 1 }}>
              <Text size="sm" fw={500}>
                Pirawish Pathumngern
              </Text>

              <Text c="dimmed" size="xs">
                peamz4x@gmail.com
              </Text>
            </div>

            <IconChevronRight size={14} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Link href="/settings">
        <Menu.Item leftSection={<FiSettings size={16} />}>Settings</Menu.Item>
        </Link>
        <Link href={'/'}>
        <Menu.Item leftSection={<FiLogOut size={16} />} color="red">
          Logout
        </Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  );
}
