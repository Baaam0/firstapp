import styled, {css} from "styled-components";
import { useRouter } from 'next/router';
import MainMenuActive from './MainMenu_act';

const MainMenuCont = styled.div`
    width: 100vw;
    display: flex;
    padding: 30px 50px;
    justify-content: space-between;
    // justify-content: ${props=>props.sqrPosi};
    position: relative;
    // overflow: ${props => (props.active ? "visible" : "hidden")};
    // overflow: ${props=>props.overFlow};

  //   ${props => props.primary && css`
  //   background: white;
  //   color: black;
  // `}
`

const BackArrow = styled.div`
    width: 40px;
    height: 40px;
    background-size: 100%;
    background-image: url("/common/back.png");
    cursor: pointer;
    display: ${props=>props.arrowDis};
`

const SqrCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    width: 50px;
    height: 50px;
    cursor: pointer;
`
const SqrBtn = styled.span`
    border: 4px solid #000;
    border-radius: 3px;
    background: transparent;
    width: 20px;
    height: 20px;
`

const HomeMenuCont = styled.div`
    position: fixed;
    top: 0;
    left: 30%;
`

export default function MainMenu({
    // perc=".4",
}){

    const r = useRouter();

    function visibleToggle() {
      // return <MainMenuActive></MainMenuActive>
      MainMenuActive
      // alert("hey");
    }

    return <MainMenuCont id="MainMenuCont" sqrPosi="position">

        {
          r.pathname === "/" ? "" : <BackArrow aria-label="back" type="button" onClick = {
              ()=>r.back()
          }></BackArrow>
        }

        <SqrCont onClick = {
            // visibleToggle
            ()=>r.push("/mainMenu")
        }>
          <SqrBtn></SqrBtn>
          <SqrBtn></SqrBtn>
          <SqrBtn></SqrBtn>
          <SqrBtn></SqrBtn>
        </SqrCont>
    </MainMenuCont>
}
