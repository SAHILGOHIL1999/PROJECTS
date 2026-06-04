import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import BannerSection from "./components/BannerSection";
import Category from "./components/Category";
import ProductSection from "./components/ProductSection";
import ReviewSection from "./components/ReviewSection";
import BlogSection from "./components/BlogSection";
import InfoBar from "./components/InfoBar";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <HeroSlider />
      <BannerSection />
      <Category />
      <ProductSection />
      <ReviewSection />
      <BlogSection />
      <InfoBar />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
