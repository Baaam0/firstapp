import styled from "styled-components";

const CardCont = styled.div`
  background-color: ${props=>props.bg_color}
`;

const DispImage = styled.img`
    width: 100%;
    padding: 1em;
    margin: ${props=>props.image_margin};
`;

export default function ImgTag({
  img="",
  marg="",
  bgcl="white"
}){

  return <CardCont bg_color={bgcl}> 
      <DispImage src={img} image_margin={marg}/>      
  </CardCont>

}