import React, {useState} from 'react';
import style from "./Select.module.css"
import {CityType} from "../../App";


type SelectType = {
    cityArray: Array<CityType>
    filter: string
}

export const SelectCity = React.memo((p: SelectType) => {
    const [selected, setSelected] = useState(false)
    const [selectCity, setSelectCity] = useState("city")

    console.log("CITY " + p.filter)

    return (
        <div className={style.body}>
            <SelectTitle callback={() => {
                setSelected(!selected)
            }} selectCity={selectCity}/>
            {selected && <SelectBody changeSelectCity={(city) => {
                setSelectCity(city);
                setSelected(!selected)
            }} cityArray={p.cityArray}/>}
        </div>
    );
});

type SelectTitleType = {
    selectCity: string
    callback: () => void
}
const SelectTitle = (p: SelectTitleType) => {
    const onclickHandler = () => {
        p.callback()
    }

    return (
        <div className={style.selectName} onClick={onclickHandler}>{p.selectCity}</div>
    )
}

type SelectBodyType = {
    cityArray: CityType[]
    changeSelectCity: (city: string) => void
}
const SelectBody = (p: SelectBodyType) => {

    return (
        <div className={style.selectBody}>
            {p.cityArray.map(el => <div className={style.name} key={el.id}
                                        onClick={() => p.changeSelectCity(el.city)}>{el.city}</div>)}
        </div>
    )
}
