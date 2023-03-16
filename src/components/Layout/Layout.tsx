import Header from '../../containers/Header/Header';
import Footer from './../../containers/Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
