import Navbar from "../comps/Navbar";
import MainMenu from "../comps/MainMenu";
import RecipeCard from "../comps/Recipes/RecipeCard";
import TofuComp from "../comps/Recipes/TofuComp";
import SideNav from "../comps/Navbar/SideNav";
import TopBtn from "../comps/TopBtn";
import {imgDatabase,titleDatabase,paraDatabase, imgDatabaseS} from '../data/quinoa/quinoa_content';


import styled from 'styled-components';

const StyledRecipes = styled.div`

`;

const BgChange = styled.div`
background-color: #E0E8FD;
display: block;
height: 120vh;
display:flex;
flex-direction:column;
align-items:end;
`;


export default function Recipes(){
    return (
    <StyledRecipes>
       <MainMenu></MainMenu>
        <h1>Recipes</h1>

        <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Quinoa"
        ></SideNav>

        <TofuComp
          img="/quinoa.jpg"
          h2="Quinoa"
          p="Quinoa is a healthy whole grain that is great for adding plant-based protein to vegan recipes. Quinoa has a full set of essential amino acids. It is one of few complete proteins from plants and is packed with uses for hair and skin."

        />

        <BgChange>
            <RecipeCard 
            img={imgDatabase[0]}
            title={titleDatabase[0]}
            paragraph={paraDatabase[0]}
            path="../quinoa/quinoa_re_1"
            />

            <RecipeCard
            img={imgDatabase[1]}
            title={titleDatabase[1]}
            paragraph={paraDatabase[1]}
            path="../quinoa/quinoa_re_2"
            />

            <RecipeCard
            img={imgDatabase[2]}
            title={titleDatabase[2]}
            paragraph={paraDatabase[2]}
            path="../quinoa/quinoa_re_3"
            />

        </BgChange>
    
    <TopBtn />
    <Navbar 
    img1="/active_logo1.png"
    />

    </StyledRecipes>
    )
}
