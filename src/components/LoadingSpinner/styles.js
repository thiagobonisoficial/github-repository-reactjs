import styled from 'styled-components';

import { Rotate } from 'styles/Animations';

const Container = styled.div`
    margin: 0;
    padding: 0;
    animation: ${Rotate} 2s linear infinite;
`;

export default Container;
