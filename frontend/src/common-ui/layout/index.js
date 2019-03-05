import styled from "styled-components";

export const FlexAlignCenter = styled.div`
    display: flex;
    align-items: center;
`;

export const FlexJustifyContentCenter = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Margin = styled.div`
    margin: 4px; /*Half the standard margin*/
`;

export const MarginTop = styled.div`
    margin-top: 30px;
`;

export const Spacing = styled.div`
    width: 8px;
    height: 8px;
`;

export const Padding = styled.div`
    padding: 8px;
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const PaddingList = styled(Padding)`
    padding: 0px;
    padding-left: 20px;
`;
