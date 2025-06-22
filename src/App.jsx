import Navbar from "./components/Navbar";
import NotificationBar from "./NotificationBar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <NotificationBar />
      <Navbar />
      <Hero />

      {/* Product Sections */}
      <Section
        title="iPhone 15 Pro"
        subtitle="Titanium. So strong. So light. So Pro."
        image="./src/iphone15.jpg"
        dark={true}
      />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <Section
            title="MacBook Air"
            subtitle="Supercharged by M2."
            image="./src/macbook.jpg"
            dark={false}
          />
        </div>
        <div className="flex-1">
          <Section
            title="iPad Pro"
            subtitle="Lovable. Drawable. Magical."
            image="./src/ipad.jpg"
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