import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Stats from "../components/Stats/Stats";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";

function Home() {
  return (
    <>
      <Helmet>
        <title>Milare Visuals | Home</title>
        <meta
          name="description"
          content="Milare Visuals is a professional media production brand offering photography, videography, documentaries, content creation, and responsive websites."
        />
      </Helmet>

      <Hero />
      <About />
      <Stats />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;