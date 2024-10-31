import { useState } from "react";
import "./style.css"
import CountryDetail from "../../../CountryDetail/CountryDetail";

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
           <button onClick={()=>BtnDynamic(info)}>click</button> {/* " '() =>' this phrase  makes the btn not call like infinity time and thus it help to pass data"   */}
           <CountryDetail info={info} BtnDynamic={BtnDynamic}></CountryDetail>
        </div>
    );
};

export default Country;