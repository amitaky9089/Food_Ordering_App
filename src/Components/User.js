import { useEffect, useState } from "react";

const User = (props) => {
    const[count]=useState(0);

    useEffect(()=>{

    })

    
     return (
       <div className="user-card">
          <h2>Count={count}</h2>
          <h2>{props.name}</h2>
          <h3>Location: Udasar ,Bikaner</h3>
          <h3>Contact: bossaky9089</h3>
       </div>
     );
};

export default User;