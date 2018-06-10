import React from "react";
import styled from "styled-components";

export const RestaurantButtons = ({ linkToMenu }) => (
  <Body>
    <Button target="_blank" href={linkToMenu}>
      Visa meny
    </Button>
  </Body>
);

const Body = styled.div`
  width: 100%;
`;

const Button = styled.a`
  font-family: "Roboto";
  text-align: center;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  background-color: #44aedb;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #6fc1e3;
    cursor: pointer;
  }

  &:active {
    background-color: #2696c6;
  }
`;
