import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
import DivOne from './components/divOne/DivOne';

function App() {
  return (
    <div className="App">
      {/*<h1>Agence de voyages Wanderlust</h1>
      <p>Expériences de voyage inoubluabes</p> */}
      <Header transparent={true} />
      <HeroSection bgImage="/images/heroSection.jpg" />
      <DivOne
        imageUrl="/images/bespoke-travel-agency-couple.webp"
        subheading="OUR PHILOSOPHY"
        title="Travel With Intention"
        text="At L & V Travels, we craft tailor-made journeys that honor your style, dreams, and pace."
        buttonLabel="Learn More"
        buttonUrl="/about"
      />
      <Footer />
    </div>
  );
}

export default App;
