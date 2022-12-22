import styled, { css } from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        background-color: #CC37FA;
        cursor:pointer;
        color: #FFF;
    }
    ${({disabled}) => disabled === true && css`
    opacity: 0.6;    
    &:hover {
        cursor:not-allowed;
    }
`}
`