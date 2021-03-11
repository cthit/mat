import styled from "styled-components";
import { Link } from "react-router-dom";

export const NonStyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const NonStyledALink = styled.a`
    text-decoration: none; /* no underline */
`;
