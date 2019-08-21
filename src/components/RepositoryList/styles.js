import styled from 'styled-components';

const Container = styled.div`
    width: auto;
    height: ${({ scroll }) => (scroll ? '40vh' : 'auto')};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin: 1.5rem 0 0 0;
`;

export default Container;
