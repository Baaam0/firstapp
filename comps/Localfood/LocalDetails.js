import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledCard = styled.div`
    display:flex;
    flex-direction:column;
    color:${props=>props.text_color};
    height:auto;
    width:360px;
    font-family: 'm plus 1', sans-serif;
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

const PageTtl = styled.h2`
    position:absolute;
    color:#fff;
    font-family: 'm plus 1', sans-serif;
    font-size:24px;
    width:100%;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    text-shadow: 2px 2px 3px black;
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


export default function Local_detail_top({
    img="/recipes1.png",
    pagettl="1. Pickup / Delivery",
    tcl="#08213E",
    descTxt="Services you can subscribe to pickup or get delivered local dish/food",
}){

    const r = useRouter();
    // const {page, type} = r.query;

  return <StyledCard text_color={tcl}>
    <ImgBox>
      <Img src={img} />
      <PageTtl>{pagettl}</PageTtl>
    </ImgBox>

    <TxtBox>
      <PageDesc>{descTxt}</PageDesc>
    </TxtBox>

  </StyledCard>

}
