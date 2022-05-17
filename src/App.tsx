import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OffOn} from "./components/OffOn/OffOn";

function App() {

    let [ratingValue, SetRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [indicator, setIndicator] = useState<boolean>(false)
    return (


        <div className="body">
            <OffOn on={indicator} onClick={setIndicator}/>
            <Accordion titleValue={"Menu"} collapsed={collapsed} onClick={()=>{setCollapsed(!collapsed)}}/>
            <Rating value={ratingValue} onClick={SetRatingValue}/>

        </div>
    );
}


export default App;
