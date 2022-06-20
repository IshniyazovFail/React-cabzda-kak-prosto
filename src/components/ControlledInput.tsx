import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {
    const[value,setValue]=useState('')
const[addValue,setAddValue]=useState("")
    const onChangeHAndler=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }

    const onClickHandler=()=>{
        setAddValue(value)
        setValue("")
    }
    return (
        <div>
           <input value={value} onChange={onChangeHAndler}/>
            <button onClick={onClickHandler}>add</button>
            value: {addValue}
        </div>
    );
};


export const ControlledCheckbox = () => {
    const[value,setValue]=useState(true)

const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.currentTarget.checked)
}
    return (
        <div>
            <input type="checkbox" checked={value} onChange={onChangeHandler}/>

        </div>
    );
};

export const ControlledSelect = () => {
    const[value,setValue]=useState<undefined|string>(undefined)

    const onChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <select value={value} onChange={onChangeHandler}>
                <option>none</option>
                <option value={"1"}>Minsk</option>
                <option value={"2"}>Moscow</option>
                <option value={"3"}>Kazan</option>
            </select>

        </div>
    );
};
