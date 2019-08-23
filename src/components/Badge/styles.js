import styled from 'styled-components';

const Span = styled.span`
    width: auto;
    height: 1.3rem;
    margin: ${({ margin }) => margin};
    padding: 0.2rem 0.4rem 0 0.4rem;
    font-size: 0.8rem;
    font-weight: bolder;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 2px;
`;

export default Span;
