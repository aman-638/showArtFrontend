import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";

import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const {id} = useParams();
  const [product, setproduct] = useState([]);
  const [apparelData, setapparelData] = useState([]);
  let storeCart=JSON.parse(localStorage.getItem("store_cart"))||[];
  // console.log(storeCart)
  useEffect(() => {
    axios.get(`https://show-art.herokuapp.com/${id}`)
      .then((res) => {
        setproduct(res.data);
       
      });
    axios
    .get("https://show-art.herokuapp.com")
    .then((res) => {
      setapparelData(res.data.gear);
    });
  }, []);

  const navigate = useNavigate();


  return (
    <>

          <div id="product-part">
            <div id="product-left-part">
              <div id="main-img-part">
                <img src={product.art_img} alt="" />
              </div>
              <div id="other-img-part">
              
              </div>
            </div>
            <div id="product-right-part">
              <div id="prod-head">
                <p>{product.art_name}</p>
              </div>
              <div id="prod-desc">
                <p>{product.art_desc}</p>
              </div>
              <div id="prod-price">
                <p>₹{product.price}</p>
              </div>
                <hr/> <br/>
              <div id="user-gender">
                <h2 className="fkyou">Wanna Buy?</h2>
              </div>
              <br/> 


          <div className="jatinbhai">
               <div id="user-gender-btn">
                <div id="mens-btn">Artist Name</div>
                <div id="womens-btn">{product.artist_name}</div>
              </div>
              <br/>


              <div id="user-gender-btn">

<div id="mens-btn">Contacts:</div> 

<div id="womens-btn">{product.phone}</div>
</div>
            
              </div>




              <br/>

  
               <div className="jatinbhai"> 
           



              <div id="user-gender-btn">
                <div id="mens-btn">Category:</div>
                <div id="womens-btn" className="city-upper-name" >{product.category}</div>
              </div> 


                 
              <br/>
              

             

              <div id="user-gender-btn">
                <div id="mens-btn">Email:</div>
                <div id="womens-btn" className="city-upper-name"> <a href={`mailto:${product.email}`} target="_blank" >{product.email}</a></div>
              </div>
              
              </div>






              <br/>



              <div id="user-gender-btn">
                <div id="mens-btn">City:</div>
                <div id="womens-btn" className="city-upper-name">{product.city}</div>
              </div>
            
            
      
            </div>
          </div>
       
   

        </>
  );
};

export default ProductDetails;
