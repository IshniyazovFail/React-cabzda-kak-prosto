import React, {useMemo, useState} from 'react';
import {CityType} from "../../App";
import {SelectCity} from "./SelectCity";


export const SelectUseMemo = (props: { city: Array<CityType> }) => {
    const cityByCountry =useMemo(()=>( props.city.filter(el => el.country === "Belarus")),[props.city])
    const cityByPopulation=useMemo(()=> props.city.filter(el=>el.population>2000000),[props.city])
    const cityByLetterM=useMemo(()=> props.city.filter(el=>el.city[0].toUpperCase()==="M"),[props.city])
    const[count,setCount]=useState(0)

    console.log("SELECT")
    return (
        <div>
            <div>{count}</div><button onClick={()=>setCount(count+1)}>+</button>
            <SelectCity filter="By country" cityArray={cityByCountry} />
            <SelectCity filter="By population" cityArray={cityByPopulation} />
            <SelectCity filter="By letter M" cityArray={cityByLetterM} />

        </div>
    );
};


