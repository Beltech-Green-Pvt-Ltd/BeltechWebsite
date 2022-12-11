import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../styles/color";

export const HamMenuContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(255, 255, 255, 0.8);
  overflow: hidden;
  transition: 0.5s;
  z-index: 1000;
`;

export const CrossIcon = styled.img`
    cursor: pointer;
`;

export const MenuContainer = styled.div`
`;

export const MenuItem = styled.div`

`;

export const Menu = styled(Link)`
    text-decoration: none;
`;

export const UnderLine = styled.div`
    background-color: ${Colors.primaryColor};
    height: 3px;
    width: 100%;
`;