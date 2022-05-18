import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'reactstrap';

const Navbar = () => {
  return (
    <nav className='layout-navbar'>
      <Link href='/' className='navbar-logo'>
        <Image
          src='/images/educatly-logo.svg'
          alt='Eduactly'
          className='logo'
          width={115}
          height={25}
        />
      </Link>

      <Button
        color='light'
        className='btn btn-light btn-rounded nav-btn'
        href='https://www.educatly.com'
        target='_blank'
      >
        Visit our website
      </Button>
    </nav>
  );
};

export default Navbar;
