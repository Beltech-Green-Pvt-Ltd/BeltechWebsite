import styled from "styled-components";
import Color from '../../styles/color';

export const MainContainer = styled.div`
  justify-content: center;
  min-height: 2338px;
  display: flex;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
`;

export const HeadingContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const HeadingSubContainer = styled.div`
    /* display: flex; */
    position: relative;
`;

export const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #FFC800;
    position: absolute;
    top: 19%;
    left: -10%;
    z-index: -1;
`;

export const HeadingText = styled.h1`
   font-size: 60px;
`;

export const ImpactContentContainer = styled.div`

`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 135px;
`;

export const ContentContainer2 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin-bottom: 135px;
`;

export const GraphContentContainer = styled.div`
  position: relative;
  max-width: 515px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContentContainer = styled.div`
  max-width: 520px;
`;

export const Image = styled.img`
  margin-top: 45px;
  max-width: 471px;
`;

export const TextContentHeading = styled.h1`
  font-size: 44px;
  font-weight: 700;
`;

export const TextContentSubHeading = styled.div`
`;

export const BulletPoint = styled.div`
  background-color: ${Color.primaryColor};
  min-width: 10px;
  min-height: 10px;
  border-radius: 5px;
`;

export const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BulletPointText = styled.h2`
  margin-left: 7px;
  font-size: 24px;
`;

export const BackGroundCircle = styled.div`
  width: 440px;
  height: 400px;
  border-radius: 220px;
  background-color: #F9F9F9;
  position: absolute;
  z-index: -1;
`;

export const GraphText = styled.div`
  font-size: 14px;
`;

export const GraphAnalysis = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 7px;
`;

export const GraphAnalysis1 = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 7px;
  align-self: flex-start;
`;

export const PercentageText = styled.div`
  color: ${Color.primaryColor};
  font-size: 48px;
  font-weight: 700;
  margin-right: 4px;
`;

export const DownArrow = styled.div`
  color: #35D5A4;
  font-size: 48px;
  margin-right: 10px;
`;

export const AnalysisText = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
