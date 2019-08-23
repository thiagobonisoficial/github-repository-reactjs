import styled from 'styled-components';

const Img = styled.img`
    width: ${({ theme }) => theme.width};
    height: ${({ theme }) => theme.height};
    margin: ${({ margin }) => margin};
    border-radius: 50%;
    object-fit: cover;
    vertical-align: middle;
`;

export default Img;
