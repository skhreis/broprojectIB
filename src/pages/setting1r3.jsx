import "./pages.css";
import { useState} from "react";
function Setting1r3(){
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
            <img class='imgsrc' src='https://www.cairotoptours.com/storage/2792/conversions/The%20beautiful%20Island%20around%20the%20Nile-webp.webp' />
            <div class='text'>    After the Sea People ambushed your army, you are now stuck on a small island on the Nile River, when one of the Sea People comes to you in secret. 
                He claims that the army of the Sea People is weak, and and that if you attack them now you could easily defeat them. Do you believe this supposed traitor or kill him?</div>
            <div>
                <button class='aftermath' onClick={revealA1}>Believe him</button>
                <button class='aftermath' onClick={revealA2}>Kill him</button>
            </div>
            {a1 ? (<div class='unveil1'>You attack the army of the Sea People, catching them by suprise and destroying their already weak supply lines, and you regain control of Egypt!</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>After you kill the man, you are stranded on the island for many months. 
                With limited food and water supplies, you are forced to surrender to the Sea People, and you have lost your once great empire!</div>) : (<div></div>)}
            {next ? (<div><a href='/selection'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </div>
            </center>
        </div>
    )
}

export default Setting1r3;