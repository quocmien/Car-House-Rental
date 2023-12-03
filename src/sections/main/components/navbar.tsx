import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { cn } from '@/lib/utils';
import { getServerSession } from 'next-auth/next';
import Logo from './logo';
import NavItems from './nav-items';

const Navbar = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  return (
    <div
      className={cn('flex justify-between w-full py-[6px] px-[7px] shadow-md')}
    >
      <Logo />
      <NavItems session={session} />
    </div>
  );
};

export default Navbar;
