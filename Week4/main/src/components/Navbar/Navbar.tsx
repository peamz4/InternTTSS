'use client';
import { ActionIcon, Box, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });
  const isDark: boolean = computedColorScheme === 'dark';
  const toggleColorScheme = () => {
    setColorScheme(isDark ? 'light' : 'dark');
  }
  return (
    <div className='w-full h-20 items-center px-16 bg-white shadow-md justify-between dark:bg-[var(--mantine-color-primary-5)] flex flex-row'>
      <div className='w-20'>
        <h1 className="text-[var(--mantine-color-primary-6)] dark:text-white text-2xl font-bold">TTSS</h1>
      </div>
      <div className='flex flex-row gap-8 text-lg'>
        <Link href={'/'}>
          <p className="text-black dark:text-white">Home</p>
        </Link>
        <p className="text-black dark:text-white">About</p>
        <p className="text-black dark:text-white">Services</p>
        <p className="text-black dark:text-white">Contact</p>
      </div>
      <div className='w-20'>
        <ActionIcon variant="filled" aria-label="Settings" onClick={() => { toggleColorScheme() }}>
          <IconAdjustments stroke={1.5} />
        </ActionIcon>
      </div>
    </div>
  )
}

export { Navbar }
