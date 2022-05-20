import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledCard = styled.div`
    display:flex;
    flex-direction:column;
    color:${props=>props.text_color};
    height:auto;
    width:360px;
    font-family: 'm plus 1', sans-serif;
    padding-bottom: 100px;
`;

const TxtBox = styled.div`
    display:flex;
    flex-direction: column;
    padding: 20px;
    align-items:end;
`;

const PageDesc = styled.h3`
    color:#ef7f63;
    font-family: 'm plus 1', sans-serif;
    font-size:24px;
    width:100%;
`;

const ImgBox = styled.div`
    height: 300px;
    position: relative;
    border-radius: 20px 0 0 20px;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default function Local_relatedpage_top({
    img="/recipes1.png",
    tcl="#08213E",
    descTxt="&quot;Suitable For Vegans&quot&#059 and &amp;quot;Certified Vegan&amp;quot; labels&quot;",
}){

    const r = useRouter();
    // const {page, type} = r.query;

  return <StyledCard text_color={tcl}>

    <TxtBox>
      <PageDesc>{descTxt}</PageDesc>
    </TxtBox>

    <ImgBox>
      <Img src={img} />
    </ImgBox>

  </StyledCard>

}
