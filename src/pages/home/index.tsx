import Navbar from "@/components/common/navbar";
import HeroSection from "@/components/common/herosection";
import WhoWeAreSection from "@/components/common/whoweareSection";
import WorkTogetherSection from "@/components/common/workTogetherSection";
import SolutionsSection from "@/components/common/solutionsSection";
import Footer from "@/components/common/footer";
import TestimonialsSection from "@/components/common/testimonialsSection";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <WorkTogetherSection />
      <SolutionsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default Home;