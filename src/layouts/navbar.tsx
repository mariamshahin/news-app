import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'reactstrap';
import { MdArrowForwardIos } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className='layout-navbar'>
      <Link href='/' className='navbar-logo'>
        <a>
          <Image
            src='/images/educatly-logo.svg'
            alt='Eduactly'
            className='logo'
            width={115}
            height={25}
          />
        </a>
      </Link>

      <Button
        color='light'
        className='btn btn-light btn-rounded nav-btn'
        href='https://www.educatly.com'
        target='_blank'
      >
        <span className='d-none d-sm-inline-block'>Visit our website</span>{' '}
        <MdArrowForwardIos />
      </Button>
    </nav>
  );
};

export default Navbar;
