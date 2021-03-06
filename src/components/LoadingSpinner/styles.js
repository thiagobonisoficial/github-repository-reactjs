import styled from 'styled-components';

import { Rotate } from 'styles/Animations';

const Container = styled.div`
    margin: 0;
    padding: 0;

    svg {
        color: ${({ theme }) => theme.color};
        animation: ${Rotate} 2s linear infinite;
    }
`;

export default Container;
