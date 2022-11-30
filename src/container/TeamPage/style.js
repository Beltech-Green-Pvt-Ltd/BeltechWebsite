import styled from "styled-components";
import Colors from "../../styles/color";

export const MainContainer = styled.div`
  justify-content: center;
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
  background-color: #ffc800;
  position: absolute;
  top: 19%;
  left: -10%;
  z-index: -1;
`;

export const HeadingText = styled.h1`
  font-size: 60px;
`;

export const CoreTeamContainer = styled.div`
  position: relative;
  background-color: ${Colors.primaryColor};
  min-height: 610px;
  margin-top: 40px;
  background: linear-gradient(180deg, #ffffff 50%, #006ae9 50%);
`;

export const TeamProfileContainer = styled.div`
  width: 368px;
  height: 459px;
  left: 100px;
  top: 396px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
`;

export const TeamProfiles = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.3px;
  margin-top: 51px;
`;

export const Designation = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.3px;
  margin-top: 21px;
`;

export const CollegeText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: #51535a;
  margin-top: 12px;
`;

export const AdvisoryBoardContainer = styled.div``;

export const AdvisoryBoardTeamContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 167px;
    margin-bottom: 117px;
`;

export const AdvisoryTeamCard = styled.div`
  max-height: 325px;
  width: 580px;
  background-color: #f4f4f4;
  display: flex;
`;

export const AdvisoryTeamImage = styled.img`
  width: 230px;
  height: 340px;
  position: relative;
  left: 20px;
  bottom: 70px;
`;

export const AdvisoryTeamInfo = styled.div`
  margin-left: 50px;
`;

export const AdName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.3px;
  margin-top: 21px;
`;

export const AdDesg = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: #006ae9;
  margin-top: 15px;
  width: 232px;
`;

export const AdExp = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: #000000;
  margin-top: 70px;
  width: 231px;
`;
