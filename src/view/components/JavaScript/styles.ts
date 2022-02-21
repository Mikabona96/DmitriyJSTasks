// Core
import styled from 'styled-components';

export const Container = styled.section`
   display: flex;
   width: 100%;
`;
export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    overflow-y: scroll;
    height: 100vh;
    a {
        padding: 5px;
        color: blue;
        text-decoration: none;
        border: 1px solid blue;
        margin: 5px;
    }
`;
export const TaskWrapper = styled.div`
   margin-top: 30px;
`;
export const ContentWrapper = styled.div`

`;
export const Links = styled.div`
   display: flex;
    flex-direction: column;
    a {
        padding: 5px;
        color: blue;
        text-decoration: none;
        border: 1px solid blue;
    }
`;
export const Output = styled.div`
    width: 300px;
    margin: 0 auto;
`;
export const Response = styled.div`
    margin-top: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const Accordion = styled.div`
    & ~ {
      display: none;
    }
`;

