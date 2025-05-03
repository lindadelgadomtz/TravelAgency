import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
import DivOne from './components/divOne/DivOne';
import BlogDivComp from './components/blogDivComp/BlogDivComp';
import DestinationCarousel from './components/destinationCarousel/DestinationCarousel';
import DestinationCarouselSwiper from './components/destinationCarouselSwiper/DestinationCarouselSwiper';
import FullImageWithGradient from './components/fullImageWithGradient/FullImageWithGradient';
import QuoteBlock from './components/quoteBlock/QuoteBlock';

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
      <DestinationCarouselSwiper
  title="Our Favorite Escapes"
  subtitle="DESTINATIONS"
  destinations={[
    {
      name: 'Morocco',
      description: 'Desert magic and ancient souks.',
      imageUrl: '/images/morocco-destination.webp',
      link: '/destinations/morocco'
    },
    {
      name: 'Rastoke',
      description: 'Dream waterfall city.',
      imageUrl: '/images/rastoke-croatia.webp',
      link: '/destinations/rastoke'
    },
    {
      name: 'Venice',
      description: 'Timeless charm over water.',
      imageUrl: '/images/venice-travel-scene.webp',
      link: '/destinations/venice'
    },
    {
      name: 'Giant’s Causeway',
      description: 'Natural wonder of basalt columns.',
      imageUrl: '/images/giants-causeway-northern-ireland.webp',
      link: '/destinations/giantscauseway'
    }
  ]}
/>

      <BlogDivComp
        title="Stories from the Journey"
        subtitle="JOURNAL"
        description="Discover heartfelt reflections and inspiring travel moments crafted by our founders and guests."
        link="/journal"
        largeImage="/images/morocco-destination.webp"
        smallImage="/images/venice-travel-scene.webp"
      />
       <DestinationCarousel
        title="Our Favorite Escapes"
        subtitle="DESTINATIONS"
        destinations={[
          {
            name: 'Morocco',
            description: 'Desert magic and ancient souks.',
            imageUrl: '/images/morocco-destination.webp',
            link: '/destinations/morocco'
          },
          {
            name: 'Rastoke',
            description: 'Dream waterfall city.',
            imageUrl: '/images/rastoke-croatia.webp',
            link: '/destinations/rastoke'
          },

          {
            name: 'Venice',
            description: 'Timeless charm over water.',
            imageUrl: '/images/venice-travel-scene.webp',
            link: '/destinations/venice'
          },
          {
            name: 'Giants Caseway',
            description: 'Magic and .',
            imageUrl: '/images/giants-causeway-northern-ireland.webp',
            link: '/destinations/giantscauseway'
          },
        ]}
      />
      <FullImageWithGradient
        src="/images/great-wall.webp"
        alt="The Great Wall"
        fadeColor="255, 255, 255"
        blurAmount="12px"
        overlayHeight="35%"
        height="50vh"
      />  
<QuoteBlock
  text="Travel is the only thing you buy that makes you richer."
  author="Anonymous"
  fontSize="2rem"
  animationDirection="left"
  animationDelay="0.2s"
  theme="light"
  variant="classic"
  backgroundImage={null} // You can later use e.g. "/images/quote-bg.png"
/>
      <Footer />
    </div>
  );
}

export default App;
