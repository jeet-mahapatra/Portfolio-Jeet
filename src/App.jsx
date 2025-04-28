import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; 
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Project';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        <Home />
        <About/>
        <Projects/>
        <Contact/>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;