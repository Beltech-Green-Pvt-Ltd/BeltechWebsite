import React from "react";
import { Link, useMatch } from "react-router-dom";
import { HeaderContainer, LogoContainer, MainContainer,Container, LogoText, Image, MenuContainer,MenuItem, Linked, UnderLine } from "./style";
import logo from '../../assets/Beltech.png';

const Header = () => {
    const match = useMatch("/career");

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
                        {useMatch('/') ? (<UnderLine />): (<></>)}
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/product">Product</Linked>
                        {useMatch('/product') ? (<UnderLine />) : (<></>)}
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/">About us</Linked>
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/">Impact</Linked>
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
                    </MenuItem>
                </MenuContainer>
            </Container>
        </MainContainer>
    );
}

export default Header;