import React from 'react';
import { UilInstagram, UilLinkedin, UilWhatsapp  } from '@iconscout/react-unicons'

    function HeroSection() {
      return (
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-lg-5 mt-lg-5">

            <div className="col-10 col-sm-8 col-lg-5">
              <img
                src="https://picsum.photos/800"
                className="d-block mx-lg-auto img-fluid"
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
              <p className="lead">
               vivo a Genova Italia, ho 28 anni e sono un <span className='importante'>Disegnatore 3D</span>
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button class="button" type="button">
  <span class="button__text">Download Cv</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
</button>

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