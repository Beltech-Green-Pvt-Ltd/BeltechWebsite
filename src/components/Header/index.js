import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, LogoContainer, MainContainer,Container, LogoText, Image, MenuContainer,MenuItem, Linked } from "./style";
import logo from '../../assets/Beltech.png';

const Header = () => {
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
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/">Product</Linked>
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/">About us</Linked>
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/">Impact</Linked>
                    </MenuItem>
                    <MenuItem>
                        <Linked to="carrer">Carrer</Linked>
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/">Team</Linked>
                    </MenuItem>
                    <MenuItem>
                        <Linked to="/">Contact Us</Linked>
                    </MenuItem>
                </MenuContainer>
            </Container>
        </MainContainer>
    );
}

export default Header;