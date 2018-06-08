import React from "react";
import styled from "styled-components";
import { RectangleLink } from "./RectangleLink";
import { Spacing } from "../../../common-ui/layout";

export const Links = data => (
  <Container>
    {Object.keys(data.categories).map(categoryName => (
      <RectangleLinkContainer key={categoryName + ":"}>
        <RectangleLink
          key={categoryName}
          text={_getDisplayName(categoryName)}
          link={"/" + categoryName}
        />
        <Spacing key={categoryName + "."} />
      </RectangleLinkContainer>
    ))}
  </Container>
);

function _getDisplayName(categoryName) {
  switch (categoryName) {
    case "pizza":
      return "Pizza";
    case "thai":
      return "Thai";
    case "other":
      return "Övrigt";
    case "hamburger":
      return "Hamburgare";
    case "sushi":
      return "Sushi";
    default:
      return categoryName;
  }
}

const RectangleLinkContainer = styled.div``;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
