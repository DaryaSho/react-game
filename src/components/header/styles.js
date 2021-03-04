import styled from "styled-components";
import {MainContainer} from "../styled";
import { device } from "../../model/device";

export const Container = styled(MainContainer)`
height: 20%;
max-height: 100px;
padding-top: 20px;
font-size: 30px;
@media ${device.tablet} { 
    height: 10%;
    font-size: 20px;
    }
`;

export const DifficultyContainer = styled.div`
flex-direction: column;
cursor: pointer;
margin-left: 20px;
font-weight: 600;
text-align: start;
z-index: 9999;
width: 150px;
background-color: white;
opacity: 0.7;
`;

export const Button = styled.div`
cursor: pointer;
margin-left: 20px;
`;

export const DifficultyName = styled.div`
width: 150px;
font-weight: ${props => props.isValue ? 600 : 400}; 
&:hover {
    opacity: 0.7;
}
`;

export const LifeContainer = styled.div`
width: 50%;
`;

export const Life = styled.img`
height: 50px;
margin-right: 5%;
@media ${device.tablet} { 
    display: none;
    }
`;

export const MusicContainer = styled.div`
display: flex;
padding-left: 20px;
height: 45px;
background: rgba(255,255,255,0.94);
border-radius: 20px;
`;

export const MusicButton = styled.div`
width: 100px;
margin-left: 10px;
border-radius: 20px;
background: ${props => !props.isPause ? "rgba(245, 123, 123, 0.42)" : "rgba(11, 92, 29, 0.34)"}; 
`;
