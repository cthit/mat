import styled from "styled-components";

import { Material } from "../../../../common-ui/design";
import { NavLink } from "react-router-dom";

export const RectangleLinkMaterial = styled(Material)`
  text-align: center;
`;

export const LinkToCategory = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.h2`
  color: black;
  margin: 0;
`;
