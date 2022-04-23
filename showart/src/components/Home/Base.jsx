import axios from 'axios';
import { useState,useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { pageStatus } from '../../redux/action';
import './base.css'
import { Login } from './Login'
import { SearchBox } from './SearchBox';

export const Base = ()=>{
    const page = useSelector((store)=>store.openPage);
    const dispatch = useDispatch();
    const buttonRef = useRef(null);
    const buttonClickedOutside = useOutsideClick(buttonRef);
    const navigate = useNavigate()
    useEffect(() => {
      if (buttonClickedOutside) {
        dispatch((pageStatus(false)))
      }
    }, [buttonClickedOutside]);

    //responsive
    const [windowSize, setWindowSize] = useState(null)

    let [tdata, setData] = useState([]);
    useEffect(()=>{
      axios.get('https://show-art.herokuapp.com/')
      .then(res=>setData(res.data.showArt));
    })

useEffect(() => {
    const handleResize = () => 
        setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
}, [])
    
    return(
        <div className='base' >
            <div className='signinpage'   style={{display:page.openPage?'block':'none'}}></div>
            <div ref={buttonRef}  style={{
                    translateX:'-300px',                  
                    transform:page.openPage?'translateX(300px)':'translateX(-300px)',
                     transition:'all 1s'
                     }} className='signin'>
                   <Login /> 
            </div>
            <div className='art_card'>
              {tdata.map((el,i)=>
                <div onClick={()=>{navigate(`/${el._id}`)}} key={el._id}>
                    <div>
                      <img src={el.art_img} alt="" />
                    </div>
                    <div id='second'>
                       <div>Name: {el.art_name}</div>
                       <div>Artist Name: {el.artist_name}</div>
                       <div>Price:{el.price}</div>
                       <div>City:{el.city}</div>
                    </div>
                </div>
              )}
            </div>
        </div>
    )
}

//when sidelogin page opened and clicked outside then this function will work
const useOutsideClick = (ref) => {
    const [outsieClick, setOutsideClick] = useState(null);
  
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (!ref.current.contains(e.target)) {
          setOutsideClick(true);
        } else {
          setOutsideClick(false);
        }
  
        setOutsideClick(null);
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  
    return outsieClick;
  };