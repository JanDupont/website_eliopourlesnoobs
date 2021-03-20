import styled from 'styled-components';

export const SetsContainer = styled.div`
    min-height: 100vh;
    background: #010606;
    width: 100%;

    @media screen and (max-width: 768px){
        min-height: 1100px;
    }

    @media screen and (max-width: 480px){
        min-height: 1300px;
    }
`;

export const TopLine = styled.p`
    color: #24888B;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 12px;
    text-align: center;
    padding-top: 50px;
`;

export const SetsWrapper = styled.div`
    padding-top: 3rem;
    width: 100%;
    
    @media screen and (max-width: 768px){
        padding: 0;
    }
`;