import React from "react";
import {
  Container,
  HeadingContainer,
  HeadingText,
  MainContainer,
  ViewAllButton,
  ViewAllButtonContainer,
  NextIcon,
  PrevIcon
} from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Next from '../../assets/Right.png';
import Left from '../../assets/Left.png';

const OurProducts = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
          <HeadingText>Our Products</HeadingText>
        </HeadingContainer>
        <ViewAllButtonContainer>
          <ViewAllButton to="/product">
            <div>View All</div>
            <div>&#8594;</div>
          </ViewAllButton>
        </ViewAllButtonContainer>
        <Carousel 
        renderArrowNext={(clickHandler, hasNext, labelPrev) => 
          hasNext && (
            <button onClick={clickHandler} style={{background: 'transparent', position: 'absolute' ,top: '49%', right: '40px', border: 'none', zIndex: 10}}>
              <NextIcon src={Next} />
            </button>
          )
        }
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button onClick={clickHandler} style={{background: 'transparent', position: 'absolute' ,top: '49%', left: '10px', border: 'none', zIndex: 10}}>
            <PrevIcon src={Left} />
            </button>
          )
        }
        showStatus={false}>
            <Product1 />
            <Product2 />
        </Carousel>
      </Container>
    </MainContainer>
  );
};

export default OurProducts;
