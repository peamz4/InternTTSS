'use client';
import { Anchor, AppShell, Breadcrumbs, Burger } from "@mantine/core";
import HexagonNavigation from '../../components/HexagonNavigation/HexagonNavigation';
import React from "react";

const AdminPage = () => {

  return (
    <>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-ttss bg-repeat bg-[length:200px] opacity-5"> </div>
      <div className='justify-center flex flex-col gap-4 p-6 items-center'>
        <h1 className='mt-0 font-bold'>Admin</h1>
        <h2 className="m-0">Where would you like to go? </h2>
      </div>
      <div className=''>
        <HexagonNavigation />
      </div>
       
    </>
  );
}

export default AdminPage;
