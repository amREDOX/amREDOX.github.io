import About from "./components/About";
import Contact from "./components/Contact";
import Technical from "./components/Technical-Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education/>
      <Portfolio />
      <Technical />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
