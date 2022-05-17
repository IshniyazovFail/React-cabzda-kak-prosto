import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,

}

export function OnControledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    const newAccordion =()=>{
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle newAccordion={newAccordion} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    newAccordion:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return <h3 onClick={props.newAccordion}>{props.title}</h3>
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
