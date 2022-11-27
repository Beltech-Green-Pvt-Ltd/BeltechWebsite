import React from "react";
import {
  CareerCTAContainer,
  Container,
  ContentContainer,
  HeadingText,
  ImageContainer,
  MainContainer,
  Image1,
  Image2,
  Image3,
  HeadingContainer,
  Circle,
  HeadingSubContainer,
  CareerHeadingText,
  CTA
} from "./style";
import Career1 from "../../assets/Carrer1.png";
import Career2 from "../../assets/Carrer2.png";
import Career3 from "../../assets/Carrer3.png";

const Carrer = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
            <HeadingSubContainer>
            <HeadingText>Career</HeadingText>
            <Circle />
          </HeadingSubContainer>
        </HeadingContainer>
        <ContentContainer>
          <ImageContainer>
            <Image1 src={Career1} />
            <Image2 src={Career2} />
            <Image3 src={Career3} />
          </ImageContainer>
          <CareerCTAContainer>
                <CareerHeadingText>Your career journey starts from here</CareerHeadingText>
                <CTA>Discover Career at Beltech</CTA>
          </CareerCTAContainer>
        </ContentContainer>
      </Container>
    </MainContainer>
  );
};

export default Carrer;
