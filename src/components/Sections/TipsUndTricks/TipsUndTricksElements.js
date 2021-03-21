import styled from 'styled-components';

export const TipsTricksContainer = styled.div`
    min-height: 100vh;
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const TipsTricksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    min-height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const TipsTricksTop = styled.div`
    margin-top: 50px;
    margin-bottom: -30px;
`;

export const TipsTricksRow = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: start;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    margin-top: 50px;

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const ContentWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #24888B;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Text = styled.p`
    max-width: 100%;
    margin-bottom: 45px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const TopSubtitle = styled.p`
    margin-bottom: 45px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    margin-top: 45px;
    display: flex;
    justify-content: center;
`;

export const ImgWrap = styled.div`
    max-width: 350px;
    height: 100%;
    margin: 10px;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const Zauber = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    width: 100%;
`;

export const ZauberBild = styled.img`
    height: 55px;
    width: 55px;
    margin-right: 10px;
`;

export const ZauberText = styled.div`
    text-align: left;
`;

export const Topic = styled.div`
    margin-top: 40px;
    margin-bottom: 50px;
`;

export const TopicContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;