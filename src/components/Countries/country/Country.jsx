import { useState } from "react";
import "./style.css"

const Country = ({info,BtnDynamic}) => {
 
    const {name,flags,area} = info
    const [visited,setVisited] = useState(false)
    const clicked = () =>{
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited && 'visited'}`}>  {/* conditional css */}
            <img src={flags?.png} alt="" />
           <p>name : {name?.common}</p>
           <p>area : {area}</p> 
           <button onClick={clicked}>{visited ? "visited" : "going" }</button>
           <br />{visited ? "i visited this country" : "i will visit"}

           <button onClick={()=>BtnDynamic(info.name.common)}>click</button> {/* " '() =>' this phrase  makes the btn not call like infinity time and thus it help to pass data"   */}
        </div>
    );
};

export default Country;