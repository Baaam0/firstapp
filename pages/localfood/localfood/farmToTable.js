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
                img="/localfood/farmToTable.jpg"
                pagettl="5. Farm-to-Table"
                descTxt="Farm-to-table restaurants in Vancouver"
            />

        <LocalDetailItemCont>
            <Local_detail_item
                img="/localfood/1_local_food/farmToTable.jpg"
                itemttl="FARM TO TABLE MARKET"
                itemurl="https://farmtotablefinefoods.ca/"
                // itemheading="ー　Vegan Category"
                itemtxt="ー　Who they are
                Eight years ago, they opened Farm to Table Market in West Vancouver's quiet Ambleside Park neighbourhood. It was before Farm to Table that they were a buyer for a big chain of fruit and veg stores. Over time, they got to know a lot of the people who sell and grow food in their area. Learned about who are good at what, how to pick the best produce, and when to bring them inside.

                ー　They Promise Best Quality
                Their favourite thing is to buy everything locally and work with small-scale vendors and growers in the area. They do get some of our unique and special products from outside the country, but not all of them. For example, their cheeses are flown by air every week from our small-scale French and Italian cheesemakers because they are the best they can find.

                ー　2nd Shop
                They have just opened a second store in Yaletown. Their passion and knowledge can now be shared with people in the Yaletown neighbourhood as well as the Downtown core. They've found the right place and time to do this.

                ー　Online Store
                In 2020, they opened their Grocery online store in Vancouver. They offer free grocery delivery in the Metro Vancouver area."
            />

        </LocalDetailItemCont>

        <Navbar 
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
