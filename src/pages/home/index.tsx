import Navbar from "@/components/common/navbar";
import HeroSection from "@/components/common/herosection";
import SolutionsSection from "@/components/common/solutionsSection";
import TestimonialsSection from "@/components/common/testimonialsSection";
import Footer from "@/components/common/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default Home;