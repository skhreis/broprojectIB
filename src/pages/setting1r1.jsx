import "./pages.css";
import { useState} from "react";
function Setting1r1(){
    const [a1, setA1] = useState(false)
    const [a2, setA2] = useState(false)
    const [next, setNext] = useState(false)
    const revealA1 = () =>{
        setA2(false)
        setA1(true)
        setNext(true)
    }
    const revealA2 = () =>{
        setA1(false)
        setA2(true)
        setNext(true)
    } 
    return(
        <div class='body'><center>
            <div class='padding'>
            <img class ='imgsrc'src ="https://everyone.plos.org/wp-content/uploads/sites/5/legacy-featured-images/Keuninck_Coninck_Kerstiaen_de_-_Fire_of_Troy_-16x9.jpeg" height='450px' width='600px' />
            <div class='text'>You are now one of the Pharoahs of Ancient Egypt, during the bronze age collapse! The system of international trade which your empire used to rely on has now collapsed, 
            and on top of that the Sea People are attacking your empire! You must now choose to fight them either at sea or on land.</div>
            <div>
                <button class='aftermath' onClick={revealA1}>Fight them at sea</button>
                <button class='aftermath' onClick={revealA2}>Fight them on land</button>
            </div>
            {a1 ? (<div class='unveil1'>You were defeated by the Sea People!</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>You were defeated by the Sea People!</div>) : (<div></div>)}
            {next ? (<div><a href='/setting1r2'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </div>
            </center>
            </div>
    )
}

export default Setting1r1;