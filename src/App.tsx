import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OffOn} from "./components/OffOn/OffOn";
import {UncontrolledInput, UncontrolledInputRef} from "./components/UncontrolledInput";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/ControlledInput";
import {Select} from "./components/Select/Select";

function App() {

    let [ratingValue, SetRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [indicator, setIndicator] = useState<boolean>(false)
    const items = [{name: "Dmitriy", value: 1},
        {name: "Andrey", value: 2},
        {name: "Victor", value: 3},
        {name: "Alex", value: 4},
    ];
    return (


        <div className="body">
            <OffOn on={indicator} onClick={setIndicator}/>
            <Accordion callback={(value)=>{alert(`hello id${value}` )}} items={items} titleValue={"Menu"} collapsed={collapsed} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            <Rating value={ratingValue} onClick={SetRatingValue}/>
            <Select callback={()=> {}} items={items}/>
            {/*  <UncontrolledInput/>
            <UncontrolledInputRef/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>*/}
        </div>
    );
}


export default App;
