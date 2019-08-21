import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px #b3b3b3 solid;

    &:last-child {
        border: none;
    }
`;

export const InformationContainer = styled.div`
    flex: 1;
`;

export const Title = styled.span`
    font-weight: bolder;
    margin: 0 0 0 0.6rem;
`;

export const Hyperlink = styled(NavLink)`
    color: #684ebc;

    &:hover {
        color: #904ebc;
    }

    &:visited {
        color: #684ebc;
    }
`;
