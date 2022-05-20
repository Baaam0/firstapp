import styled from 'styled-components';

const StyledStepsBox = styled.div`
font-family: 'm plus 1', sans-serif;
display:flex;
flex-direction: column;
color:${props=>props.text_color};
background-color: #ffffff;
width:360px;
`;

const Step = styled.div`
display:flex;
flex-direction: row;
width:300px;
margin-right:0;
margin-left:60px;
`
const Number = styled.p`
color:#ef7f63;
font-size:36px;
font-weight: bold;
margin-top:8px;
`

const Text = styled.p`
margin-left:20px;
margin-top:15px;
margin-right:15px;
`

const Image = styled.img`
width:360px;
`

export default function StepsBox({
  img="/rectangle_19.png", 
  tcl="#08213e",
  number="1",
  text="Place sliced tofu between kitchen towels and place a heavy pot to absorb water."
}){
  return <StyledStepsBox text_color={tcl}>
  
  <Step>
    <Number>{number}</Number>
    <Text>{text}</Text>
  </Step>

  <Image src={img} />
</StyledStepsBox>
}