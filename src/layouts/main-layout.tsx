import Navbar from './navbar';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
