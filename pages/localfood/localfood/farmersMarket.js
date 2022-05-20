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
                img="/localfood/farmersMarkets.jpg"
                pagettl="2. Farmers’ Markets (VFM)"
                descTxt="Farmers markets in Vancouver where you can buy local food"
            />

        <LocalDetailItemCont>
            <Local_detail_item
                img="/localfood/1_local_food/vanFarmersMarket.jpg"
                itemttl="Vancouver Farmers Markets"
                itemurl="https://eatlocal.org/"
                // itemheading="ー　Who they are"
                itemtxt="ー　Who they are
                In 1995, Vancouver Farmers Markets (VFM) was formed as a non-profit society. Since then, VFM has grown to become one of Canada's top farmers market organisations, with nine weekly markets, 471,000 shoppers per year, and annual vendor sales of $10 million. They have seven summer markets and two winter markets every week in different parts of the city.

                ー　Fresh to Families.
                In 1995, Vancouver Farmers Markets (VFM) was formed as a non-profit society. Since then, VFM has grown to become one of Canada's top farmers market organisations, with nine weekly markets, 471,000 shoppers per year, and annual vendor sales of $10 million. They have seven summer markets and two winter markets every week in different parts of the city.

                ー　Help Local Economy
                The Vancouver Farmers Market isn't just a great place to buy fresh, tasty food from local farmers. It also helps the local and regional economy by giving more than $15 million in direct and indirect benefits. People who buy food at our markets help 280 small-scale BC farmers, as well. Each year, we keep 4,000 acres of local farmland in use for growing food.

                ー　Locations
                Farmers' markets can be found in the following locations:
                        Markets
                        DowntownFalse Creek
                        Hastings Park
                        Kitsilano
                        Main Street Station
                        Mount Pleasant
                        Riley Park – Summer
                        Riley Park – Winter
                        Trout Lake
                        West End"
            />

        </LocalDetailItemCont>

        <Navbar 
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
