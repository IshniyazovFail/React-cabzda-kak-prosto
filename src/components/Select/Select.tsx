import React, {useState} from 'react';
import style from "./Select.module.css"
type itemsPropsType = {
    name: string
    value: any
}

type SelectType = {
    items: itemsPropsType[]
    callback: (value: any) => void
}

export const Select = (p: SelectType) => {
    const [selected, setSelected] = useState(false)
    const [selectName, setSelectName] = useState("name")


    return (
        <div className={style.body}>
            <SelectTitle callback={() => {
                setSelected(!selected)
            }} selectName={selectName}/>
            {selected && <SelectBody changeSelectName={(name)=>{setSelectName(name); setSelected(!selected)}} items={p.items}/>}
        </div>
    );
};

type SelectTitleType = {
    selectName: string
    callback: () => void
}
const SelectTitle = (p: SelectTitleType) => {
    const onclickHandler = () => {
        p.callback()
    }

    return (
        <div className={style.selectName} onClick={onclickHandler}>{p.selectName}</div>
    )
}

type SelectBodyType = {
    items: itemsPropsType[]
    changeSelectName:(name:string)=>void
}
const SelectBody = (p: SelectBodyType) => {

    return (
        <div className={style.selectBody}>
            {p.items.map(el => <div className={style.name} key={el.value} onClick={()=>p.changeSelectName(el.name)}>{el.name}</div>)}
        </div>
    )
}
