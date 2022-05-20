import styled from "styled-components";

import { useRouter } from 'next/router';


const NavBottom = styled.div`
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 1em;
    background-color: white;
    z-index: 101;
`;

const Button = styled.button`
    background-image: url("${props=>props.icon}");
    background-color: white;
    background-size: cover;
    width: 25%;
    height: 80px;
    border: none;
    cursor: pointer;
`;


export default function Navbar({
    img0="/logo0.png",
    img1="/logo1.png",
    img2="/logo2.png",
    img3="/logo3.png"
}){

    const r = useRouter();

    return <NavBottom>
        <Button icon={img0} onClick = {
            ()=>r.push("/")
        }></Button>

        <Button icon={img1} onClick = {
            ()=>r.push("/recipes")
        }></Button>
        <Button icon={img2} onClick = {
            ()=>r.push("/restaurant")
        }></Button>
        <Button icon={img3} onClick = {
            ()=>r.push("/localfood/localfood")
        }></Button>
    </NavBottom>
}
