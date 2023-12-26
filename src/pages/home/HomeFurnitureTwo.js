import React from "react";
import HeroSliderTwentyNine from "../../wrappers/hero-slider/HeroSliderTwentyNine";
import LayoutOne from "../../layouts/LayoutOne";

import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
// import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
// import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
// import AboutUs from "../../components/astrology/aboutus";
import FeatureIconSix from "../../wrappers/feature-icon/FeatureIconSix";
import SectionPooja from "../../components/astrology/sectionpooja";
import SliderList from "../../components/astrology/sliderlist";
import MainSlider from "../../components/astrology/MainSlider";
import OurWorkFlow from "../../components/astrology/ourworkflow";
// import HomeVideoList from "../../components/astrology/HomeVideoList";
// import OurService from "../../components/astrology/OurService";

const HomeFurnitureTwo = () => {
  return (
    <LayoutOne headerTop="visible">
      {/* hero slider */}
      <HeroSliderTwentyNine />

      {/* First Section */}

      {/* Second section */}

      {/* feature text */}

      {/* <OurService /> */}

      {/* <AboutUs /> */}
      {/* abutus */}

      {/* <PredictionallHome /> */}
      {/* third section */}

      {/* <FirstSectiontwo /> */}
      {/* Second Store */}

      {/* <FirstSectiontree /> */}
      {/* <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" /> */}

      {/* third section */}
      {/* <HomeVideoList /> */}

      {/* <SliderYouTubeList /> */}
      {/* Product slider */}
      {/* <SecondSection /> */}
      {/* Browse by category */}
      {/* <ByCategory /> */}
      {/* newsletter */}
      {/* <NewsletterTwo spaceBottomClass="pb-100" /> */}

      {/* fun fact */}
      {/* <FunFactOne spaceTopClass="pt-30" spaceBottomClass="pb-30" /> */}

      {/* testimonial */}
      {/* <TestimonialOne
        spaceTopClass="pt-95"
        spaceBottomClass="pb-95"
        bgColorClass="bg-gray-3"
      /> */}

      {/* blog featured */}

      <BlogFeatured spaceBottomClass="pb-55" />
      <FeatureIconSix spaceBottomClass="pb-30" spaceTopClass="pt-30" />
      <SectionPooja />
      <OurWorkFlow />
      <MainSlider />
      <SliderList />
    </LayoutOne>
  );
};

export default HomeFurnitureTwo;
