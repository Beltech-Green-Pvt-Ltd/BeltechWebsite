import React from "react";
import {
  ProductContainer,
  Image2,
  InfoContainer,
  ProductHeadingText,
  ListContainer,
  BulletPoint,
  List,
  ListText,
  KnowMoreButton,
} from "./style";
import TourismApp from '../../assets/TourismProduct.png';

const Product1 = () => {
  return (
    <ProductContainer>
      <Image2 src={TourismApp} />
      <InfoContainer>
        <ProductHeadingText>
            AI Driven Tourism Platoform
        </ProductHeadingText>
        <ListContainer>
          <List>
            <BulletPoint />
            <ListText>Single platform to manage tourists and vendors</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Detailed analytics of tourists which helps boosting tourism</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Tracking of tourists in restricted areas</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>App for tourists</ListText>
          </List>
        </ListContainer>
        <KnowMoreButton to="/product#tourismplatform">Know more</KnowMoreButton>
      </InfoContainer>
    </ProductContainer>
  );
};

export default Product1;
