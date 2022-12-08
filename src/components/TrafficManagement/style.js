import styled from "styled-components";
import Color from "../../styles/color";

export const TrafficManagementContainer = styled.div`

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
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #FFC800;
    position: absolute;
    top: 10%;
    left: -4%;
    z-index: -1;
`;

export const HeadingText = styled.h1`
   font-size: 40px;
   width: 500px;
   text-align: center;
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
  max-width: 545px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContentContainer = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  margin-top: 45px;
  max-width: 471px;
`;

export const TextContentHeading = styled.h1`
  font-size: 34px;
  font-weight: 700;
`;

export const TextContentSubHeading = styled.div`
`;

export const BulletPoint = styled.div`
  background-color: ${Color.primaryColor};
  min-width: 8px;
  min-height: 8px;
  border-radius: 5px;
`;

export const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const BulletPointText = styled.div`
  margin-left: 7px;
  font-size: 20px;
`;

export const BackGroundCircle = styled.div`
  width: 440px;
  height: 400px;
  border-radius: 220px;
  background-color: #F9F9F9;
  position: absolute;
  z-index: -1;
`;

export const BackGroundCircle1 = styled.div`
    width: 440px;
    height: 400px;
    border-radius: 220px;
    background: rgba(255, 247, 217, 0.6);
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
  font-size: 32px;
  font-weight: 700;
  margin-right: 4px;
`;

export const DownArrow = styled.div`
  color: #35D5A4;
  font-size: 35px;
  margin-right: 10px;
`;

export const AnalysisText = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const GraphAnalysisContainer = styled.div`
  position: relative;
`;

export const HoverDiv = styled.div`
  position: absolute;
  right: -94%;
  top: 70%;
  width: 524px;
  height: 50px;
  display: none;
  ${GraphAnalysisContainer}:hover & {
    display: block;
  }
`;

export const HoverImage = styled.img`
`;

export const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const GraphText1 = styled.div`
  font-size: 14px;
  position: relative;
  top: -120%;
  left: 5%;
`;

export const AnalysisText1 = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
`;

export const HoverDiv2 = styled.div`
  position: absolute;
  top: 75%;
  left: 5%;
  width: 524px;
  height: 50px;
  display: none;
  ${GraphAnalysisContainer}:hover & {
    display: block;
  }
`;