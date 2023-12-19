import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        {/* <Image className='max-w-none' src="/img/logo.png" height={31} width={124} alt="Logo" /> */}
        <span className='uppercase font-bold'>staydrivefinder</span>
      </Link>
    </div>
  );
};

export default Logo;
