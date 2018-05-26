import React from "react";
import { HeadingLevel2 } from "../../../../common-ui/text";
import { RectangleLinkMaterial, LinkToCategory } from "./styles";

export const RectangleLink = ({ text, link }) => (
  <RectangleLinkMaterial pliancy width="200px" height="200px">
    <LinkToCategory to={link}>
      <HeadingLevel2>{text}</HeadingLevel2>
    </LinkToCategory>
  </RectangleLinkMaterial>
);
