import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons-react';
import { Code, Group, ScrollArea } from '@mantine/core';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { UserButton } from '../UserButton/UserButton';

import classes from './NavbarNested.module.css';
import Link from 'next/link';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge, link: '/dashboard/default' },
  { label: 'Analytics', icon: IconPresentationAnalytics, link: '/dashboard/analytics' },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/dashboard/releases/upcoming' },
      { label: 'Previous releases', link: '/dashboard/releases/previous' },
      { label: 'Releases schedule', link: '/dashboard/releases/schedule' },
    ],
  },

  { label: 'Contracts', icon: IconFileAnalytics, link: '/dashboard/contracts' },
];

export function NavbarNested() {
  const handleClick = (link: string) => {
    window.location.href = link;
  };

  const links = mockdata.map((item) => (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div onClick={() => handleClick(item.link || '#')} key={item.label}>
      <LinksGroup {...item} />
    </div>
  ));

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>

        <div className={classes.linksInner}>
          {links}
        </div>

      </ScrollArea>


      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}