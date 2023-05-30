import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
// import { BrowserRouter, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaPinterest} from 'react-icons/fa';
import sliderImg from './images/slider-img.jpg';
import hdphnImg from './images/img-2.png';
import hdbg from './images/img-2_1.png';
import hdbgg from './images/img-2_2.png';
import bil from './images/bimgL.png';
import i1 from './images/icon1.png';
import i2 from './images/icon2.png';
import i3 from './images/icon3.png';
import i4 from './images/icon4.png';
import i5 from './images/icon5.png';
import woman from './images/woman-img.jpg';
import hphn from './images/headphone.png';
import hphn_u from './images/hphn-u.png';
import hphn_bg from './images/hphn-bg.png';
import shape from './images/shap3.png';
import blog from './images/blog.jpg';
import blog_01 from './images/blog-01.jpg';
import blog_02 from './images/blog-02.jpg';
import Registration from './Registration';
import Product from './Product';
import { useNavigate } from 'react-router-dom';


 function Home () {
  const navigate = useNavigate();
  const handleButtonClick = () =>{
    navigate('/');
  };
    // const { loginWithRedirect } = useAuth0();
    // const {logout, isAuthenticated} = useAuth0();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const Navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
//   const [redirectToRegistration, setRedirectToRegistration] = useState(false);

//   const handleSignUpLogin = () => {
//     setRedirectToRegistration(true);
//   };
//   const handleShopListing = () => {
//     Navigate('/Product')
//   }

//   if (redirectToRegistration) {
//     return <Registration />;
//   }

  return (
    // <BrowserRouter>
    <div className="app-container">
      <div className="container">
        <div className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <a className="header-envato_market" href="#">SuperSonic</a>
            </div>
            <div className="navbar-actions">
              <div className="navbar-action">

{/*         
              <div className="header-buy-now e-btn--3d -color-primary">
                     {
                    isAuthenticated ? 
                    <li>
                    <button className="logout-button"onClick={() => logout({ returnTo: window.location.origin})}>Log Out</button>
                    </li>
                    :<li>
                        <Link to ="/Product">
                    <button className="login-button" onClick={() => loginWithRedirect()}>Log In</button>
                    </Link>
                    </li>
                }
        </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="button-wrapper">
          <button onClick={handleButtonClick} className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <Link to="/Product" className="nav-button">Shop</Link>
          <button className="nav-button">Contact Us</button>
        </div>

        <div className="content-wrapper">
          <div className="main-content">
          <div className="div-elementor-widget-wrap">
                                    <div className="elementor-heading-title">
                                      <div className="text-wrapper-2">Sing Along</div>
                                      <div className="pseudo-4" />
                                    </div>
                                    <div className="h2-elementor-heading-title">
                                      <h1 className="inspired-design-quality-sound-with-beats">
                                        Inspired Design &amp; Quality
                                        <br />
                                        Sound With Beats
                                      </h1>
                                    </div>
                                    <div className="div-elementor-text-editor">
                                      <p className="musicTag">
                                       Love what you listen, listen to what you love. Music speaks when
                                        <br />
                                        words dont. Make it clear. Let Music reach your heart.
                                      </p>
                                    </div>
                                    <div className="a-elementor-button-link">
                                      <div className="text-wrapper-3">Buy Now</div>
                                    </div>
                                  </div>
           
          </div>

          <div className="image-container">
            <img src={sliderImg} alt="#" />
          </div>
        </div>
      </div>

   
      
        <div className='secondBody'>
          <div className='wwrap'>

            <div className='Htitle'>
              <div className='twrap-1'>Simply awesome</div>
              <div className='pseudo-9'></div>
            </div>
          </div>
          
          <div className='bodyImg'> 
          <img src={hdphnImg} alt="#" />
          </div>
         <div className='hdImg'> 
         <img src={hdbgg} alt="#" />  
         </div>
         
         <div className='tagline'>
             <p>
               Sed viverra ipsum nunc aliquet bibendum.<br />
                Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.<br />
                Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
             </p>
          </div>

          {/* <div className='imgL'>
           
            <img src={bil} alt="#" />
          </div> */}
          <div className='text-2'>
            <h1 className='ttext'>
              Amazing music gadgets <br/>
              for music lovers
            </h1>

          </div>
          <div className="element-buy">
            <button className="twrap-2">Buy Now</button>
          </div>


        </div>
   

      <section>
        <div className='thirddBody'>
           {/* <div className=''>
           
           image section
          </div> */}
           <div className='Htitle2'>
              <div className='twrap-3'>Advanced Features</div>
              <div className='pseudo-10'></div>
              <div className='ttext-2'>
                <h1 className='tag-2'>Ultimate comfort and best <br/>
                    sound
                </h1>
                <div className='box-1'>
                <div className='ic1'>
           
                  <img src={i1} alt="#" />
                      </div>
                <span class="sentence-1">Bluetooth connectivity</span>
                </div>


                <div className='box-2'>
                <div className='ic2'>
           
                    <img src={i2} alt="#" />
               </div>
                <span class="sentence-2">Long lasting battery</span>
                </div>


                <div className='box-3'>
                <div className='ic3'>
           
                  <img src={i3} alt="#" />
                      </div>
                <span class="sentence-3">Higher water & dust resistance</span>
                </div>

                <div className='box-4'>
                <div className='ic4'>
           
           <img src={i4} alt="#" />
               </div>
                <span class="sentence-4">One Touch Control</span>
                </div>

                <div className='box-5'>
                  <div className='ic5'>
           
                  <img src={i5} alt="#" />
                      </div>
                <span class="sentence-5">Active noise cancelling</span>
                </div>
              </div>
            </div>
            <div className='wm'>
           
                  <img src={woman} alt="#" />
                      </div>

             <div className="element-buy-2">
               <button className="twrap-8">Buy Now</button>
             </div>          


                      

        </div>
      </section>

      <div className='fourthBody'>
          <div className='wwrap-4'>

            <div className='Htitle-4'>
              <div className='twrap-4'>Long lasting comfort</div>
              <div className='pseudo-16'></div>
            </div>
          </div>
          
          <div className='hph-main'> 
          <img src={hphn} alt="#" />
          </div>
         <div className='hph-overlay'> 
         <img src={hphn_u} alt="#" />  
         </div>
         <div className='hph-overlay-2'> 
         <img src={hphn_bg} alt="#" />  
         </div> 

        
         
         <div className='tagline-4'>
             <p>
               Sed viverra ipsum nunc aliquet bibendum.<br />
                Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.<br />
                Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
             </p>
          </div>

          {/* <div className='imgL'>
           
            <img src={bil} alt="#" />
          </div> */}
          <div className='text-4'>
            <h1 className='ttext-4'>
              High-Quality Sound <br/>
              True Wireless Earbuds
            </h1>

          </div>
          <div className="element-buy-4-2">
            <button className="twrap-4-2">Buy Now</button>
          </div>


        </div>


          <div className='fifthbody'>
          <div className='wwrap-5'>

<div className='Htitle-5'>
  <div className='twrap-5'>Good treble performance</div>
  <div className='pseudo-17'></div>
</div>
</div>
        ,<div className='container-im'>
         <div className='grid-item'>
           
           <img src={blog} alt="#" class='small-image' />
         </div> 

         <div className='grid-item'>
           
           <img src={blog_01} alt="#" class='small-image' />
         </div> 

         <div className='grid-item'>
           
           <img src={blog_02} alt="#" class='small-image' />
         </div> 
         </div>



          </div>


          





     
<div className="footer">
  <div className="footer-container">
    <div className="footer-subscribe">
      <h4>Subscribe Our Newsletter</h4>
      <form>
        <input type="email" placeholder="Your Email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
    <div className="footer-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact Us</a>
    </div>

    <div className="footer-social">
  <a href="#" target="_blank" rel="noopener noreferrer" className="icon facebook">
    <FaFacebook />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" className="icon twitter">
    <FaTwitter />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" className="icon pinterest">
    <FaPinterest />
  </a>
</div>



   
  </div>
</div>


        
   




    </div>
  

    // </BrowserRouter>
  );
}

export default Home;
