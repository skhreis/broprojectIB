import "./pages.css";
import { useState} from "react";
function Setting4r1(){
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
            <img class ='imgsrc'src ="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/959F/production/_104030383_hi035043057.jpg" />
            <div class='text'>War is on the horizon in Europe, as the Archduke of Austria-Hungary has been assasinated by Serbian nationalists. As the German ambassador to Russia, you have been tasked by your Kaiser to do all which is possible to avoid war, without compromising Germany's position on the international stage. The Russian foriegn minister tells you that if Austria occupies Serbia, then Russia will declare war. You are unaware of the Austrian position on the topic.</div>
            <div>
                <button class='aftermath' onClick={revealA1}>Tell the foreign minister that Austria does not intend to occupy Serbia</button>
                <button class='aftermath' onClick={revealA2}>Tell the foreign minister that Austria must do so for its own security</button>
            </div>
            {a1 ? (<div class='unveil1'>The foreign minister says that in that case, Russia must back its ally to the fullest</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>The foreign minister says that Austria must withdraw from Serbia straight away</div>) : (<div></div>)}
            {next ? (<div><a href='/setting4r2'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </div>
            </center>
        </div>
    )
}

export default Setting4r1;