import "./pages.css";
import { useState} from "react";
function Setting1r2(){
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
            <img class='imgsrc' src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyXglPBtYhLXHgCT9jPucKzVjk_LIVeTqSA&s' />
            <div class='text'>Following your defeat at the hands of the Sea People, you have two options. You can now either retreat back to saftey,
                 or attempt to attack them once again and catch them by suprise.</div>
            <div>
                <button class='aftermath' onClick={revealA1}>Retreat back to saftey</button>
                <button class='aftermath' onClick={revealA2}>Attack the Sea People by suprise</button>
            </div>
            {a1 ? (<div class='unveil1'>The Sea People ambushed your army!</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>The Sea People ambushed your army!</div>) : (<div></div>)}
            {next ? (<div><a href='/setting1r3'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </div>
            </center>
        </div>
    )
}

export default Setting1r2;