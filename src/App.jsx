import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Academics from "./sections/academics/Academics";
import Campus from "./sections/campus/Campus";
import Activities from "./sections/activities/Activities";
import Events from "./sections/events/Events";
import Gallery from "./sections/gallery/Gallery";
import Videos from "./sections/videos/Videos";
import Contact from "./sections/contact/Contact";
import Admissions from "./sections/admissions/Admissions";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <Campus />
        <Activities />
        <Events />
        <Gallery />
        <Videos />
        <Contact />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}

export default App;