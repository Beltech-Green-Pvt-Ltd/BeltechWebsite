import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../styles/color";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top:0;
    z-index: 100;
    background-color: white;
`;

export const Container = styled.div`
    max-width: 1580px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeaderContainer = styled.div`
`;

export const LogoText = styled.div`
    font-size: 20px;
    padding-left: 20px;
    font-family: 'Urbanist', sans-serif;
    font-weight: 700;
    display: flex;
    align-items: flex-end;
`;

export const Image = styled.img`
    width: 40px;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuItem = styled.div`
    margin-left: 30px;
    font-family: 'Urbanist', sans-serif;
`;


export const Linked = styled(Link)`
    color: #130F26;
    font-family:'Urbanist', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    :hover{
        color: grey;
    }
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

export const UnderLine = styled.div`
    background-color: ${Colors.primaryColor};
    height: 3px;
    width: 100%;
`;