
import styled from 'styled-components';


const ReCont = styled.div`
background-color:white;
width:500px;
position:relative;
height: 250px;
top:50px;
left: 1px;
padding: 10px 10px 10px 30px;
`
;

const ReImg = styled.img`
width:90px;



`;


const Text = styled.p`
float:right;
width:75%;
font-size: 16px;
text-align: left;
margin: 3 3 3 3;

`
;


const ResItem = styled.div`
border-bottom:2px solid #A2b0d3;

`

;

const Title = styled.h2`
width:250px;

`
;

const Image = styled.img`
`


const Button = styled.img`
top:100px;
background-color:"red";
height:20px;
`


export default function RestaurantCard({
    img="/veg out.png",
    bg="#E0E8FD",
    h2="Veg Out",
    txt="Small, vegan food truck that offers burgers, wings, fries and shakes. Located near Brentwood skytrain station",
    

}){

    return <ReCont 
    cl={bg} txt={txt}>
    <Title>{h2}</Title>
    <Button img src="/start rating.png"></Button>
    <ResItem>
    
        <ReImg src={img}></ReImg>
        
        <Text>{txt}</Text>
       
       
    </ResItem>
    
    
    </ReCont>
    
}


//export default function RestaurantCard(){
    //return(
   //     <img src="/veg out.png" />
   // )
   
//}



