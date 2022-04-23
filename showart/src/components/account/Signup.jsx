import { Link, Navigate, useNavigate } from 'react-router-dom'
import './signup.css';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { signup } from '../../redux/Signup/action';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#0063cc"),
    backgroundColor: "#0063cc",
    '&:hover': {
      backgroundColor: "#0063cc",
    },
  }));
  export const Signup = ()=>{
      const {token, loading} = useSelector(store => store.signup);
    const dispatch = useDispatch();
    const [form ,setForm] = useState({
        nickName:"",
        email:"",
        password:"",
        country:""
    })

    console.log(token)

const inputHandle = (e)=>{
    let {id, value} = e.target;
    setForm({...form, [id]:value});
}
const handleSubmit = ()=>{
    if(!form.nickName ||!form.email || !form.password || !form.country) alert("all fields required");
    else{
        dispatch(signup({nickName:form.nickName,email:form.email, password:form.password,country:form.country}))
        // console.log(email, token)
    }
}
  if(token) return <Navigate to="/login"/>
    return (
        <div className='register'>
        <div className='inputbox'>
        <Box component="form" sx={{'& > :not(style)': { m: 1 },}} noValidate autoComplete="off">
            <div style={{display:"flex", justifyContent:'center'}}> <h2>Register </h2></div>
            <div className='inputdiv'>
                <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Name</InputLabel>
                    <FilledInput  id="nickName"  onChange={(e)=>{inputHandle(e)}} />
                </FormControl>
                <TextField id="email" onChange={(e)=>{inputHandle(e)}}   label="email" type="email" autoComplete="off" variant="filled"/>
            </div>
            <div className='inputdiv'>
                <TextField onChange={(e)=>{inputHandle(e)}}  id="password"  label="Password" type="password" autoComplete="current-password" variant="filled"/>
                <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Country</InputLabel>
                    <FilledInput  id="country"  onChange={(e)=>{inputHandle(e)}}  />
                </FormControl>
            </div>
        </Box>
            <div className='filediv' style={{padding:'20px 0 10px'}}>
                {loading?<div><Button variant="outlined" disabled>wait....</Button></div>:<ColorButton onClick={()=>{handleSubmit()}} variant="contained">Submit</ColorButton>}
            </div>
            <div className='filediv'>
                <div>Already have an account,<Link style={{color:"rgb(6, 69, 69)"}} to={'/login'}>click here</Link></div>
            </div>
        </div>
        </div>
    )

}