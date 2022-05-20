import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledCard = styled.li`
    display:flex;
    flex-direction:column;
    color:${props=>props.text_color};
    // background:#E0E8FD;
    background:${props=>props.bg_color};
    height:auto;
    width:100%;
    font-family: 'm plus 1', sans-serif;
    padding:60px 20px 60px 0;
    align-items: end;
`;

const ImgBox = styled.div`
    width:300px;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TxtBox = styled.div`
    display:flex;
    flex-direction: column;
    width:300px;
    padding: 20px;
    align-items:end;
`;

const ItemTtl = styled.h3`
    font-family: 'm plus 1', sans-serif;
    font-size:24px;
    width:100%;
`;

const ItemUrl = styled.h4`
    font-family: 'm plus 1', sans-serif;
    font-size:16px;
    width:100%;
    font-style:italic;
    font-weight:100;
    white-space: pre-wrap;
    word-wrap: break-word;
`;

const ItemHeading = styled.h4`
    font-family: 'm plus 1', sans-serif;
    font-size:16px;
    width:100%;
    font-weight:bold;
`;

const ItemTxt = styled.p`
    font-family: 'm plus 1', sans-serif;
    font-size:16px;
    width:100%;
`;

export default function Local_detail_item({
    img="/recipes1.png",
    tcl="#08213E",
    bgc="#E0E8FD",
    itemttl="1. Uber Eats",
    itemurl="https://www.ubereats.com/ca/category/vancouver-bc/vegan",
    itemheading="ー　Vegan Category",
    itemtxt="There is a Vegan category"
}){

    const r = useRouter();
    // const {page, type} = r.query;

  return <StyledCard text_color={tcl} bg_color={bgc}>
    <ImgBox>
      <Img src={img} />
    </ImgBox>

    <TxtBox>
      <ItemTtl>{itemttl}</ItemTtl>
      <ItemUrl>{itemurl}</ItemUrl>
      <ItemHeading>{itemheading}</ItemHeading>
      <ItemTxt>{itemtxt}</ItemTxt>
    </TxtBox>

  </StyledCard>

}
