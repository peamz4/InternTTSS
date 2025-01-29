import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import classes from './UserButton.module.css';

export function UserButton() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <UnstyledButton
        className={classes.user}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            radius="xl"
          />
          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              Harriette Spoonlicker
            </Text>
            <Text c="dimmed" size="xs">
              hspoonlicker@outlook.com
            </Text>
          </div>
          <IconChevronRight
            size={14}
            stroke={1.5}
            className={`transition-transform ${expanded ? 'rotate-90' : ''
              }`}
          />
        </Group>
      </UnstyledButton>

      <div
        className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-20' : 'max-h-0'
          }`}
      >
        <p className="text-white cursor-pointer hover:underline">
          Change Account
        </p>
        <p className="text-white cursor-pointer hover:underline">Log Out</p>
      </div>
      <hr style={{ border: '1px solid #ccc', width: '100%', marginTop: 20, borderColor: 'white' }} />
    </div>
  );
}
