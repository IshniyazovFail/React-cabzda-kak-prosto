import React, {useCallback} from "react";

type PropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

export const OffOn = React.memo((p: PropsType) => {

    const onStyle = {
        width: "50px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: p.on ? "green" : "white",
        padding: "5px"
    };
    const offStyle = {
        width: "50px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: p.on ? "white" : "red",
        padding: "5px"
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        marginLeft: "10px",
        backgroundColor: p.on ? "green" : "red",
    };
    const block = {
        display: "flex"
    };

    console.log("ONOFF")
    return (
        <div style={block}>
            <div onClick={() => {p.onClick(true)}} style={onStyle}>On</div>
            <div onClick={() => {p.onClick(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
})