import styled from "styled-components";

export const Material = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};

  background-color: white;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.4);

  &:hover {
    box-shadow: ${props =>
      props.pliancy
        ? "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4)"
        : ""};
  }

  &:active {
    box-shadow: ${props =>
      props.pliancy
        ? "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)"
        : ""};
  }
`;

export const Divider = styled.hr``;
