import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';


function App() {
  return (
    <div className="App">
      {/*<h1>Agence de voyages Wanderlust</h1>
      <p>Expériences de voyage inoubluabes</p> */}
      <Header transparent={true} />
      <HeroSection bgImage="/images/heroSection.jpg" />
      <Footer />
    </div>
  );
}

export default App;
