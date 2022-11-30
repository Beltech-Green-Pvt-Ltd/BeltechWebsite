import React from "react";
import {
  ProductContainer,
  Image,
  InfoContainer,
  ProductHeadingText,
  ListContainer,
  BulletPoint,
  List,
  ListText,
  KnowMoreButton,
} from "./style";
import Traffic from "../../assets/Traffic.png";

const Product1 = () => {
  return (
    <ProductContainer>
      <Image src={Traffic} />
      <InfoContainer>
        <ProductHeadingText>
          AI Driven Integrated Security Platoform
        </ProductHeadingText>
        <ListContainer>
          <List>
            <BulletPoint />
            <ListText>Detects suspicious/illegal activities</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Criminal Detection</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Suspicious people detection</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Customisable intelligence parameters</ListText>
          </List>
        </ListContainer>
        <KnowMoreButton to="/carrer">Know more</KnowMoreButton>
      </InfoContainer>
    </ProductContainer>
  );
};

export default Product1;
