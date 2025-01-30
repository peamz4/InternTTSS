import { useState } from 'react';
import { IconArrowsLeftRight, IconChevronRight, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconTrash } from '@tabler/icons-react';
import { Avatar, Box, Flex, Group, Menu, Stack, Text, UnstyledButton, em } from '@mantine/core';
import { useHover, useMediaQuery } from '@mantine/hooks';
import { cn } from '@/libs/utils';
import classes from './Theme.module.css'
interface ProfileButtonProps {
  profileHovered?: boolean;
  expanded?: boolean;
}
const ProfileButton: React.FC<ProfileButtonProps> = ({ profileHovered, expanded }) => {

  return (
    <Group className="w-full">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        radius="xl"
      />
      <div style={{ flex: 1 }}>
        <Text size="sm" fw={500}>
          Harriette Spoonlicker
        </Text>
        <Text c={profileHovered ? "white" : "dimmed"} size="xs">
          hspoonlicker@outlook.com
        </Text>
      </div>
      <IconChevronRight
        size={14}
        stroke={1.5}
        className={cn(
          'transition-transform',
          expanded && "rotate-90",
        )}
      />
    </Group>
  )
}

export function UserButton() {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  const unstyledButtonClassName = "block w-full text-black dark:text-dark-0 p-4 hover:opacity-90 border-solid border-b border-b-slate-200 bg-white"
  const { hovered: profileHovered, ref: profileRef } = useHover();


  if (isMobile) {
    return (
      <>
        <Menu position="bottom" withArrow arrowPosition="center" width="100%">
          <Menu.Target>
            <UnstyledButton
              ref={profileRef}
              c={profileHovered ? 'white' : 'primary'}
              // bg={profileHovered ? 'primary' : 'white'}
              className={classes.user}
              // className={unstyledButtonClassName}
              onClick={() => setExpanded((prev) => !prev)}
            >
              <ProfileButton expanded={expanded} profileHovered={profileHovered} />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown className='w-full'>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item leftSection={<IconSettings size={14} />}>
              Settings
            </Menu.Item>
            <Menu.Item leftSection={<IconMessageCircle size={14} />}>
              Messages
            </Menu.Item>
            <Menu.Item leftSection={<IconPhoto size={14} />}>
              Gallery
            </Menu.Item>
            <Menu.Item
              leftSection={<IconSearch size={14} />}
              rightSection={
                <Text size="xs" c="dimmed">
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item
              leftSection={<IconArrowsLeftRight size={14} />}
            >
              Transfer my data
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={<IconTrash size={14} />}
            >
              Delete my account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </>
    )
  }

  return (
    <Menu position="right-start" withArrow arrowPosition="center">
      <Menu.Target>
        <UnstyledButton ref={profileRef}
          c={profileHovered ? 'white' : 'primary'}
          // bg={profileHovered ? 'primary' : 'white'}
          // className={unstyledButtonClassName}
          className={classes.user}
        >

          <ProfileButton profileHovered={profileHovered} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
