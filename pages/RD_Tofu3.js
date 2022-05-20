import Navbar from "../comps/Navbar";
import IngBox from "../comps/RecipesDetail/IngBox";
import StepsBox from "../comps/RecipesDetail/StepsBox";
import LazyBtn from "../comps/RecipesDetail/LazyBtn";
import MainMenu from "../comps/MainMenu";
import SideNav from "../comps/Navbar/SideNav";
import TopBtn from "../comps/TopBtn";
import {numDatabase,tofuDatabase} from"../data/tofu_content";
import {commDatabase} from "../data/common_content";


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
    
  return <StyledRecipesDetail>
    <Container>
      <MainMenu></MainMenu>
      <Header>Mapo Tofu</Header>
      <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Quinoa"
        ></SideNav>

      <IngBox 
      img="/Mapo3.jpeg"
      common={commDatabase[2]}
      rare1="Silken tofu"
      rare2="Sichuan peppercorns"
      rare3="Sermented chili bean paste"
      />
      <LazyBtn />

      <StySteps>
        <StepsBox
        number={numDatabase[0]} 
        text={tofuDatabase[5]}
        img=""
        />

        <StepsBox
        number={numDatabase[1]} 
        text={tofuDatabase[6]}
        img=""
        />

        <StepsBox
        number={numDatabase[2]} 
        text={tofuDatabase[7]}
        img=""
        />

        <StepsBox 
        number={numDatabase[3]} 
        text={tofuDatabase[8]}
        img=""
        />

        <StepsBox
        number={numDatabase[4]} 
        text={tofuDatabase[9]}
        img="/recipes4.png"
        />
      </StySteps>

      </Container>
      
      <TopBtn />
      <Navbar 
      img1="/active_logo1.png"
      />
  </StyledRecipesDetail>
  }