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
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import { UserButton } from '../UserButton/UserButton';
import classes from './NavbarNested.module.css';



const mockdata: { label: string; link?: string; icon: React.ElementType; initiallyOpened?: boolean; links?: { label: string; link: string; }[] }[] = [
  { label: 'Dashboard', link: '/admin/dashboard', icon: IconGauge },
  { label: 'Analytics', icon: IconPresentationAnalytics, link: '/analytics' },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/overview' },
      { label: 'Forecasts', link: '/analysis' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
  { label: 'Documentation', icon: IconFileAnalytics, link: '/admin/docs' },
  { label: 'Settings', icon: IconAdjustments, link: '/settings' },
];


export function NavbarNested() {
  const handleClick = (link: string) => {
    window.location.href = link;
  };
  const links = mockdata.map((item) => (

    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div onClick={() => handleClick(item.link || '#')} key={`nav-${item.label}`}>
      <LinksGroup {...item} link={item.link || '#'} />
    </div>

  ));

  return (
    <nav className="w-full h-full flex flex-col justify-between">

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>
          {links.map((link, index) => (
            <h5 ref={link.props.label} key={`link-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              index}`} className={classes.link}>
              {link}
            </h5>
          ))}

        </div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}