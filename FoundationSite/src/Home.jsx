import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bob1 from '/home/edjacobian/Foundation/FoundationSite/src/images/bob1.jpg';
import Bob2 from '/home/edjacobian/Foundation/FoundationSite/src/images/bob2.jpg';
import Bob3 from '/home/edjacobian/Foundation/FoundationSite/src/images/bob3.jpg';
import Bob4 from '/home/edjacobian/Foundation/FoundationSite/src/images/bob4.jpg';
import Bob5 from '/home/edjacobian/Foundation/FoundationSite/src/images/bob5.jpg';
import Bob6 from '/home/edjacobian/Foundation/FoundationSite/src/images/bob6.jpg';
import Bob7 from '/home/edjacobian/Foundation/FoundationSite/src/images/bob7.jpg';
import Bob8 from '/home/edjacobian/Foundation/FoundationSite/src/images/bob8.jpg';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear'
  };
  
  
  return (
    <div>
      <div className="top-bar">
        <h1>Robert Berotti Memorial Foundation</h1>
      </div>
      <div className="main-box">
        <div className="main-text-box">
          <h2>Your Text Here</h2>
            <p>This is your text content.</p>
        </div>
          <div className='slideshow'>
            <Slider {...settings}>
              <div>
              <img src={Bob1}className='homephotos'/>
              </div>
              <div>
              <img src={Bob2}className='homephotos' />
              </div>
              <div>
              <img src={Bob3}className='homephotos' />
              </div>
              <div>
              <img src={Bob4}className='homephotos' />
              </div>
              <div>
              <img src={Bob5}className='homephotos' />
              </div>
              <div>
              <img src={Bob6}className='homephotos' />
              </div>
              <div>
              <img src={Bob7}className='homephotos' />
              </div>
              <div>
              <img src={Bob8}className='homephotos' />
              </div>
            </Slider>
          </div>
        </div>
    </div>
  );
}

export default Home;
