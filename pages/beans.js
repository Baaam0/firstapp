import Navbar from "../comps/Navbar";
import MainMenu from "../comps/MainMenu";
import RecipeCard from "../comps/Recipes/RecipeCard";
import TofuComp from "../comps/Recipes/TofuComp";
import SideNav from "../comps/Navbar/SideNav";
import TopBtn from "../comps/TopBtn";
import {imgDatabase,titleDatabase,paraDatabase} from '../data/beans/beans_content';


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
        <h1>Recipes</h1>

        <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Grains"
        index4="Quinoa"
        ></SideNav>

        <TofuComp
          img="/beans.png"
          h2="Beans"
          p="Beans and legumes are excellent sources of dietary fiber, protein, B vitamins, and many other important vitamins and minerals. They can help reduce blood sugar, boost heart health, and maintain a healthy gut."

        />

        <BgChange>
            <RecipeCard 
            img={imgDatabase[0]}
            title={titleDatabase[0]}
            paragraph={paraDatabase[0]}
            />

            <RecipeCard
            img={imgDatabase[1]}
            title={titleDatabase[1]}
            paragraph={paraDatabase[1]}
            path="../RD_Tofu2"
            />

            <RecipeCard
            img={imgDatabase[2]}
            title={titleDatabase[2]}
            paragraph={paraDatabase[2]}
            />

        </BgChange>
    
    <TopBtn />
    <Navbar 
    img1="/active_logo1.png"
    />

    </StyledRecipes>
    )
}
