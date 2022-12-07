import styled from "styled-components";
import Colors from "../../styles/color";


export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 356px;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background: linear-gradient(116.25deg, #BDDCFF -17.69%, rgba(210, 231, 255, 0) 73.24%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeadingText = styled.div`
    font-size: 50px;
    margin-bottom: 40px;
    color: #000A55;
    font-weight: 700;
`;

export const SubHeadingText = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: ${Colors.primaryColor};
    margin-bottom: 9px;
    line-height: 48px;
`;

export const Text = styled.div`
    font-size: 22px;
`;