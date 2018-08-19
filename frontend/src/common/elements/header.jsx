import React from "react";

import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { Heading } from "../../common-ui/text";

export const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <HeaderHeading>Mat</HeaderHeading>
    </Link>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  height: 103px;
  line-height: 103px;
  text-align: center;
  background-color: #44aedb;
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;

const HeaderHeading = styled(Heading)`
  color: white;
`;
