import { useDispatch } from "react-redux"
import { Base } from "./Base"
import { navSearch, setNavBg } from "../../redux/action"
import { Navbar } from "./Navbar";
import './home.css';

export const Home = ()=>{
    const dispatch = useDispatch();
    const handleScroll = (event)=>{
        if(event.target.scrollTop>358)
           dispatch(navSearch(true))
        else
            dispatch(navSearch(false))
            
        if(event.target.scrollTop>2)
           dispatch(setNavBg('white'))
        else
            dispatch(setNavBg('transparent'))     
    }
    return (
        <div 
            onScroll={(e)=>{handleScroll(e)}}
            style={{
                overflowY:'scroll',maxHeight:'100vh'
            }}>
            <Base />
        </div>
    )
}