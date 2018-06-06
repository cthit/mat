import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { Heading } from "../../../common-ui/text";

export const HeaderContainer = styled.div`
  height: 103px;
  line-height: 103px;
  text-align: center;
  background-color: #44aedb;
  margin-bottom: 16px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const HeaderHeading = styled(Heading)`
  color: white;
`;
