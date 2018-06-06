import React from "react";

import { HeaderContainer, Link, HeaderHeading } from "./styles";

export const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <HeaderHeading>Mat</HeaderHeading>
    </Link>
  </HeaderContainer>
);
