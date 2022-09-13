import styled from "@emotion/styled";

export const ListItem = styled.li`
    display: flex;
    align-items: center;

    padding: 12px 8px;

    :not(:last-of-type) {
        border-bottom: 1px dotted  gray;
    }
`;

export const ContactName = styled.span`
    position: relative;

    :after {
        content: ':';
        display: inline-block;
        position: absolute;
        left: calc(100% + 2px);
        
        width: 1px;
        height: 100%;

    }
`;
export const ContactPhone = styled.span`
    margin-left: 16px;
`;

export const DeleteBtn = styled.button`
    margin-left: auto;
`;