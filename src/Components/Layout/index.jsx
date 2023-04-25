import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
