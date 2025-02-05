import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './AuthenticationTitle.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function AuthenticationTitle() {
  return (
    <div className='container w-full md:w-11/12 justify-between flex flex-col md:flex-row items-center gap-10 md:gap-20 rounded-2xl p-10'>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Please Login to your account to continue.
        </Title>
        <TextInput label="Email address" placeholder="hello@gmail.com" size="lg" />
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="lg" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Link href="/admin">
          <Button fullWidth mt="xl" size="md">
            Login
          </Button>
        </Link>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text>
      </Paper>

      <div className='w-full md:w-auto flex justify-center'>
        <Image src="/images/meme.jpg" alt="meme" width={300} height={300} />
      </div>
    </div>
  );
}
