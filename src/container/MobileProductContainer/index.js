import React from "react";
import { MainContainer, Container, HeadingContainer, HeadingSubContainer, HeadingText, Circle, Card, InfoDiv, CardHeadingText, CardSubHeadingText, LinkDiv, ProductsContainer, ProductHeadingText, ProductHeadingContainer, UnderLine } from "./style";
import ProductBackground from '../../assets/ProductBackground.png';
import Product1 from '../../assets/Product1.png';
import Product2 from '../../assets/Product2.png';
import Product3 from '../../assets/Product3.png';
import Product4 from '../../assets/Product4.png';
import Product5 from '../../assets/Product5.png';
import Product6 from '../../assets/Product6.png';
import Product7 from '../../assets/Product7.png';
import Product8 from '../../assets/Product8.png';
import Product9 from '../../assets/Product9.png';
import Product10 from '../../assets/Product10.png';
import Product11 from '../../assets/Product11.png';

const CardComponent = ({image, heading, subHeading, link}) => {
    return (
        <Card image={image}>
            <InfoDiv>
                <CardHeadingText>
                    {heading}
                </CardHeadingText>
                <CardSubHeadingText>
                    {subHeading}
                </CardSubHeadingText>
                <LinkDiv to={link}>Learn more &rarr;</LinkDiv>
            </InfoDiv>
        </Card>
    );
}

const MobileProductPage = () => {
  return (
    <MainContainer>
      <Container>
      <HeadingContainer>
        <HeadingSubContainer>
          <HeadingText>Products</HeadingText>
          <Circle />
        </HeadingSubContainer>
      </HeadingContainer>
      <ProductsContainer>
        <ProductHeadingContainer>
            <ProductHeadingText>AI Driven Integrated Traffic Management</ProductHeadingText>
            <UnderLine />
        </ProductHeadingContainer>
        <CardComponent image={Product1} heading="Traffic Management System" subHeading="Optimizes traffic flow by reducing congestion..." link="/trafficManagement"/>
        <CardComponent image={Product2} heading="Traffic Violation System" subHeading="Automatically detects traffic violations Violation proof and payment link..." link="/trafficManagement"/>
        <CardComponent image={Product3} heading="Reduction in Toxic Emissions" subHeading="Reduction in idle time at junctions, 200 tons of toxic emissions reduced per ..." link="/trafficManagement"/>
        <CardComponent image={Product4} heading="AI Ways Online Dashboard" subHeading="Control traffic signals remotely. View of all traffic violations..." link="/trafficManagement"/>
        <CardComponent image={Product5} heading="AI Driven Challan Collection" subHeading="Live location of vehicles with unpaid traffic violations near the authorities..." link="/trafficManagement"/>
      </ProductsContainer>
      <ProductsContainer>
        <ProductHeadingContainer>
            <ProductHeadingText>AI Driven Integrated Security Platform</ProductHeadingText>
            <UnderLine />
        </ProductHeadingContainer>
        <CardComponent image={Product9} heading="Crime Detection" subHeading="AI automatically detects any suspicisous/violent activities..." link="/securityPlatform"/>
        <CardComponent image={Product6} heading="Criminal Detection" subHeading="Detects people of interest and alerts authorities of their presence..." link="/securityPlatform"/>
        <CardComponent image={Product8} heading="Women Safety" subHeading="AI automatically detects any suspicisous/violent activities.." link="/securityPlatform"/>
        <CardComponent image={Product7} heading="Intrusion Detection" subHeading="Registers users (temporary or permanent) allowed within premises..." link="/securityPlatform"/>
      </ProductsContainer>
      <ProductsContainer>
        <ProductHeadingContainer>
            <ProductHeadingText>AI Driven Tourism Platform</ProductHeadingText>
            <UnderLine />
        </ProductHeadingContainer>
        <CardComponent image={Product10} heading="Tourist Platform for Authorities" subHeading="Registers and tracks tourists in sensitive areas..." link="/tourismPlatform"/>
        <CardComponent image={Product11} heading="App for Tourists" subHeading="Online booking of tickets, online application and approvals of permits..." link="/tourismPlatform"/>
      </ProductsContainer>
      </Container>
    </MainContainer>
  );
};

export default MobileProductPage;
