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

        <HowToCatTtl>Vegan Logo</HowToCatTtl>

        <Local_relatedpage_top
                img="/localfood/2_vegan_logo/veganLogo.jpg"
                descTxt="&quot;Suitable For Vegans&quot; and &quot;Certified Vegan&quot; labels"
            />

        <LocalDetailItemCont>
            <Local_detail_item
                img="/localfood/2_vegan_logo/knowWhatToSupport.jpg"
                bgc="#fff"
                itemttl="1. Importance of knowing what you want to support"
                itemtxt="Educating yourself what logo, label, mark, farmers, companies, organization you want to support is the most important than deciding what to buy ONLY by looking at the logo etc. as some good organizations/companies might not be able to get the certified logo as it’s expensive to get certified."
            />

            <Local_detail_item
                img="/localfood/2_vegan_logo/lookForLabel.jpg"
                bgc="#E0E8FD"
                itemttl="2. The easiest way to know if a product is vegan is to look for a label"
                itemtxt="As the most important thing is to know what you want to support, having logo or makr is not always necessary, but it is still useful. It is the easiest way to know if a product is vegan is to look for a label: Suitable For Vegans, or  Certified Vegan."
            />

            <Local_detail_item
                img="/localfood/2_vegan_logo/worldsVeganLabels.jpg"
                bgc="#fff"
                itemttl="3. A list of vegan labels all over the world"
                itemtxt="http://vegan-labels.info/

                As of January 2021, there are approximately 79 million people who are vegan all over the world.

                You can check out the list of certification agencies and labels that are available around the world now."
            />

            <Local_detail_item
                img="/localfood/2_vegan_logo/allergenInfo.jpg"
                bgc="#E0E8FD"
                itemttl="4. Scan the Allergen Information"
                itemtxt="Another simple way is to scan the 'Allergen Information'. If the product contains dairy, eggs, or seafood, it would be stated under its allergen ingredients list. To know if its vegetarian, look for the Green Dot.
"
            />

            <Local_detail_item
                img="/localfood/2_vegan_logo/crueltyFree.jpg"
                bgc="#fff"
                itemttl="5. Difference between “Vegan-certified” and “Cruelty-free”"
                itemheading="Vegan-certified = Cruelty-free too
                Cruelty-free = Simply not tested on animals"
                itemtxt="To get rid of all animal-based items from your life, vegan cosmetics are the best choice. Cruelty-free means that the product was made without testing it on animals. Vegan means that the product doesn't have any ingredients that come from animals."
            />

        </LocalDetailItemCont>

        <Navbar
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
