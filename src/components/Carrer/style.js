import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background-color: white;
`;

export const HeadingText = styled.h1`
    font-size: 50px;
    z-index: 10;
`;

export const ContentContainer = styled.div`
    margin-top: 121px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    justify-content: space-between;
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    position: relative;
`;

export const CareerCTAContainer = styled.div`

`;

export const Image1 = styled.img`
    max-width: 245px;
`;

export const Image2 = styled.img`
    max-width: 245px;
    position: absolute;
    left: 200px;
    top: 50px;
`;

export const Image3 = styled.img`
    max-width: 245px;
    margin-left: 170px;
`;

export const HeadingContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const Circle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #FFC800;
    position: absolute;
    top: 19%;
    left: -15%;
    z-index: 0;
`;

export const HeadingSubContainer = styled.div`
    display: flex;
    position: relative;
`;

export const CareerHeadingText = styled.h2`
    color: #05052C;
    width: 383px;
    font-size: 38px;
`;

export const CTA = styled(Link)`
    width: 450px;
    background-color: #006AE9;
    height: 80px;
    padding: 15px 45px 15px 45px;
    border: none;
    color: white;
    font-size: 28px;
    border-radius: 8px;
    text-decoration: none;
`;