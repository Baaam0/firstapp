import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledIngBox = styled.div` 
font-family: 'm plus 1', sans-serif;
display:flex;
flex-direction: column;
color:${props=>props.text_color};
background-color: #ffffff;
border-radius:20px 0px 0px 20px;
width:360px;
`;

const ImageIng = styled.img`
height:220px;
width:360px;
border-radius:20px 0px 0px 0px;
`

const Box1 = styled.div`
display:flex;
flex-direction: column;
width:350px;
margin-left:10px;
`
const Box2 = styled.div`
display:flex;
flex-direction: row;
width:350px;
`

const Box2_1 = styled.ul`
width:220px;
`

const Box2_2 = styled.div`
display:flex;
flex-direction: column;
margin-top:40px;
`

const Box2_3 = styled.div`
display:flex;
flex-direction: column;
margin-top:50px;
margin-left:10px;
`
const IconText = styled.p`
color:#EF7F63;
font-size:13px;
margin-top:10px;
`
const Paragraph = styled.p`
color:#878686;
`

const FindIcon = styled.img`
height:25px;
width:20px;
margin-top:15px;
margin-bottom:1px;
`

export default function IngBox({
  img="/rectangle_18.png", 
  tcl="#08213E",
  common="",
  rare1="",
  rare2="",
  rare3=""
}){
  const r = useRouter()

  return <StyledIngBox text_color={tcl}>
  <ImageIng src={img} />
  <Box1>
    <h3>Ingredients</h3>
    <ul>
      <li>Common ingredients</li>
      <Paragraph>{common}</Paragraph>
    </ul>
  </Box1>

  <Box2>
    <Box2_1>
      <li>Rare ingredients</li>
      <Paragraph>{rare1}</Paragraph>
      <Paragraph>{rare2}</Paragraph>
      <Paragraph>{rare3}</Paragraph>
    </Box2_1>

    <Box2_2>
      <FindIcon src="/findIcon.png" onClick = {()=>r.push("/localfood/localfood/groceryStore")}/>
      <FindIcon src="/findIcon.png" onClick = {()=>r.push("/localfood/localfood/farmToTable")}/>
      <FindIcon src="/findIcon.png" onClick = {()=>r.push("/localfood/localfood/farmersMarket")}/>
    </Box2_2>

    <Box2_3>
      <IconText onClick = {()=>r.push("/localfood/localfood/groceryStore")}>Where to find</IconText>
      <IconText onClick = {()=>r.push("/localfood/localfood/groceryStore")}>Where to find</IconText>
      <IconText onClick = {()=>r.push("/localfood/localfood/groceryStore")}>Where to find</IconText>
    </Box2_3>
  </Box2>

</StyledIngBox>
}