import React, {useCallback, useMemo, useState} from 'react';


const Counter=React.memo((props:{count:number,callback:()=>void})=>{
    console.log("Counter")
    return<div>{props.count}
        <button onClick={()=>{props.callback()}}>+</button>
    </div>
})

const Users=React.memo((props:{users:Array<string>})=>{
    console.log("USERS")

    return<div>{props.users.map((u,i)=><div key={i}>{u}</div>)}

    </div>
})


export const ReactMemoComponent = () => {
    const [count,setCount]=useState(0)
    const [users,setUsers]=useState(["Valera","Viktor","Max"])

const addUser=()=>{
    setUsers([...users,"Kolyan" + new Date().toLocaleDateString()])
}
const counterCallback=useCallback( ()=>{
    setCount(count+1)
},[count])
    return (
        <div>
            <Counter callback={counterCallback}  count={count}/>
            <Users users={users}/>
            <button onClick={addUser}>Add user</button>
        </div>
    );
};

