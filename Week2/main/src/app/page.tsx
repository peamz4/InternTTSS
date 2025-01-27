import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { Navbar } from '@/components'
const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '1rem' }}>
      <Navbar />
      <div className='w-auto h-auto flex flex-col items-center justify-center'>
        <h1 className='text-5xl text-[var(--mantine-color-primary-6)]'>T.T. Software Solution</h1>
        <h2> some management system</h2>
        <div className='flex flex-row mt-28'>
        <Link href="/login">
          <Button size='lg'>
            Get Started
          </Button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
