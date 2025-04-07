import "./pages.css";
import { useState} from "react";
function Setting4r2(){
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
        <div class='body'>
            <center><div class='text'>Now you must tread carefully, as you can not compramise your nation's position.</div>
            <div>
                <button class='aftermath' onClick={revealA1}>Yell at the minister that Germany can not accept this whatsoever</button>
                <button class='aftermath' onClick={revealA2}>Attempt to negotiate an additional 8 weeks before the Austrian army must withdraw from Serbia</button>
            </div>
            {a1 ? (<div class='unveil1'>Russia declares war on Austria and Germany, leading to the begining of WW1</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>A peace deal is reached, avioding one of the most devestating wars in human history</div>) : (<div></div>)}
            {next ? (<div class='next'><a href='/selection'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </center>
        </div>
    )
}

export default Setting4r2;