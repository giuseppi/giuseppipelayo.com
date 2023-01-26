import Header from "./header.js";
import About from "./about.js";
import Projects from "./projects.js";
import Footer from "./footer.js";
const Layout = () => {
  return (
    <>
      <div className="flex-container">
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
