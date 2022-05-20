import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledCard = styled.div`
    display:flex;
    flex-direction:column;
    color:${props=>props.text_color};
    height:auto;
    width:100%;
    font-family: 'm plus 1', sans-serif;
    border-radius: 20px 0 0 20px;
    overflow: hidden;
`;

const ImgBox = styled.div`
    height: 300px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TxtBox = styled.div`
    display:flex;
    flex-direction: column;
    background:#fff;
    padding: 20px;
    align-items:end;
`;

const CardTtl = styled.h2`
    color:${props=>props.text_color};
    font-family: 'm plus 1', sans-serif;
    font-size:24px;
    width:100%;
`;

const Txt = styled.p`
    color:${props=>props.text_color};
    font-family: 'm plus 1', sans-serif;
    font-size:16px;
`;

const Btn = styled.button`
    color: #fff;
    font-family: 'm plus 1',sans-serif;
    background: #ef7f63;
    border: none;
    border-radius: 8px;
    width: 70px;
    font-size: 16px;
    padding: 10px 0;
`;



export default function Local_card({
    img="/recipes1.png",
    tcl="#08213E",
    cardttl="1. Pickup / Delivery",
    paragraph="Services you can subscribe to pickup or get delivered local dish/food",
    btntxt="MORE",
    path="/pickup"
}){

    const r = useRouter();
    // const {page, type} = r.query;

  return <StyledCard text_color={tcl}>
    <ImgBox>
      <Img src={img} />
    </ImgBox>

    <TxtBox>
      <CardTtl>{cardttl}</CardTtl>
      <Txt>{paragraph}</Txt>
      <Btn onClick={
        ()=>r.push({
          pathname:"/localfood/localfood" + String(path)
        })
        }
      >{btntxt}</Btn>
    </TxtBox>

  </StyledCard>

}
