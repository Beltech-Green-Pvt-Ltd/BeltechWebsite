import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 420px;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 97px 0px 97px;

`;

export const HeadingText = styled.div`
    font-size: 50px;
    color: #000A55;
    margin-bottom: 105px;
    font-weight: 700;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const AboutUsContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 440px;
`;

export const Image = styled.img`
    width: 104px;
`;

export const Text = styled.div`
    font-size: 22px;
    margin-left: 25px;
`;
