import styled from "styled-components";

import { Text, Link } from "../../../../common-ui/text";
import { Material } from "../../../../common-ui/design";

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

export const PhoneNumber = styled(Link)``;

export const MapLink = styled(Link)``;

export const RestaurantMaterial = styled(Material)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MaterialBody = styled.div`
  flex-grow: 1;
`;

export const MaterialButtons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
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

export const OpeningText = styled(Text)`
  display: inline-block;
  margin-left: 4px;
  margin-bottom: 0px;
`;
