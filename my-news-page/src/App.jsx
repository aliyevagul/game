import Header from './components/Header/index';
import Hero from './components/Hero/index';
import MainContent from './components/MainContent/index';
import Newsletter from './components/Newsletter/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <MainContent />
      <Newsletter />
      <Footer />
    </div>
  );
  
}

export default App;

