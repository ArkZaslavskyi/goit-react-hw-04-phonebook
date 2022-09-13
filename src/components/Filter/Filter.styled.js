import styled from "@emotion/styled";

export const FilterField = styled.label`
    display: inline-block;
    width: 75%;

    :not(:first-of-type){
        margin-top: 8px;
    }
`;

export const FilterData = styled.input`
    display: block;
    width: 100%;
    padding: 4px;

    margin-top: 4px;
`; 
