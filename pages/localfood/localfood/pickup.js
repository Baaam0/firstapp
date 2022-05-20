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
                img="/localfood/pickup.jpg"
                pagettl="1. Pickup / Delivery"
                descTxt="Services you can subscribe to pickup or get delivered local dish/food"
            />

        <LocalDetailItemCont>
            <Local_detail_item
                img="/localfood/1_local_food/ubereats.jpg"
                itemttl="1. Uber Eats"
                itemurl="https://www.ubereats.com/ca/category/vancouver-bc/vegan"
                itemheading="ー　Vegan Category"
                itemtxt="There is a Vegan category"
            />

            <Local_detail_item
                img="/localfood/1_local_food/beMyGuest.jpg"
                bgc="#fff"
                itemttl="2. Bee My Guest"
                itemurl="https://www.beemyguest.ca/"
                itemheading="ー　Who they are "
                itemtxt="They are two University of British Columbia students who have recently graduated. They are united by a love of plant-based food and the creation of community. Bee My Guest hopes to broaden the sharing economy to include more local and small-business food entrepreneurs, while also considering the environmental impacts of food production."
            />

            <Local_detail_item
                img="/localfood/1_local_food/plantedMeals.jpg"
                itemttl="3. Planted Meals"
                itemurl="https://www.plantedmeals.ca/"
                itemheading="ー　Who they are"
                itemtxt="They recognised the need for wholesome, tasty food that was delivered on a regular basis to ensure food availability—while also not breaking the bank.Their head chef is a vegan who creates menus free of animal products. Whether you're a vegan or not, their focus on cosy, home-style meals is delicious, and you won't miss the meat! By not supporting animal agriculture, which is one of the leading causes of greenhouse gas emissions and a strain on our natural resources, eating vegan drastically reduces your carbon footprint."
            />

        </LocalDetailItemCont>

        <Navbar 
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
