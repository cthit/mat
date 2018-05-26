import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 16px;

  max-width: 300px;
  max-height: 320px;

  min-width: 300px;
  min-height: 320px;

  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;

export const Heading = styled.h2`
  margin: 0px;
`;

export const Text = styled.h3`
  font-size: 12pt;
  font-weight: normal;
  margin: 0px;
  margin-bottom: 8px;
`;

export const BaseLink = styled.a`
  font-size: 12pt;
  font-weight: normal;

  padding: 0px;

  margin: 0px;
  margin-top: 4px;
  margin-bottom: 4px;
  text-decoration: none;
  color: #44aedb;
  display: block;
`;

export const PhoneNumber = styled(BaseLink)``;

export const MapLink = styled(BaseLink)``;

export const Row = styled.div`
  width: 100%;
  display: flex;
`;

export const Column = styled.div`
  flex: 50%;
  text-transform: capitalize;
  text-align: ${props => (props.align != null ? props.align : "none")};
  padding: 5px;
`;

export const Cell = styled.div`
  display: block;
`;

export const BaseLinkButton = styled.a`
  float: right;
  height: 30px;
  line-height: 30px;
  padding: 4px;
  margin: 4px;
  border-radius: 4px;
  color: white;
  text-decoration: none;
`;

export const ShowMenuButton = styled(BaseLinkButton)`
  color: white;
  background-color: #44aedb;

  &:hover {
    background-color: #6fc1e3;
    cursor: pointer;
  }

  &:active {
    background-color: #2696c6;
  }
`;

export const ButtonGroup = styled.div`
  height: 38px;
  width: 100%;
  position: absolute;
  right: 8px;
  bottom: 16px;
`;

export const Icon = styled.img`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const IconAndLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.hr``;

export const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${props => (props.open === "open" ? "#05c46b" : "#ff3f34")};
  border-radius: 50%;
  display: inline-block;
`;

export const OpeningText = styled(Text)`
  display: inline-block;
  margin-left: 4px;
  margin-bottom: 0px;
`;

export const OpeningTimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
