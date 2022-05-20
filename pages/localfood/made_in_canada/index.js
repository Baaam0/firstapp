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
                img="/localfood/3_made_in_canada/productOfCanada.jpg"
                bgc="#fff"
                itemttl="1. Product of Canada"
                itemtxt="All, or nearly all, of the food, processing and labour used to make the food is Canadian.

                ・Grown or raised by Canadian farmers

                AND

                ・Prepared and packaged by Canadian food companies.

                A food can still be labelled - Product of Canada- if it contains small amounts of imported food, such as spices, food additives, vitamins, and flavorings."
            />

            <Local_detail_item
                img="/localfood/3_made_in_canada/domAndImportedIngredients.jpg"
                bgc="#E0E8FD"
                itemttl="2. Made in Canada from domestic and imported ingredients"
                itemtxt="・A Canadian company was involved in some of the preparation of the food,

                AND

                ・It contains some food grown by Canadian farmers, and some food that's been imported."
            />

            <Local_detail_item
                img="/localfood/3_made_in_canada/importedIngredients.jpg"
                bgc="#fff"
                itemttl="3. Made in Canada from imported ingredients"
                itemtxt="・A Canadian company was involved in some of the preparation of the food

                AND

                ・The contents of the food were imported."
            />

        </LocalDetailItemCont>

        <Navbar
        img3="/active_logo3.png"
        />
    </LocalWrap>
    )
}
