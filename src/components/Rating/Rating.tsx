import React from "react";

export type RatingValueType =0|1|2|3|4|5
export type RatingPropsType ={
    value:RatingValueType
    onClick:(value:RatingValueType)=>void
}

export const Rating =React.memo((props:RatingPropsType)=> {


    console.log("Rating rendered")

    return (
        <div>
            <Star selected={props.value>0} onClickStar={props.onClick} value={1}/>
            <Star selected={props.value>1} onClickStar={props.onClick} value={2}/>
            <Star selected={props.value>2} onClickStar={props.onClick} value={3}/>
            <Star selected={props.value>3} onClickStar={props.onClick} value={4}/>
            <Star selected={props.value>4} onClickStar={props.onClick} value={5}/>
        </div>

    )
})

type StarPropsType ={
    selected:boolean
    onClickStar:(value:RatingValueType)=>void
    value:RatingValueType
}

function Star(props:StarPropsType) {
    console.log("Star rendered")
    return <span onClick={()=>{props.onClickStar(props.value)}}>
        {props.selected ?<b> star </b>: " star "}
    </span>


}