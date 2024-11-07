'use client';  // Add this at the top to mark this component as a client-side component

import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  const { userId } = useAuth(); // Using the client-side hook to access authentication status

  return (
    <div className='bg-gray-600 text-neutral-100'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <Link href='/'>Home</Link>
        <div className='flex gap-4 items-center'>
          {userId ? (
            <>
              <Link href='/dashboard' className='whitespace-nowrap'>Dashboard</Link>
              <UserButton afterSignOutUrl='/' />
            </>
          ) : (
            <>
              <Link href='/sign-up' className='whitespace-nowrap'>Sign up</Link>
              <Link href='/sign-in' className='whitespace-nowrap'>Sign In</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
