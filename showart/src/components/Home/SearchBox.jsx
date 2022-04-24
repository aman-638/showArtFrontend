import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const SearchBox = ()=>{
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false);
    const navigate = useNavigate();
    const keyPressed=(e)=>{
         if(e.keyCode===13){
             navigate('/product')
         }
    }
    return(
        <div id='baseinp' style={{boxShadow:focused?'inset 0 -2px 0 black':"",
        position:'relative', transition:'all 0.5s'
    }}>
        <input onKeyUp={(e)=>{keyPressed(e)}} type="text" placeholder='search here' onFocus={onFocus} onBlur={onBlur} />
    </div>
    )
}


