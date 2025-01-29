import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
  import classes from './AuthenticationTitle.module.css';
  import Link from 'next/link';
  
  export function AuthenticationTitle() {
    return (
    <Container size={480} my={40} >
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
        Contact Support! 
        </Anchor>
      </Text>
  
      <Paper withBorder shadow="xl" p={60} mt={60} radius="md">
        <TextInput label="Email" placeholder="you@ttss.net" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
        <Checkbox label="Remember me" />
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
        </Group>
        <Link href={'/admin'}>
        <Button fullWidth mt="xl" style={{ backgroundColor: '#f06642' }}>
        Sign in
        </Button>
        </Link>
      </Paper>
    </Container>
    );
  }

export default AuthenticationTitle;