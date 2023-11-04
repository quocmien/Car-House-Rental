import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center">
      <a href="">
        <Image className='max-w-none' src="/img/logo.png" height={31} width={124} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
