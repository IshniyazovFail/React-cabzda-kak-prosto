import React from "react";

type AccordionPropsType ={
    titleValue:string
    collapsed:boolean
    onClick:()=>void
    items:itemsPropsType[]
    callback:(value:any)=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

    return (
            <div>
                <AccordionTitle collapsed={props.collapsed} onClick={props.onClick} title={props.titleValue}/>
                {!props.collapsed && <AccordionBody  onclick={props.callback}  items={props.items} />}
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

type itemsPropsType={
    name:string
    value:any
}
type AccordionBodyType = {
    items:itemsPropsType[]
    onclick:(value:any)=>void
}

function AccordionBody(p:AccordionBodyType) {
    console.log("AccordionBody rendered")
    return (
        <ul>
            {
                p.items.map((el,index)=><li onClick={()=>p.onclick(el.value)} key={index}>{el.name}</li>)
            }
        </ul>

    )
}
export default Accordion