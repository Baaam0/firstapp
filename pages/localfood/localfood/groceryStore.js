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
                img="/localfood/grocerystore.jpg"
                pagettl="3. Grocery Stores &amp; Markets"
                descTxt="Grocery stores &amp; markets in Vancouver where you can buy local food"
            />

        <LocalDetailItemCont>
            <Local_detail_item
                img="/localfood/1_local_food/vegano.jpg"
                itemttl="Vegano"
                itemurl="https://veganofoods.com/"
                itemheading="What you can do with them"
                itemtxt="ー　Shop Groceries
                You can now shop for plant-based groceries in our Vegano Marketplace. Simply include them in your next meal-kit delivery. Shipping is also free for all Vegano members! As a guest, you can also shop their Marketplace for all of your grocery needs.

                ー　Best in the City
                Vegano's mission is to make plant-based living as simple as possible. They collaborate with the city's top plant-based chefs and businesses to bring you customised, gourmet meals that you and your entire family can enjoy.

                ー　Minimal Waste
                Their Vegano boxes are completely recyclable at the curb, and our ice packs are made of environmentally friendly polymer that can be disposed of down the drain."
            />

        </LocalDetailItemCont>

        <Navbar 
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
