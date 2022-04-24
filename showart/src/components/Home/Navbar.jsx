import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { pageStatus, setNavBg } from '../../redux/action';
import './navbaar.css'

export const Navbar = ()=>{
    if(!JSON.parse(localStorage.getItem('user'))) {
        localStorage.setItem('user', JSON.stringify('lock'))
    }
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    const Bg = useSelector((store)=>store.setNavBg)
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false);
    const navSearch = useSelector((store)=>store.navSearch)
    return (
        <div className='navbar' style={{background:Bg}}>
          <div className='nav2' >
            <div style={{display:'flex'}}>
                <div onClick={()=>dispatch(pageStatus(true))} className="menudiv"><svg style={{ cursor:'pointer'}} className='menuicon' aria-hidden="true" focusable="false" viewBox="0 0 20 20"><path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"></path></svg></div>
                <div style={{cursor:'pointer', display:"flex", marginTop:"30px"}}>
                    <h1 style={{color:"black"}}>Show</h1>
                    <h1 style={{color:"green"}}>Art</h1>
                </div>
            </div>
            
        {navSearch.navSearch?<div className='baseinp' style={{boxShadow:focused?'inset 0 -2px 0 black':"",
        position:'relative', transition:'all 0.5s'
    }}>
       <input type="text" placeholder='search here' onFocus={onFocus} onBlur={onBlur} />
    </div>:""}
           {user==='lock'?<div>
                <Link to={'/register'}>
                    <button className={'signbtn'}>Sign in</button>
                </Link>
            </div>:<div></div>}
          </div>
        </div>
    )
}