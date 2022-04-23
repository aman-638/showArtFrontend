import { Link, Navigate, useNavigate } from 'react-router-dom'
import './signup.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import { login} from '../../redux/Login/action';
import { useDispatch, useSelector } from 'react-redux';
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#0063cc"),
    backgroundColor: "#0063cc",
    '&:hover': {
      backgroundColor: "#0063cc",
    },
  }));
 
export const Signin = ()=>{
    const {token,nickName,loading} = useSelector(store => store.login);
    const dispatch = useDispatch();
    const [form ,setForm] = useState({
        email:"",
        password:"",
    })
    const inputHandle = (e)=>{
          let {id, value} = e.target;
        setForm({...form, [id]:value});
    }
    const handleSubmit = ()=>{
        if(!form.email || !form.password ) alert(" all fields required");
        else{
            dispatch(login({email:form.email, password:form.password}));
            localStorage.setItem('user', JSON.stringify({nickName:nickName}))
        }
    }
    if(token) return <Navigate to="/"/>
    return (
        <div className='register'>
            <Link to={'/'}>
                <div className='regNav'>
                <div style={{cursor:'pointer', display:"flex", fontSize:"30px", fontWeight:"700"}}>
                    <div style={{color:"black"}}>Show</div>
                    <div style={{color:"green"}}>Art</div>
                </div>
                </div>
            </Link>
                
        <div className='inputbox'>
        <Box component="form" sx={{'& > :not(style)': { m: 1 },}} noValidate autoComplete="off">
        <div style={{display:"flex", justifyContent:'center'}}> <h2>Signin </h2></div>
            <div className='inputdiv'>
                <TextField id="email" onChange={(e)=>{inputHandle(e)}} label="email" type="email" autoComplete="off" variant="filled"/>
                <TextField id="password" onChange={(e)=>{inputHandle(e)}}  label="Password" type="password" autoComplete="current-password" variant="filled"/>
            </div>
        </Box>
            <div className='filediv' style={{padding:'20px 0'}}>
                {loading?<div><Button variant="outlined" disabled>wait....</Button></div>:<ColorButton onClick={()=>{handleSubmit()}} variant="contained">Submit</ColorButton>}
            </div>
            <div style={{display:'flex', justifyContent:"center"}}>
            Create a new account,<Link style={{color:"rgb(6, 69, 69)"}} to={'/register'}>click here</Link>
            </div>
        </div>
        </div>
    )

}