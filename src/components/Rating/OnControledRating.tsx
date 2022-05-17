import React, {useState} from "react";
import s from './OnControledRating.module.css'

export function OnControledRating() {
    const [value, setValue] = useState(0)
    console.log("Rating rendered")
    const onclickHandler = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <Star onclickHandler={() => onclickHandler(1)} selected={value > 0}/>
            <Star onclickHandler={() => onclickHandler(2)} selected={value > 1}/>
            <Star onclickHandler={() => onclickHandler(3)} selected={value > 2}/>
            <Star onclickHandler={() => onclickHandler(4)} selected={value > 3}/>
            <Star onclickHandler={() => onclickHandler(5)} selected={value > 4}/>
        </div>

    )
}

type StarPropsType = {
    selected: boolean
    onclickHandler: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendered")
    return (
        <span onClick={props.onclickHandler}>
      {!props.selected ? <span className={s.star}> star</span> : <span className={s.activeStar}> <b>star</b></span>}
  </span>
    )
}