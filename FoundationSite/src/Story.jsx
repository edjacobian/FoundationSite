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

const Story = () => {
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
    <div className='story-container'>
      <div className="mission-container">
        <div className="mission-text-container">
          <div className="mission-text">
            <p>"We hope by telling Bobby's story we can raise awareness about pancreatic cancer,</p>
            <p>help identify the warning signs, help support those with a diagnosis, those who are fighting,</p>
            <p>those helping support the fight, those who have lost loved ones, and join in celebrations of battles won!"</p>
          </div>
        </div>
      </div>
      <div className='slideshow-container'>
        <Slider {...settings}>
          <div>
            <img src={Bob1} className='storyphotos' alt="Bob 1"/>
          </div>
          <div>
            <img src={Bob2} className='storyphotos' alt="Bob 2" />
          </div>
          <div>
            <img src={Bob3} className='storyphotos' alt="Bob 3" />
          </div>
          <div>
            <img src={Bob4} className='storyphotos' alt="Bob 4" />
          </div>
          <div>
            <img src={Bob5} className='storyphotos' alt="Bob 5" />
          </div>
          <div>
            <img src={Bob6} className='storyphotos' alt="Bob 6" />
          </div>
          <div>
            <img src={Bob7} className='storyphotos' alt="Bob 7" />
          </div>
          <div>
            <img src={Bob8} className='storyphotos' alt="Bob 8" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Story;
