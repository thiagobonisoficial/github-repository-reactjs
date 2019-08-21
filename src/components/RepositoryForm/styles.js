import styled from 'styled-components';

export const Form = styled.form`
    width: auto;
    height: auto;
    display: flex;
    margin: 2rem 0 0 0;
`;

export const InputRepository = styled.input`
    width: 3rem;
    height: 3rem;
    flex: 1;
    margin: 0 0.5rem 0 0;
    padding: 1rem;
    font-size: 1rem;
    color: #7159c1;
    border: 1px solid #eeeeee;
    border-radius: 4px;

    &:focus {
        border-color: #7159c1;
    }

    &:disabled {
        color: #b3b3b3;
    }
`;

export const SubmitButton = styled.button`
    width: 3rem;
    height: 3rem;
    color: white;
    background-color: #7159c1;
    border: none;
    border-radius: 4px;

    &:disabled {
        background-color: #b3b3b3;
    }

    svg {
        vertical-align: middle;
    }
`;
