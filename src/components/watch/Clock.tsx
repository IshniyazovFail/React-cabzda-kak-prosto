import React, {useEffect, useState} from 'react';
import {AnalogClock} from "./analogClock";


const get2digitsString = (num: number) => {
    return num < 10 ? "0" + num : num
}

export const Clock = () => {


    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState(true)

    useEffect(() => {
        let intervalID = setInterval(() => {
            setDate((new Date()))
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }

    }, [])

    let hours = get2digitsString(date.getHours())
    let minutes = get2digitsString(date.getMinutes())
    let seconds = get2digitsString(date.getSeconds())

    return (
        <div>
            {mode ? <div>{hours}:{minutes}:{seconds}</div> :
               <AnalogClock date ={date}/>
            }
            <button onClick={() => setMode(!mode)}> Mode</button>
        </div>
    );
};

