import React from "react";
import Slider from "react-slick";
import testimonialsData from "../../data/testimonials";
import {
  TestimonialsSection,
  Title,
  SecondaryTitle,
  TestimonialsCard,
  TestimonialsPhoto,
  Description,
} from "./Testimonials.styled";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <TestimonialsSection id="testimonials">
      <Title>Testimonials</Title>
      <Slider {...settings}>
        {testimonialsData.map(({ id, name, position, photo, feedback }) => (
          <TestimonialsCard key={id}>
            <TestimonialsPhoto src={photo} alt={name} />
            <SecondaryTitle>{name}</SecondaryTitle>
            <Description>{feedback}</Description>
            <Description>
              - {name}, {position}
            </Description>
          </TestimonialsCard>
        ))}
      </Slider>
    </TestimonialsSection>
  );
};

export default Testimonials;
