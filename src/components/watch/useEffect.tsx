import React, {useState} from 'react';

export const UseEffect = () => {
    const [count,setCount]=useState(0)

    return (
        <div>
            <div>
                counter:{count}
            </div>
          <button onClick={()=>setCount((state)=>state+1)}>+</button>
        </div>
    );
};

