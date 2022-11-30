import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 603px;
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
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: -0.3px;
  color: #130f26;
`;

export const ContactContainer = styled.div`
  margin-top: 123px;
  display: flex;
  justify-content: space-around;
`;
