import Signup from '@/components/Form/Signup';
import Link from 'next/link';

export default function signup() {
  return (
    <div className='flex justify-center'>
      <Signup />
      <Link href="/login">Login</Link>
    </div>
  );
}
