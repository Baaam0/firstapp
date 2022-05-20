import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledTofuComp = styled.div`
color:${props=>props.text_color};
font-family: 'm plus 1', sans-serif;
display: flex;
flex-direction: column;
align-items:end;
margin: 10px;
`;

const IntroBox = styled.span`
background-color:${props=>props.color}; 
height:250px;
width:250px;
padding:10px;
border-radius:20px;
text-align:center;
margin: 0;
margin-left: auto;
`;
//;;;;;

const Image = styled.img`
top:310px;
height:250px;
width:250px;
margin-top: -20px;
margin-right: 80px;
border-radius: 25px;

`;

const LinkBox = styled(StyledTofuComp)`
height:60px;
width:270px;
text-align:right;
margin-right:0;
margin-top:15px;
display:flex;
flex-direction:row;
align-items:center;
gap:20px;
`;

//123

const BtnText = styled.p`
right:35px;
top:40px;
color:#A2B0D3;
`;

const CartBtn = styled.img`
top:310px;
height:35px;
width:35px;
`;

const Mark = styled.a`
color:#EF7F63
`;

export default function TofuComp({
  img="/tofu.png", 
  bgcl="#E0E8FD",
  tcl="#08213E",
  h2="Tofu",
  p="Tofu is an excellent source of protein in fact, it is a rare vegan choice that is a complete source of protein, which means it contains all nine amino acids",
}){

  const r = useRouter();

  return <StyledTofuComp text_color={tcl}>
    <IntroBox color={bgcl}>
      <h2>{h2}</h2>
      <p>{p}</p>
    </IntroBox>

    <Image src={img} />

    <LinkBox onClick = {()=>r.push("/localfood/localfood")} >
      <BtnText>Get the fresh <Mark>{h2}</Mark> at your local market</BtnText>
      <CartBtn src="/cartBtn.png" />
    </LinkBox>

  </StyledTofuComp>
}