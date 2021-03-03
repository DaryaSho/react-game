import styled from "styled-components";

export const Container = styled.div`
text-align: center;
width: 35%;
`;

export const Button = styled.div`
font-family: 'Architects Daughter', cursive;
font-size: 40px;
padding-top: 23px;
height: 80px;
color: white;
background-color: rgba(11,92,29,0.8);
text-align: center;
cursor: pointer;
:hover{
opacity: 0.9;
}
`;

export const NumberContainer = styled.div`
display:flex;
flex-wrap: wrap;
background: rgba(255, 255, 255, 0.64);
`;

export const Number = styled.div`
font-size: 30px;
width: 33%;
cursor: pointer;
${props => props.isSelect ? "background: rgba(245, 123, 123, 0.42);" : ""}

:hover{
    background: rgba(245, 123, 123, 0.42);
}
`;