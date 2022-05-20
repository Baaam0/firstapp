import styled from 'styled-components';
import { useRouter} from 'next/router';
import {imgDatebase,titleDatebase,paraDatebase} from '../../data/recipes_content';

const StyledCard = styled.div`
font-family: 'm plus 1', sans-serif;
color:${props=>props.text_color};
width:300px;
display:flex;
top:${props=>props.top_prop}; 
right:10px;
padding-top:40px;
align-item: left;
`;

const Image = styled.img`
float:left;
width:35%;
border-radius:20px 0px 0px 20px;
`;

const ColumR = styled.span`
float:right;
padding-left:20px;
padding-right:5px;
background-color:#FFFFFF
`

const Title = styled.p`
color:${props=>props.text_color};
font-family: 'm plus 1', sans-serif;
font-size:18px;
`;

const Para = styled.p`
font-size:14px;
`



export default function RecipeCard({
  tcl="#08213E",
  img="/recipes1.png", 
  title = "Tofu Banh Mi",
  paragraph = "Vietnamese sandwich made of baguette.",
  path="/RecipesDetail_Tofu1"
}){

  const r = useRouter();

  return <StyledCard text_color={tcl} onClick = {()=>r.push({pathname:"" + String(path)})} >
    <Image src={img} />

    <ColumR>
      <Title>{title}</Title>
      <Para>{paragraph}</Para>
    </ColumR>
    
  </StyledCard>

}