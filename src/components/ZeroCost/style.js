import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 300px;
`;

export const Container = styled.div`
  max-width: 1580px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  display: flex;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(267.04deg, #006ae9 15.68%, #4b19dc 60.83%, #520292 118.55%);

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeadingText = styled.div`
    color: white;
    font-size: 72px;
    font-weight: 800;
`;

export const SubHeadingText = styled.div`
    color: white;
    font-size: 48px;
`;