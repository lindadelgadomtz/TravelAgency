import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
import DivOne from './components/divOne/DivOne';
import BlogDivComp from './components/blogDivComp/BlogDivComp';

function App() {
  return (
    <div className="App">
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
      <BlogDivComp
        title="Stories from the Journey"
        subtitle="JOURNAL"
        description="Discover heartfelt reflections and inspiring travel moments crafted by our founders and guests."
        link="/journal"
        largeImage="/images/morocco-destination.webp"
        smallImage="/images/venice-travel-scene.webp"
      />
      <Footer />
    </div>
  );
}

export default App;
