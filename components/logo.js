import Link from 'next/link';

const Logo = () => (
  <Link href="/">
    <div className='c-logo'>
      <svg className="c-logo__svg" viewBox="0 0 883 410">
        <path d="M236.714 0L473.427 410H0L236.714 0Z"/>
        <circle cx="678" cy="205" r="205"/>
      </svg>
    </div>
  </Link>
);

export default Logo;
