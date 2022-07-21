import React, {useCallback, useState} from 'react';


const Counter=(props:{count:number,callback:()=>void})=>{
    return<div>{props.count}
        <button onClick={()=>{props.callback()}}>+</button>
    </div>
}

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
    return (
        <div>
            <Counter callback={()=>{setCount(count+1)}}  count={count}/>
            <Users users={users}/>
            <button onClick={addUser}>Add user</button>
        </div>
    );
};

