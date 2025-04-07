import "./pages.css";
import { useState} from "react";
function Setting2r1(){
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
            <center><div class='text'>You are Julius Ceaser, and after your victory against the General Pompey in the Roman Civil War, you have been appointed as the life-long dictator of Rome. 
                Your decisions and reforms are popular with the common people, however your absolute power and disregard for the laws of the Roman Republic causes many elites to stand against you. 
                It is now the Ides of March, and you wake up in the midde of the night to your wife's screams. 
                She claims she had a dream where your house was destroyed and your dead body was in the rubble. You have a senate meating in the morning.</div>
            <img class ='imgsrc'src ="https://www.getty.edu/360/event_images/camuccini.jpg" />
            <div>
                <button class='aftermath' onClick={revealA1}>Cancel the meeting</button>
                <button class='aftermath' onClick={revealA2}>Continue as normal</button>
            </div>
            {a1 ? (<div class='unveil1'>Your close freind and senator Decimus Junius arrives to tell you that the senate is working on a bill to allow you to use the title of "king" outside of Italy, 
                and that insulting them by canceling the meeting could lead to them canceling the bill. After consideration, you decide to go to the meeting anyways.</div>) : (<div></div>)}
            {a2 ? (<div class='unveil2'>You leave in the morning for the senate meeting</div>) : (<div></div>)}
            {next ? (<div class='next'><a href='/setting2r2'><button class='next'>Next</button></a></div>) : (<div></div>)}
            </center>
        </div>
    )
}

export default Setting2r1;