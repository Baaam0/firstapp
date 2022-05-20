import { Children } from 'react';
import styled from 'styled-components';


const CardCont = styled.div`
    background-color: ${props=>props.cl};
    color: ${props=>props.text_cl};  
    padding: ${props=>props.cont_padding};
    border-radius: ${props=>props.border_radius};
    margin: ${props=>props.margin};
`;

const DispImage = styled.img`
    width: 100%;
    padding: 1em;
    margin: ${props=>props.image_margin};
`;

const List = styled.div`
    text-align: right;
`;

export default function ImgCard({
    img="",
    bg="#E0E8FD",
    tcl="#08213E",
    title="",
    txt="",
    bor="",
    mar="",
    n1,n2,n3,n4="",
    marg="",
    cpa="1em 3em 1em 3em",
    Children=null

}){

    return <CardCont cl={bg} text_cl={tcl} border_radius={bor} margin={mar} cont_padding={cpa}> 
        <h1>{title}</h1>
        <DispImage src={img} image_margin={marg}/>
        <br/>
        <List>
            <h2>{n1}</h2>
            <h2>{n2}</h2> 
            <h2>{n3}</h2> 
            <h2>{n4}</h2> 
        </List> 
        <p>{txt}</p>
        {Children} 
          
    </CardCont>
}