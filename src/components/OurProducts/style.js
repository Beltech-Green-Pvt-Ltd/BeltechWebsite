import styled from "styled-components";
import Ai from "../../assets/AI2.png";
import Color from "../../styles/color";
import ravi from "../../assets/AI.png";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 881px;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    linear-gradient(232.44deg, #233c7b 36.39%, #2e1e89 79.05%);
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 79px;
`;

export const HeadingText = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: -0.3px;
  color: white;
`;

export const ViewAllButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  position: relative;
`;

export const ViewAllButton = styled(Link)`
  width: 187px;
  height: 56px;

  border: 3px solid #5277f7;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  /* identical to box height */
  letter-spacing: -0.3px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: -55px;
  text-decoration: none;
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 560px !important;
  height: 389px;
`;

export const InfoContainer = styled.div`
  background-image: url(${Ai});
  width: 688px;
  height: 570px;
  padding-top: 20px;
  padding-left: 66px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  background-size: contain;
`;

export const ProductHeadingText = styled.div`
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: white;
  text-align: left;
  width: 455px;
`;

export const BulletPoint = styled.div`
  background-color: ${Color.primaryColor};
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

export const ListContainer = styled.div`
  margin-top: 38px;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
`;

export const ListText = styled.div`
  color: white;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  padding: 8px;

  /* identical to box height */
  letter-spacing: -0.3px;

  color: #d9d9d9;
`;

export const KnowMoreButton = styled(Link)`
  background-color: ${Color.primaryColor};
  border-radius: 8px;
  width: 161.28px;
  height: 56px;
  color: white;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  /* identical to box height */
  letter-spacing: -0.3px;
  margin-top: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
