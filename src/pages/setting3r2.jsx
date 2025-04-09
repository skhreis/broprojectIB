import "./pages.css";
import { useState} from "react";
function Setting3r2(){
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
            <div class='text'>Your forces eventually meet the French army in combat in the town of Waterloo, Belgium. 
                The Napoleonic cavalry has been attacking your men all day. How to you combat this cavalry?</div>
            <div>
                <button class='aftermath' onClick={revealA1}>Deploy your army in square formations</button>
                <button class='aftermath' onClick={revealA2}>Deploy you soldiers in a single row</button>
            </div>
            {a1 ? (<div class='unveil1'>The horses of the French cavalry refuse to charge straight into the squares, and the French army is routed. A few days later, you recive Napoloen's surrender, and Europe is safe from Napoleon forevermore.</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>The cavalry charges straight into your army, and your soldiers flee. You are forced to surrender to Napoleon, and he now controls almost all of Europe.</div>) : (<div></div>)}
            {next ? (<div><a href='/selection'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </div>
            </center>
        </div>
    )
}

export default Setting3r2;