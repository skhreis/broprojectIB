import "./pages.css";
import { useState} from "react";
function Setting3r1(){
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
            <center><div class='text'>YThe imfamous Napoleon has escaped from his imprisonment on the island of Elba, and has quickly regained control over all of France. 
                As the Duke of Wellignton, you have been ordered by the King of England to deal with this problem.</div>
            <img class ='imgsrc'src ="https://www.britishbattles.com/wp-content/uploads/2018/05/2-Scotland_Forever-AAA-1024x519.jpg" />
            <div>
                <button class='aftermath' onClick={revealA1}>Attempt to negotiate with Napoleon</button>
                <button class='aftermath' onClick={revealA2}>Declare war on Napoleon</button>
            </div>
            {a1 ? (<div class='unveil1'>As you are negotiating, the French army attacks the country of Belgium. This leads to negotiations collapsing, and you are forced to go to war.</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>Your army is deployed to Belgium in order to attack the French Army.</div>) : (<div></div>)}
            {next ? (<div class='next'><a href='/setting3r2'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </center>
        </div>
    )
}

export default Setting3r1;