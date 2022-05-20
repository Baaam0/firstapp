import Navbar from "../../../comps/Navbar";
import MainMenu from "../../../comps/MainMenu";

import Local_detail_top from "../../../comps/Localfood/LocalDetails";
import Local_detail_item from "../../../comps/Localfood/LocalDetailItem";
import styled from 'styled-components';

const LocalWrap = styled.div`
    background:#fff;
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

        <HowToCatTtl>Local Food</HowToCatTtl>

        <Local_detail_top
                img="/localfood/seafood.jpg"
                pagettl="4. Local Seafood"
                descTxt="Places in Vancouver where you can buy local seafood"
            />

        <LocalDetailItemCont>
            <Local_detail_item
                img="/localfood/1_local_food/skipperOtto.jpg"
                itemttl="1. Skipper Otto"
                itemurl="https://skipperotto.com/"
                itemtxt="Skipper Otto is a member-based Community Supported Fishery that has grown a lot in the last 10 years. You pay a fee to get fish from them. For example, with Skipper Otto, home cooks in the Lower Mainland (and beyond) can buy a share of the catch from about 30 different BC fishing families for the whole year. Families who fish for Ocean Wise earn a living wage thanks to this commitment. It also ensures that their fish will be sold, and it gives anyone who joins before May 31 each year the chance to get hyper-traceable, premium seafood directly from the fishermen."
            />

        </LocalDetailItemCont>

        <Navbar 
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
