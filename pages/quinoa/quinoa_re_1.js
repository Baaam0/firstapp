import Navbar from "../../comps/Navbar";
import IngBox from "../../comps/RecipesDetail/IngBox";
import StepsBox from "../../comps/RecipesDetail/StepsBox";
import LazyBtn from "../../comps/RecipesDetail/LazyBtn";
import MainMenu from "../../comps/MainMenu";
import SideNav from "../../comps/Navbar/SideNav";
import TopBtn from "../../comps/TopBtn";
import { imgDatabase, titleDatabase, imgDatabaseS } from "../../data/quinoa/quinoa_content";
import {numDatabase, recipeDatabase} from "../../data/quinoa/quinoa_recipe";
import {commDatabase, rareDatabase} from "../../data/quinoa/quinoa_ingredients";


import styled from 'styled-components';


const StyledRecipesDetail = styled.div`
background-color: #E0E8FD;
`

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:end;
`

const StySteps = styled.div`
display:flex;
flex-direction:column;
width:360px;
border-radius:0px 20px 20px 0px;
overflow:hidden;
align-self:flex-start;
`

const Header = styled.h1`
display:flex;
flex-direction:row;
align-self:flex-start;
margin-left:50px;
`


export default function RecipesDetail({
  
}){
    
  return (<StyledRecipesDetail>
       <Container>
      <MainMenu></MainMenu>
      <Header>{titleDatabase[0]}</Header>
      <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Quinoa"
        ></SideNav>

      <IngBox 
      img={"/quinoa1s.jpg"}
      common={commDatabase[0]}
      rare1={rareDatabase[0][0]}
      rare2={rareDatabase[0][1]}
      rare3={rareDatabase[0][2]}
      />

      <LazyBtn />

      <StySteps>
        <StepsBox
        number={numDatabase[0]} 
        text={recipeDatabase[0][0]}
        img=""
        />

        <StepsBox
        number={numDatabase[1]} 
        text={recipeDatabase[0][1]}
        img=""
        />

        <StepsBox
        number={numDatabase[2]} 
        text={recipeDatabase[0][2]}
        img=""
        />

        <StepsBox 
        number={numDatabase[3]} 
        text={recipeDatabase[0][3]}
        img=""
        />

        <StepsBox
        number={numDatabase[4]} 
        text={recipeDatabase[0][4]}
        img={imgDatabase[0]}
        />
      </StySteps>

    </Container>

      <TopBtn />
      <Navbar 
      img1="/active_logo1.png"
      />
      
  </StyledRecipesDetail>
  )
  }