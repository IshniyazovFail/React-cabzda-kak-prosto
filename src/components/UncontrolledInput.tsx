import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInput = () => {
    const [value,setValue]=useState("")
    const[newValue,setNewValue]=useState("")
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }
    const onClickHandler=()=>{
        setNewValue(value)
    }
    return (
        <div>
           <input onChange={onChangeHandler}/> <button onClick={onClickHandler}>Add Value</button>{newValue}
        </div>
    );
};

export const UncontrolledInputRef=()=>{

    const [value,setValue]=useState("")

    let ValueRef=useRef<HTMLInputElement>(null)

    const onClickHandler=()=>{
   const el=ValueRef.current as HTMLInputElement

        setValue(el.value)
    }

    return(
        <div>
            <input ref={ValueRef}/> <button onClick={onClickHandler}>Add Value</button>{value}
        </div>
    )
}
