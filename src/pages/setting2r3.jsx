import "./pages.css";
import { useState} from "react";
function Setting2r3(){
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
            <img class='img src' src='' />
            <div class='text'>Just before you reach the meeting, a man approaches you with a letter, 
                and hands it to you. Your guards remove him. You think about how often of an annoyance this is, and how it must hold no significance. </div>
            <div>
                <button class='aftermath' onClick={revealA1}>Read the letter</button>
                <button class='aftermath' onClick={revealA2}>Ignore the letter</button>
            </div>
            {a1 ? (<div class='unveil1'>The letter outlines in detail how over 60 senators, including Decimus, Cassius, and Brutus are plotting to assasinate you. After investigation, the letter is indeed accurate. You have the plotting senators arrested, and you reign for the rest of you life-long dictatorship.</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>You reach the senate meeting,and suddenly multiple senators, including Decimus, Cassius, and Brutus jump up and begin to stab you, and you are helpless to stop them. You pull your toga over your face in order to die with dignity.</div>) : (<div></div>)}
            {next ? (<div><a href='/selection'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </div>
            </center>
        </div>
    )
}

export default Setting2r3;