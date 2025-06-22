
import Navbar from "./components/Navbar";
import NotificationBar from "./NotificationBar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";

import iphone15 from './iphone15.jpg';
import macbook from './macbook.jpg';
import ipad from './ipad.jpg';

function App() {
  return (
    <>
      <NotificationBar />
      <Navbar />
      <Hero />

      <Section
        title="iPhone 15 Pro"
        subtitle="Titanium. So strong. So light. So Pro."
        image={iphone15}
        dark={true}
      />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <Section
            title="MacBook Air"
            subtitle="Supercharged by M2."
            image={macbook}
            dark={false}
          />
        </div>
        <div className="flex-1">
          <Section
            title="iPad Pro"
            subtitle="Lovable. Drawable. Magical."
            image={ipad}
            dark={false}
          />
        </div>
      </div>

      <ImageCarousel />
      <Footer />
    </>
  );
}

export default App;
