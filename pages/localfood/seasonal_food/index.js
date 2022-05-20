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
    // overflow:hidden;
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

        <HowToCatTtl>Seasonal Food</HowToCatTtl>

        <Local_relatedpage_top
                img="/localfood/4_seasonal_food/seasonalFood.jpg"
                descTxt="How to figure out what food is in season in Canada"
            />

        <LocalDetailItemCont>
            <Local_detail_item
                img="/localfood/4_seasonal_food/seasonalCalendar.jpg"
                bgc="#fff"
                itemttl="1. Calendar"
                itemurl="https://canadianfoodfocus.org/whats-in-season/"
                itemtxt="Despite our cold winters, there are many fruits and vegetables that we can enjoy at different times of the year.

                Farmers and researchers continue to improve varieties and growing techniques, and with the help of greenhouses and other improved growing technology, or through improved breeding through plant science, they have been able to extend the time a fruit or vegetable is available.

                You can view the charts on this website to learn more about each, including types, how to buy, how to prepare, and even how they grow in Canada."
            />

        </LocalDetailItemCont>

        <Navbar
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
