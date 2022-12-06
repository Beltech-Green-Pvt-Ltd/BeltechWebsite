import styled from "styled-components";
import Colors from "../../styles/color";
import { Link } from "react-router-dom";

export const JobDescriptionDetailsContainer = styled.div`
  width: 1024px;
  margin-left: 20px;
  margin-top: 50px;
  background-color: white;
  border-radius: 8px;
`;

export const NoJobDescriptionDetailsContainer = styled.div`
  min-height: 1000px;
  width: 816px;
  margin-left: 20px;
  margin-top: 50px;
`;

export const NoJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NoJobSelected = styled.img`
  width: 217px;
  height: 217px;
`;

export const NoJobText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #888595;
`;

export const HeaderContainer = styled.div`
  padding: 48px 48px 0px 48px;
`;

export const JobsName = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #130f26;
`;

export const ApplyContainer = styled.div`
  padding: 0px 48px 0px 48px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ApplyButton = styled(Link)`
  width: 125.42px;
  height: 45px;
  background: #006ae9;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 18px;
  text-decoration: none;
`;

export const UnderLine = styled.div`
  height: 1.5px;
  background: #c1c0c0;
`;

export const DescriptionContainer = styled.div``;

export const RoleResponsibiltiesContainer = styled.div`
  padding: 0px 48px 0px 48px;
  margin-top: 35px;
`;

export const JobHeadings = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #161616;
`;

export const PointsContainer = styled.div`
    margin-top: 12px;
`;

export const Point = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-size: 14px;
`;

export const PointText = styled.div`
    margin-left: 12px;
`;

export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #FFB600;;
`;
