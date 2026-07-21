import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;