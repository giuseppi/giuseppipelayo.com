import Header from "./header.js";
import Projects from "./projects.js";
import Footer from "./footer.js";
const Layout = () => {
  return (
    <>
      <div className="flex-container">
        <Header />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
