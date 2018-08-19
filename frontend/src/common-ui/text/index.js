import styled from "styled-components";

export const Heading = styled.h1`
  text-align: ${props => props.align};
  color: black;
  font-family: "Roboto Slab";
  font-weight: 300;
  margin: 0;
`;

export const HeadingLevel2 = styled.h2`
  text-align: ${props => props.align};
  color: black;
  font-family: "Roboto Slab";
  font-weight: 300;
  margin: 0;
`;

export const HeadingLevel3 = styled.h3`
  text-align: ${props => props.align};
  color: black;
  font-family: "Roboto Slab";
  font-weight: 300;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 12pt;
  color: black;
  font-family: "Roboto";
  margin: 0;
`;

export const Link = styled.a`
  color: #44aedb;

  text-decoration: none;
  font-weight: normal;
  font-size: 12pt;
  font-family: "Roboto";

  display: block;
`;

export const ListItem = styled.li`
  color: black;
  font-family: "Roboto";
`;
