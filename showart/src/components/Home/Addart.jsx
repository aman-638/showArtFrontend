import { useState } from "react";
import axios from "axios";

export const Addart=()=>{
    const [art,Artdata]=useState({});
    const handlechange =(e)=>{
       const {id,value}=e.target;
        Artdata({
            ...art,
            [id]:value
        })
    }


    const handleSubmit=(e)=>{
        axios.post("https://show-art.herokuapp.com/",art).then((res)=>{
          alert("DATA ADDED SUCCESSFULLY")
        })
    }
   return(
       <div className='inputbox'>
           <form onSubmit={handleSubmit}>
               <label>ART NAME</label><br></br>
               <input onChange={handlechange} placeholder="artname" type="text" id="artname"></input><br></br>
               <label>ART DSCRIPTION</label><br></br>
               <input onChange={handlechange} placeholder="art description" type="text" id="art_desc"></input><br></br>
               <label>ART IMAGE</label><br></br>
               <input onChange={handlechange} placeholder="img_url" type="text" id="art_img"></input><br></br>
               <label>ART PRICE</label><br></br>
               <input onChange={handlechange} placeholder="Price" type="number" id="price"></input><br></br>
               <label>ART CATEGORY</label><br></br>
               <select onChange={handlechange} name="" id="category"><br></br>
                <option>-----</option>
                <option>painting</option>
                <option>sculpture</option>
                <option>mandal</option>
                <option>stitiching</option>
               </select><br></br>
               <label>ARTIST NAME</label><br></br>
               <input onChange={handlechange} type="text" id="artist_name"></input><br></br>
               <label>ARTIST CITY</label><br></br>
               <select onChange={handlechange} name="" id="city"><br></br>
                <option>-----</option>
                <option>patna</option>
                <option>mumbai</option>
                <option>pune</option>
                <option>delhi</option>
                <option>jaipur</option>
                <option>tamilnadu</option>
               </select><br></br>
               <label>ARTIST CONTACT</label><br></br>
               <input onChange={handlechange} type="number" id="phone"></input><br></br>
               <label>ARTIST EMAIL</label><br></br>
               <input onChange={handlechange} type="text" id="email"></input><br></br>
              <input type="submit" ></input>
           </form>
       </div>
   )
}