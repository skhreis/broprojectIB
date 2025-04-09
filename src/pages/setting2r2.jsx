import "./pages.css";
import { useState} from "react";
function Setting2r2(){
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
            <div class='text'>As you are making your way to the meeting, you see the priest Spurina, who had previously told you that the Ides of March were a dangerous time for you. 
                You call out to him: 
                "The Ides have come Spurina". He replies "Yes, but they have not yet come"</div>
            <div>
                <button class='aftermath' onClick={revealA1}>Arrest Spurina for threatening you</button>
                <button class='aftermath' onClick={revealA2}>Ignore Spurina</button>
            </div>
            {a1 ? (<div class='unveil1'>You continue to the senate meeting</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>You continue to the senate meeting</div>) : (<div></div>)}
            {next ? (<div><a href='/setting2r3'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </div>
            </center>
        </div>
    )
}

export default Setting2r2;