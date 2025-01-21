"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ReleasesPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/dashboard/releases/upcoming');
    }, [router]);

    return null;
};

export default ReleasesPage;