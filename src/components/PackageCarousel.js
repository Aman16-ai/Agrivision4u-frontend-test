import React from 'react'
import Slider from 'react-slick'
import PackageCard from './PackageCard'

export default function PackageCarousel(props) {
    const { subjects } = props
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    }
    return (
        <div>
            <Slider {...settings} >
                <div>
                    <PackageCard/>
                </div>
                <div>
                    <PackageCard/>
                </div>
                <div>
                    <PackageCard/>
                </div>
                <div>
                    <PackageCard/>
                </div>
                <div>
                    <PackageCard/>
                </div>
            </Slider>
        </div>
    )
}
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",background:"#5F5F5F",borderRadius:"1rem"}}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#5F5F5F",borderRadius:"1rem" }}
        onClick={onClick}
      />
    );
  }
