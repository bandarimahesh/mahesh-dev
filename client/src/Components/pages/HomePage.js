import About from "../About/About";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Timeline from "../Timeline/Timeline";
import GoToTop from "../Utils/GoToTop";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Timeline />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default HomePage;
