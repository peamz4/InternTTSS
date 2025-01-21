"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/dashboard/default');
    }, [router]);

    return null;
};

export default DashboardPage;