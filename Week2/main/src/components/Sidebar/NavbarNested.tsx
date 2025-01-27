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
import { Logo } from './Logo';
import classes from './NavbarNested.module.css';
import { link } from 'fs';


const mockdata = [
  { label: 'Dashboard', link: '/dashboard', icon: IconGauge },
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
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments, link: '/settings' },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

// export function NavbarNested() {
//   const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

//   return (
//     <nav className="w-full h-full flex flex-col justify-between">

//       <ScrollArea className={classes.links}>
//         <div className={classes.linksInner}>
//           {links.map((link) => (
//         <a href={link.props.label} key={link.props.label} className={classes.link}>
//           {link}
//         </a>
//           ))}
//         </div>
//       </ScrollArea>

//       <div className={classes.footer}>
//         <UserButton />
//       </div>
//     </nav>
//   );
// }
//======================================================================================================
// export function NavbarNested() {
//   const handleClick = (link: string) => {
//     window.location.href = link;
//   };

//   const links = mockdata.map((item) => (
//     // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
// <div onClick={() => handleClick(item.link || '#')} key={item.label}>
//       <LinksGroup {...item} />
//     </div>
//   ));

//   return (
//     <nav className={classes.navbar}>
//       <ScrollArea className={classes.links}>

//         <div className={classes.linksInner}>
//           {links}
//         </div>

//       </ScrollArea>


//       <div className={classes.footer}>
//         <UserButton />
//       </div>
//     </nav>
//   );
// }

export function NavbarNested() {
  const handleClick = (link: string) => {
    window.location.href = link;
  };
  const links = mockdata.map((item) => (

    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div onClick={() => handleClick(item.link || '#')} key={`nav-${item.label}`}>
      <LinksGroup {...item} />
    </div>

  ));

  return (
    <nav className="w-full h-full flex flex-col justify-between">

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>
          {links.map((link, index) => (
            <a href={link.props.label} key={`link-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              index}`} className={classes.link}>
              {link}
            </a>
          ))}

        </div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}