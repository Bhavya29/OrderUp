import React from 'react';
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/order');
  };
  
  return (
    <>
    

<div class="landing-page">
    <div class="overlay"></div>
    <div class="content">
      <img src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png" alt="Pizza Logo" />
      <h1>Welcome to {props.res_name}</h1>
      <p>Order delicious, handcrafted pizza delivered hot & fresh. Taste the tradition 🍕</p>
      <button class="btn" onClick={handleClick} >Order Now</button>
    </div>
  </div>



    
    
    </>
  )
}

export default Home