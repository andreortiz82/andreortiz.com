import Link from 'next/link';

const _linkStyle = {
  marginRight: 15
};

const navData = [{title: 'Home', path: '/', linkStyle: _linkStyle}, {title: 'Work', path: '/work', linkStyle: _linkStyle}, {title: 'About me', path: '/about', linkStyle: _linkStyle}];

const Header = () => (
  <div className='Header'>
    <div className='logo'>
      <img className='logo__img' src='/images/logo.svg'/>
    </div>
    { navData.map((item, index) => {
      return (<Link key={index} href={item.path}>
                <a style={item.linkStyle}>{item.title}</a>
              </Link>)
    })}
  </div>
);

export default Header;
