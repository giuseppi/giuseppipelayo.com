import Header from "./header.js";
import Projects from "./projects.js";
const Layout = () => {
  return (
    <>
      <div className="flex-container">
        <Header />
        <Projects />
      </div>
    </>
  );
};

export default Layout;
