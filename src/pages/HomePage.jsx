import React from 'react';
import Img from '../assets/Reading-Glasses.jpg';
import Img2 from '../assets/women.webp';
import Img3 from '../assets/men.webp';
import Img5 from '../assets/children.webp';
import Img6 from '../assets/sun.jpg';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

  return (
    <div className='begraond'>

      <img
        className="begraond-img"
        src={Img}
        alt=""
      />
      <div className='font'>
        <h1>Our store</h1>
        <hr />
      </div>
      <div className='row'>
        <div className='image-container'>
          <img className='chldrin' src={Img5} alt="" />
          <div className='overlay'>
            <button ><Link to="childrens">Children's collection</Link></button>
          </div>
        </div >
        <div className='image-container'>
          <img className='women' src={Img2} alt="" />
          <div className='overlay'>
            <button> <Link to="womens">Women's collection</Link></button>
          </div>
        </div>
      </div>
      <div className='row2'>
        <div className='image-container'>
          <img className='men' src={Img3} alt="" />
          <div className='overlay'>
            <button><Link to="men">Men's collection</Link></button>
          </div>
        </div>
        <div className='image-container'>
          <img className='contct' src={Img6} alt="" />
          <div className='overlay'>
            <button> <Link to="sunglasses">Sunglasses</Link></button>
          </div>
        </div>
      </div>
    </div>

  );
};
export default HomePage;