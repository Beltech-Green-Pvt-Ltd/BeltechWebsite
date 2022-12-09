import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 775px;
    @media (max-width: 1330px) {
        height: 710px;
    }
    @media (max-width: 1330px) {
        height: 650px;
    }
`;

export const Container = styled.div`
    max-width: 1580px;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Image = styled.img`
    max-width: 64%;
`;

export const HeadingContainer = styled.div`
    width: 450px;
    margin-left: 10%;
    margin-top: 138px;
    position: relative;
`;

export const HeadingText = styled.h1`
    position: relative;
    font-size: 85px;
    font-weight: 600;
    @media (max-width: 1330px) {
        font-size: 75px;
    }
    @media (max-width: 1200px) {
        font-size: 70px;
    }
`;

export const Circle = styled.div`
    background-color: #FFC800;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    position: absolute;
    right: 12%;
    top: 60px;
    @media (max-width: 1330px) {
        width: 90px;
        height: 90px;
    }
    @media (max-width: 1200px) {
        width: 80px;
        height: 80px;
        top: 54px;
    }
`;

export const Circle2 = styled.div`
    background-color: #FF8300;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    right: 0;
    bottom: 8%;
    @media (max-width: 1200px) {
        width: 40px;
        height: 40px;
        bottom: 10%;
    }
`;

export const SubHeadingText = styled.h2`
    color: #1F6AFF;
    font-size: 40;
    @media (max-width: 1330px) {
        font-size: 36px;
    }
    @media (max-width: 1200px) {
        font-size: 30px;
    }
`;