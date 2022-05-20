import styled from "styled-components";
import { useRouter } from 'next/router';

const StyledTopBtn = styled.div`
display:flex;
flex-direction:column;
align-items:end;
color:${props=>props.text_color};
font-family: 'm plus 1', sans-serif;
font-size:12px;
`

const Image = styled.img`
width:50px;
`
const Text = styled.p`
margin-top:-5px;
margin-right:15px;
`

export default function TopBtn({
  img="/topBtn.png", 
  tcl="#EF7F63"
}){

  const r = useRouter();

  return <StyledTopBtn text_color={tcl} onClick = {()=>window.scrollTo(0,0)}>
    <Image src={img} />
    <Text>Top</Text>
  </StyledTopBtn>
}