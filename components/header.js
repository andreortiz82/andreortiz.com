import Link from 'next/link';
import Logo from './logo';

const navData = [{title: 'Home', path: '/'},
                 {title: 'About me', path: '/about'}];

const Header = () => (
  <div className='c-site-header'>
    <div className="c-site-header__wrapper">
      <Logo/>
      <nav className="c-site-header__nav">
        { navData.map((item, index) => {
          return (<Link key={index} href={item.path}>
                    <a className="c-site-header__nav-option">{item.title}</a>
                  </Link>)
        })}
      </nav>
    </div>
  </div>
);

export default Header;
