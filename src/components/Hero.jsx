import React from 'react';
import { UilInstagram, UilLinkedin, UilWhatsapp  } from '@iconscout/react-unicons'

    function HeroSection() {
      return (
        <div className="container col-xxl-8 px-2 py-5" id="home">
          <div className="home-row row flex-lg-row-reverse justify-content-center align-items-center mt-lg-5 py-lg-5 mt-lg-5 w-100 g-5">

            <div className="col-10 col-sm-8 col-lg-5 mt-lg-5">
              <img
                src="/avatar-kelvin.jpeg"
                className="home-image d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="300"
                loading="lazy"
              />


            </div>
            <div className="col-lg-5">
              <h1 className="display-5 fw-bold  lh-1 mb-3">
            <span className='importante'>Kelvin</span> Saavedra
              </h1>
              <p className="lead mb-4">
      <span className='importante'>Disegnatore 3D</span><br></br><br></br>
      A skilled 3D artist brings imagination to life through intricate digital creations and immersive visual storytelling.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href='https://wa.me/+393463274783' className='col-4 col-lg-5' target='_blank'>  
              <button class = "send-button ">
                   
  <div class="svg-wrapper-1">

    <div class="svg-wrapper">
    
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
      </svg>
     
    </div>
    
  </div>

  <span>Hire me</span>

</button>
  </a>
              </div>
            </div>
            <div className='home-social col-lg-2 flex-row flex-md-column'>

<a href='https://www.instagram.com/klein.enriquest/' target='_blank'>
<UilInstagram />

</a>
<a target='_blank'>
<UilLinkedin />

</a>
<a target='_blank'>
<UilWhatsapp />

</a>
</div>
          </div>
        </div>
      );
    }
    

    



export default HeroSection