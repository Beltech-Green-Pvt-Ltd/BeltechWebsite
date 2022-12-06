import React,{useState} from "react";
import { Link, useMatch, Location, useLocation } from "react-router-dom";
import { HeaderContainer, LogoContainer, MainContainer,Container, LogoText, Image, MenuContainer,MenuItem, Linked, UnderLine } from "./style";
import logo from '../../assets/Beltech.png';

const Header = () => {
    const match = useMatch("/career");
    const active = useState(-1);
    const location = useLocation();

    return (
        <MainContainer>
            <Container>
                <HeaderContainer>
                    <LogoContainer>
                        <Image src={logo}/>
                        <LogoText>Beltech AI</LogoText>
                    </LogoContainer>
                </HeaderContainer>
                <MenuContainer>
                    <MenuItem>
                        <Linked to="/">Home</Linked>
                        {(useMatch('/') && !(location.hash)) ? (<UnderLine />): (<></>)}
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/product">Product</Linked>
                        {useMatch('/product') ? (<UnderLine />) : (<></>)}
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/#aboutUs">About us</Linked>
                        {(location.hash === "#aboutUs") ? (<UnderLine />) : (<></>)}
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/#impact">Impact</Linked>
                        {(location.hash === "#impact") ? (<UnderLine />): (<></>)}
                    </MenuItem>
                    <MenuItem>
                        <Linked to="career">Carrer</Linked>
                        {useMatch('/career') ? (<UnderLine />): (<></>)}
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/team">Team</Linked>
                        {useMatch('/team') ? (<UnderLine />): (<></>)}
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/contactus">Contact Us</Linked>
                        {useMatch('/contactus') ? (<UnderLine />): (<></>)}
                    </MenuItem>
                </MenuContainer>
            </Container>
        </MainContainer>
    );
}

export default Header;