import styled from "styled-components";

import { useRouter } from "next/router";

const SideCont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: fixed;
  gap: 2em;
  margin: ${props=>props.margin}};
  z-index: 100;
  left: 0;
  transform: rotate(180deg);
  
`;

const NavButton = styled.div`
  writing-mode: vertical-lr;
  font-size: 1.2em;
  color: #A2B0D3;
  overflow-wrap: anywhere;
`;

export default function SideNav({
  index1="",
  index2="",
  index3="",
  index4="",
  mar="1em 0 0 1em"
}){

  const r = useRouter();

  return <SideCont margin={mar}>
    
    <NavButton onClick = {
      ()=>r.push("recipes")
    }>
    {index1}</NavButton>    
    
    <NavButton onClick = {
      ()=>r.push("beans")
    }>
    {index2}</NavButton>    
    
    <NavButton>
    {index3}</NavButton>    
    
    <NavButton>
    {index4}</NavButton>

  </SideCont>
}