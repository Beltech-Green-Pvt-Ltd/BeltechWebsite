import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../styles/color";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 603px;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
`;

export const ProductMenu = styled.div`
  width: 651px;
  height: 60px;
  background: linear-gradient(
    180deg,
    #e0e7ff -37.62%,
    rgba(237, 241, 255, 0) 123.76%
  );
  border-radius: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 1;
  background-color: white;
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 100px;
    z-index: 100;
`;

export const Menu = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: black;
`;

export const UnderLine = styled.div`
    height: 2px;
    background-color: ${Colors.primaryColor};
`;
