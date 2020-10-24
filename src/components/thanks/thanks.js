import "slick-carousel/slick/slick.css";
import React from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import loveIllustrationImageSrc from "images/love-illustration.svg";

const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:pr-12 lg:pr-16 md:order-first` : tw`md:pl-12 lg:pl-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = styled(Slider)`
  ${tw`w-full mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;
const TestimonialHeading = tw.div`mt-4 text-xl font-bold`;
const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

export default ({
  imageSrc = loveIllustrationImageSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "",
  heading = "Thanks for applying.",
  description = "Congrts you're one step closer to be the part of CU-Coders as an official member.",
  textOnLeft = false,
  testimonials = [
    {
      quote:
        "Thanks for taking out the time to apply for this at CU-Coders. You can now sit back and relax, our team has started working on your application. We will get back to you with an update in the next 7 days. In the meantime if you have any questions please feel free to reach out to us at contact@cucoders.tech. Once again, we are delighted to receive your application."
    }
  ]
}) => {
  return (
    <>
    <AnimationRevealPage>
    <Header />
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <ImageColumn>
            <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <TestimonialSlider arrows={false}>
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index}>
                  <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                  <Quote>{testimonial.quote}</Quote>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TextColumn>
        </Row>
      </ContentWithPaddingXl>
    </Container>
    </AnimationRevealPage>
    </>
  );
};
