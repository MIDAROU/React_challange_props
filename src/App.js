import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ProjectParent from './Components/ProjectParent';
import './Css/Style.css';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <ProjectParent/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
