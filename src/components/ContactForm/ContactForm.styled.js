import styled from "@emotion/styled";

export const AddForm = styled.form`
    padding: 16px;
    border: 1px solid gray;
`;

export const FormField = styled.label`
    display: block;

    :not(:first-of-type){
        margin-top: 8px;
    }
`;

export const FormData = styled.input`
    display: block;
    width: 100%;
    margin-top: 4px;
    padding: 4px;
`; 

export const FormBtn = styled.button`
    margin-top: 16px;
    padding: 8px 16px;
    
    border: 1px solid gray;
    border-radius: 4px;

    background: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    cursor: pointer;

    &:hover {
        background-color: #eeeeee;
    }
`;