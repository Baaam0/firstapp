import Navbar from "../../../comps/Navbar";
import MainMenu from "../../../comps/MainMenu";
import Local_relatedpage_top from "../../../comps/Localfood/LocalRelatedpageTop";
import Local_detail_item from "../../../comps/Localfood/LocalDetailItem";
import styled from 'styled-components';

const LocalWrap = styled.div`
    background:#E0E8FD;
    display: flex;
    flex-direction: column;
    align-items: end;
    overflow:hidden;
`;

const LocalDetailItemCont = styled.ul`
    display:flex;
    align-items:end;
    justify-content:end;
    flex-direction:column;
    gap: 60px;
    width:100%;
    background:#E0E8FD;
    padding:0;
`;

const HowToCatTtl = styled.h1`
    width:100%;
`;

const LocalPageTtl = styled.h2`
    width:100%;
    margin-bottom:0;
`;


export default function LocalFood(){
    return (
    <LocalWrap>
        <MainMenu></MainMenu>

        <HowToCatTtl>Made in Canada</HowToCatTtl>

        <Local_relatedpage_top
                img="/localfood/3_made_in_canada/madeInCanada.jpg"
                descTxt="&quot;Product of Canada&quot; and &quot;Made in Canada&quot; labels"
            />

        <LocalDetailItemCont>
            <Local_detail_item
                img="/localfood/2_vegan_logo/knowWhatToSupport.jpg"
                bgc="#fff"
                itemttl="1. Uber Eats"
                itemurl="https://www.ubereats.com/ca/category/vancouver-bc/vegan"
                itemheading="ー　Vegan Category"
                itemtxt="There is a Vegan category"
            />

        </LocalDetailItemCont>

        <Navbar 
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
