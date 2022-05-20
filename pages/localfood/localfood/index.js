import Navbar from "../../../comps/Navbar";
import MainMenu from "../../../comps/MainMenu";
import Local_card from "../../../comps/Localfood/LocalCard";
import styled from 'styled-components';
import SideNav from "../../../comps/Navbar/SideNav";

const LocalWrap = styled.div`
    background: #E0E8FD;
    display: flex;
    flex-direction: column;
    align-items: end;
`;

const LocalCardCont = styled.div`
    display:flex;
    align-items:end;
    justify-content:end;
    flex-direction:column;
    gap: 60px;
    width:300px;
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

        <SideNav 
        bcl="#A2B0D3"
        index1="Local Food"
        index2="Vegan Logo"
        index3="Made in Canada"
        index4="Seasonal Food"
        mar="5em 1em"
        ></SideNav>

        <LocalCardCont>
        <LocalPageTtl>5 ways of how to find local food</LocalPageTtl>
            <Local_card
                img="/localfood/pickup.jpg"
                cardttl="1. Pickup / Delivery"
                paragraph="Services you can subscribe to pickup or get delivered local dish/food"
                path="/pickup"
            />

            <Local_card
                img="/localfood/farmersMarkets.jpg"
                cardttl="2. Farmers&#39; Markets (VFM)"
                paragraph="Farmers markets in Vancouver where you can buy local food"
                path="/farmersMarket"
            />

            <Local_card
                img="/localfood/grocerystore.jpg"
                cardttl="3. Grocery Stores &amp; Markets"
                paragraph="Grocery stores &amp; markets in Vancouver where you can buy local food."
                path="/groceryStore"
            />

            <Local_card
                img="/localfood/seafood.jpg"
                cardttl="4. Local Seafood"
                paragraph="Places in Vancouver where you can buy local seafood"
                path="/seafood"
            />

            <Local_card
                img="/localfood/farmToTable.jpg"
                cardttl="5. Farm-to-Table"
                paragraph="Farm-to-table restaurants in Vancouver"
                path="/farmToTable"
            />
        </LocalCardCont>
        <Navbar 
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
