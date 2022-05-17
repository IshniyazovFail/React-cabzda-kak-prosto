import React from "react";

type AccordionPropsType ={
    titleValue:string
    collapsed:boolean
    onClick:()=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

    return (
            <div>
                <AccordionTitle collapsed={props.collapsed} onClick={props.onClick} title={props.titleValue}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )


}

type AccordionTitlePropsType={
    title:string
    collapsed:boolean
    onClick:()=>void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return <h3 onClick={props.onClick}>---{props.title}---</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion