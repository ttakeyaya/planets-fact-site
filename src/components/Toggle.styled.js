import styled from "styled-components";
import { device } from "../common/media";

export const HamburgerIconContainer = styled.div`
  cursor:pointer;
  @media ${device.tablet}{
    display: none;
  }
`;