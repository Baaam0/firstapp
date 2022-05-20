import Navbar from "../../comps/Navbar";
import IngBox from "../../comps/RecipesDetail/IngBox";
import StepsBox from "../../comps/RecipesDetail/StepsBox";
import LazyBtn from "../../comps/RecipesDetail/LazyBtn";
import MainMenu from "../../comps/MainMenu";
import SideNav from "../../comps/Navbar/SideNav";
import TopBtn from "../../comps/TopBtn";
import { imgDatabase, titleDatabase } from "../../data/beans/beans_content";
import {numDatabase, recipeDatabase} from "../../data/beans/beans_recipe";
import {commDatabase,  rareDatabase} from "../../data/beans/beans_ingredients";


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
      <Header>{titleDatabase[2]}</Header>
      <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Quinoa"
        ></SideNav>

      <IngBox 
      img={"/quinoa3s.jpg"}
      common={commDatabase[2]}
      rare1={rareDatabase[2][0]}
      rare2={rareDatabase[2][1]}
      rare3={rareDatabase[2][2]}
      />

      <LazyBtn />

      <StySteps>
        <StepsBox
        number={numDatabase[0]} 
        text={recipeDatabase[2][0]}
        img=""
        />

        <StepsBox
        number={numDatabase[1]} 
        text={recipeDatabase[2][1]}
        img=""
        />

        <StepsBox
        number={numDatabase[2]} 
        text={recipeDatabase[2][2]}
        img=""
        />

        <StepsBox 
        number={numDatabase[3]} 
        text={recipeDatabase[2][3]}
        img=""
        />

        <StepsBox
        number={numDatabase[4]} 
        text={recipeDatabase[2][4]}
        img={imgDatabase[2]}
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