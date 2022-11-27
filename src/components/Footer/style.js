import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 427px;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background-color: #130F26;
`;

export const BeltechLogoContainer = styled.div`
    display: flex;
    padding-left: 97px;
    padding-right: 97px;
    padding-top: 95px;
    align-items: flex-start;
`;

export const Logo = styled.img`
    width: 69px;
`;

export const BeltechText = styled.h3`
    color: white;
    font-size: 40px;
    line-height: 46px;
    margin-left: 18px;
`

export const FooterMenuContainer = styled.div`
    padding: 0px 97px 0px 97px;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -70px
`;

export const MenuContainer = styled.div`
    align-self: flex-end;
`;

export const FollowUsContainer = styled.div`

`;

export const MenuItem = styled(Link)`
    text-decoration: none;
    color: white;
    padding-right: 41px;
    font-size: 21px;
`;

export const FollowUsText = styled.div`
    color: white;
    font-weight: 700;
    font-size: 32px;
`;

export const FollowUsImageContainer = styled.div`
    padding-top: 29px;
`;

export const Image = styled.img`
    width: 42px;
    padding-right: 13px;
`;

export const Line = styled.hr`
    margin: 0px 97px 0px 97px;
    height:1px;
    background-color: white;
    border: none;
`;

export const TermAndConditionContainer = styled.div`
    padding: 0px 97px 0px 97px;
    display: flex;
    justify-content: space-between;
    margin-top: 29px;
`;

export const TNC = styled.div`
`;

export const TNCLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding-right: 50px;
`;

export const CopyRightText = styled.div`
    color: white;
`;