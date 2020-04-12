import { useRouter } from 'next/router';
import Header from './header';

const layoutStyle = {
  
};

const Layout = props => {
  const router = useRouter();
  return (
    <div style={layoutStyle}>
      <Header />
      <h1>{router.query.title}</h1>
      {props.children}
    </div>
  )
};

export default Layout;
