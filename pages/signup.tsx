import GoogleLogin from '@/components/Form/googl';
import Signup from '@/components/Form/Signup';
import Link from 'next/link';

export default function signup() {
  return (
    <div className='flex justify-center flex-col'>
      <Signup />
      {/* <GoogleLogin /> */}
      <Link href="/login">Login</Link>
    </div>
  );
}
