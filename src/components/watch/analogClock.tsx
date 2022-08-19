import React from 'react';
import style from "./analogClock.module.css"

type dataType = {
    date: any
}
export const AnalogClock = (p: dataType) => {
    const secondsStyle = {
        transform: `rotate(${p.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${p.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${p.date.getHours() * 30}deg)`
    };

    return (
        <div className={style.container}>
            <div className={style.clock}>
                <div className={style['analog-clock']}>
                    <div className={`${style.dial} ${style.seconds}`} style={secondsStyle}/>
                    <div className={`${style.dial} ${style.minutes}`} style={minutesStyle}/>
                    <div className={`${style.dial} ${style.hours}`} style={hoursStyle}/>
                </div>
            </div>
        </div>
    );
};



