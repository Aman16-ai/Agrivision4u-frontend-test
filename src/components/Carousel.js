import React from 'react'
import Slider from 'react-slick'
import SubjectCard from './SubjectCard'

export default function Carousel(props) {
    const { subjects } = props
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    }
    return (
        <div>
            <Slider {...settings} >
                {
                    subjects.map((e) => {
                        return <div><SubjectCard name={e.name} subpic={e.subpic} /></div>
                    })
                }
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
