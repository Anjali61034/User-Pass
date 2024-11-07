'use client';  // Ensures that this component is client-side

import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const { user, isLoaded } = useAuth(); // Get user data via the useAuth hook
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setLoading(false); // Set loading to false once user data is loaded
    }
  }, [isLoaded]);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <div>You are not logged in</div>;
  }

  return (
    <div className='mt-10 text-start max-w-xl mx-auto bg-neutral-200 p-5 rounded'>
      <h1 className='text-4xl font-bold'>Welcome</h1>
      <ul className='list-none mt-10'>
        <li className='mb-2'>
          <span className='font-semibold'>First Name:</span> {user.firstName}
        </li>
        <li className='mb-2'>
          <span className='font-semibold'>Last Name:</span> {user.lastName}
        </li>
        <li className='mb-2'>
          <span className='font-semibold'>Email:</span> {user.emailAddresses[0].emailAddress}
        </li>
      </ul>
    </div>
  );
}
