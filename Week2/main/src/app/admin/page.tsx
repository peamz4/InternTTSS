'use client';
import { Anchor, AppShell, Breadcrumbs, Burger } from "@mantine/core";
import HexagonNavigation from '@/components/HexagonNavigation/HexagonNavigation';

const AdminPage = () => {
  const breadcrumbItems = [
    { title: 'Admin', href: '/admin' },
    { title: 'Dashboard', href: '/admin/dashboard' },
  ].map((item) => (
    <Anchor href={item.href} key={item.href}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <div className='justify-center flex flex-col gap-4 p-6 items-center'>
        <h1 className='mt-0'>Admin Menu</h1>
      </div>
      <div className=''>
        <HexagonNavigation />
      </div>
       
    </>
  );
}

export default AdminPage;
