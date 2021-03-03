import styled from "styled-components";
import {MainContainer} from "../styled";
import { device } from "../../model/device";

export const Container = styled(MainContainer)`
  position: absolute;
  bottom: 0px;
  height: 70px;
  font-size: 40px;
  font-weight: 800;
  @media ${device.tablet} { 
    height: 50px;
    }
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 15px;
  @media ${device.tablet} { 
    height: 30px;
    }
`;
