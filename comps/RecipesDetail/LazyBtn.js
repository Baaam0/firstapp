import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledLazyBtn = styled.div`
font-family: 'm plus 1', sans-serif;
display:flex;
flex-direction: row;
background-color:#EF7F63; 
height:35px;
width:250px;
border-radius:20px;
color:${props=>props.text_color};
margin:40px 10px 40px 0;
`

const Icon = styled.img`
height:24px;
margin-left:24px;
margin-top:6px;
`

const Text = styled.p`
margin-left:7px;
margin-top:5px;
`

export default function LazyBtn({
  img="/tablewareIcon.png", 
  bg="red",
  tcl="#FFF"
}){

  const r = useRouter();

  return <StyledLazyBtn color={bg} text_color={tcl} onClick = {()=>r.push("/restaurant")}>
    <Icon src={img} />
    <Text>View vegan restaurants</Text>
  </StyledLazyBtn>

}