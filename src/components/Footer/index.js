import React from "react";
import {
  BeltechLogoContainer,
  BeltechText,
  Container,
  CopyRightText,
  FollowUsContainer,
  FollowUsImageContainer,
  FollowUsText,
  FooterMenuContainer,
  Image,
  Line,
  Logo,
  MainContainer,
  MenuContainer,
  MenuItem,
  TermAndConditionContainer,
  TNC,
  TNCLink,
} from "./style";
import logo from "../../assets/Beltech.png";
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import angellist from '../../assets/angellist.png'

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <BeltechLogoContainer>
          <Logo src={logo} />
          <BeltechText>Beltech AI</BeltechText>
        </BeltechLogoContainer>
        <FooterMenuContainer>
          <MenuContainer>
            <MenuItem>
                Home
            </MenuItem>
            <MenuItem>
                Products
            </MenuItem>
            <MenuItem>
                Impact
            </MenuItem>
            <MenuItem>
                Team
            </MenuItem>
            <MenuItem>
                Collaborate
            </MenuItem>
            <MenuItem>
                Contact Us
            </MenuItem>
          </MenuContainer>
          <FollowUsContainer>
            <FollowUsText>Follow us</FollowUsText>
            <FollowUsImageContainer>
                <Image src={linkedin}/>
                <Image src={instagram}/>
                <Image src={angellist}/>
            </FollowUsImageContainer>
          </FollowUsContainer>
        </FooterMenuContainer>
        <Line></Line>
        <TermAndConditionContainer>
            <TNC>
                <TNCLink>{`Terms & conditions`}</TNCLink>
                <TNCLink>Privacy policy</TNCLink>
                <TNCLink>Cookies policy</TNCLink>
            </TNC>
            <CopyRightText>Beltech Artficial Intelligence Pvt. Ltd. 2021</CopyRightText>
        </TermAndConditionContainer>
      </Container>
    </MainContainer>
  );
};

export default Footer;
