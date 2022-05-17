import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnControledAccordion} from "./components/Accordion/OnControledAccordion";
import {OnControledRating} from "./components/Rating/OnControledRating";

function App() {
    console.log("App rendered")
    return (
        <div className="body">
            <OnControledAccordion  titleValue={'Menu'}/>
            <OnControledRating />
            <OnControledAccordion  titleValue={'Users'}/>
            <OnControledRating />


{/*            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendered")

    return <h1>{props.title}</h1>
}


export default App;
