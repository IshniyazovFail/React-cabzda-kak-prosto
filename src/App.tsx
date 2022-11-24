import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OffOn} from "./components/OffOn/OffOn";
import {Select} from "./components/Select/Select";
import {ReactMemoComponent} from "./components/ReactMemo/ReactMemo";
import {SelectUseMemo} from "./components/Select/SelectUseMemo";
import {Clock} from "./components/watch/Clock";
import {UseEffect} from "./components/watch/useEffect";

export type CityType={
    id:number,
    country:string,
    city:string,
    population:number
}
function App() {

    let [ratingValue, SetRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [indicator, setIndicator] = useState<boolean>(false)
    const items = [{name: "Dmitriy", value: 1},
        {name: "Andrey", value: 2},
        {name: "Victor", value: 3},
        {name: "Alex", value: 4},
    ];


    const city=[
        {id:1,country:"Belarus",city:"Minsk",population:2018281},
        {id:2,country:"Belarus",city:"Mogilev",population:374713},
        {id:3,country:"Russia",city:"Moscow",population:12640818},
        {id:4,country:"Belarus",city:"Gomel",population:526901},
        {id:5,country:"Russia",city:"Samara",population:1136000},
        {id:6,country:"Ukraine",city:"Kiev",population:2893215},
        {id:7,country:"Ukraine",city:"Harkov",population:1444594},
        {id:8,country:"Ukraine",city:"Odessa",population:1010075},
        {id:9,country:"Russia",city:"Nurlat",population:32600},]
    return (


        <div className="body">
            <hr/>
            <OffOn on={indicator} onClick={setIndicator}/>
            <hr/>
            <Accordion callback={(value)=>{alert(`hello id${value}` )}} items={items} titleValue={"Menu"} collapsed={collapsed} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            <hr/>
            <Rating value={ratingValue} onClick={SetRatingValue}/>
            <hr/>
            <Select callback={()=> {}} items={items}/>
            <hr/>
            <ReactMemoComponent/>
            <hr/>
            <SelectUseMemo city={city}/>
            <hr/>
            <Clock/>
            <hr/>
            <UseEffect/>
        </div>
    );
}


export default App;
