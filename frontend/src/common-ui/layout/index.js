import styled from "styled-components";

export const Margin = styled.div`
  margin: 8px;
`;

export const Spacing = styled.div`
  width: 8px;
  height: 8px;
`;

export const VerticalPadding = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  flex: 1;
  flex-direction: column;
`;

export const HorizontalPadding = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex: 1;
  flex-direction: column;
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
