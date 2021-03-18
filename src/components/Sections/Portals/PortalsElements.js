import styled from 'styled-components';

export const PortalsContainer = styled.div`
    min-height: 100vh;
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;