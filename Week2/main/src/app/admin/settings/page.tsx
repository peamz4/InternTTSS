'use client';

import { useState } from 'react';
import { TextInput, Button, Paper, Group, Title, Select, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function PersonalInfoSettings() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      gender: '',
      bio: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must be at least 2 characters' : null),
      email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email'),
      phone: (value) => (/^\+?[0-9]{7,15}$/.test(value) ? null : 'Invalid phone number'),
      address: (value) => (value.length < 5 ? 'Address must be at least 5 characters' : null),
      bio: (value) => (value.length > 200 ? 'Bio must be less than 200 characters' : null),
    },
  });

  return (
    <Paper shadow="sm" p="xl" radius="md" withBorder>
      <Title order={2} mb="md">
        Personal Information
      </Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Full Name" placeholder="John Doe" {...form.getInputProps('name')} mb="md" />
        <TextInput label="Email" placeholder="example@mail.com" {...form.getInputProps('email')} mb="md" />
        <TextInput label="Phone" placeholder="+123456789" {...form.getInputProps('phone')} mb="md" />
        <TextInput label="Address" placeholder="123 Main St, City" {...form.getInputProps('address')} mb="md" />
        <Select
          label="Gender"
          placeholder="Select your gender"
          data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other' }]}
          {...form.getInputProps('gender')}
          mb="md"
        />
        <Textarea label="Bio" placeholder="Tell us about yourself" {...form.getInputProps('bio')} mb="md" />
        <Group align="right" mt="md">
          <Button type="submit">Save Changes</Button>
        </Group>
      </form>
    </Paper>
  );
}
