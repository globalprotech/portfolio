import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import StatsTimeline from './components/StatsTimeline/StatsTimeline';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App bg-white dark:bg-[#0f172a] min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <StatsTimeline /> */}
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
