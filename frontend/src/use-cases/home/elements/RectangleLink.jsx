import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Material } from "../../../common-ui/design";
import { HeadingLevel2 } from "../../../common-ui/text";

export const RectangleLink = ({ text, link }) => (
  <RectangleMaterial pliancy width="200px" height="200px">
    <LinkToCategory to={link}>
      <HeadingLevel2>{text}</HeadingLevel2>
    </LinkToCategory>
  </RectangleMaterial>
);

const RectangleMaterial = styled(Material)`
  text-align: center;
`;

const LinkToCategory = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
