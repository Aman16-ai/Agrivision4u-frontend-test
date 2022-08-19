import React from 'react'
import "./style.css"
import picture from "../../static/Images/pic.png"
import Carousel from '../../components/Carousel'
import styled from '@emotion/styled'
import mathspic from "../../static/Images/mathsimg.png"
import engpic from "../../static/Images/englishpic.png"
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link, useSearchParams } from 'react-router-dom'
import SectionQuestionCard from '../../components/SectionQuestionCard'
import { ArrowDropDown } from '@mui/icons-material'
import { circleQuizQuestions,triangleQuizQuestions } from '../../static/content/QuestionsData'
import PackageCard from '../../components/PackageCard'
import PackageCarousel from '../../components/PackageCarousel'

export default function Section() {

    const [searchParams] = useSearchParams()
    

    const subjects = [
        {
            name: "Mathematics",
            subpic: mathspic
        },
        {
            name: "English",
            subpic: engpic
        },
        {
            name: "Mathematics",
            subpic: mathspic
        },
        {
            name: "English",
            subpic: engpic
        },
        {
            name: "Mathematics",
            subpic: mathspic
        },
        {
            name: "English",
            subpic: engpic
        }

    ]
    const topic = {
        "Geometry": ["Circle", "Triangle", "Quadrilaterals", "Parabola"],
        "Algebra": ["subtopic1", "subtopic2"]
    }
    const getQuizQuestion = () => {
        if(searchParams.get("topicType")==="Circle") {
            return circleQuizQuestions
        }
        else if(searchParams.get("topicType")==="Triangle") {
            return triangleQuizQuestions
        }
        else {
            return circleQuizQuestions
        }
    }
    return (
        <div className='section-container'>
            <div className="intro-container">
                <div className="left-sub-container">
                    <div className="content">
                        <h5>Welcome to</h5>
                        <h3>AgriAbhyass</h3>
                        <p>As they say, practice makes you perfect.<br />
                            AgriAbhyaas is your one stop platform to practice
                            and excel <br /> in challenging subjects. </p>

                        <h5>KNOW YOUR SELF TESTS</h5>
                    </div>
                </div>
                <div className="right-sub-container">
                    <img src={picture} />
                </div>
            </div>
            <div className="subjects-corousel">
                <Carousel subjects={subjects} />
            </div>
            <hr style={{ marginTop: "40px", width: "76vw" }} />
            <p id='sub-para'>Explore various topics for quiz to know where you stand. WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi. Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus diam. Sed nisi. Nbcnt per conubia nostra.</p>

            <div className="subject-question-container">
                <div className="subject-choice">
                    {
                        Object.keys(topic).map((e) => {
                            return (
                                <div>
                                    <Accordion sx={{ width: "auto", boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDown />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{ width: "80px" }}
                                        >
                                            <Typography style={{ display: "inline" }}>{e}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {
                                                topic[e].map((subTopic) => {
                                                  return <div><Link to={`/?topicType=${subTopic}`} style={{textDecoration:"none",color:"black"}}>{subTopic}</Link>  </div>
                                                })
                                            }
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="questions-contents">
                    {
                        getQuizQuestion().map((question, i) => {
                            return <SectionQuestionCard key={i} serialNumber={i + 1} data={question} />
                        })
                    }
                </div>
            </div>

            <div style={{marginTop:"90px",marginLeft:"70px",marginBottom:"20px"}}>
                <Typography style={{color:"#0B6E4F",fontWeight:"bolder"}} variant={"h4"}>Checkout other packages</Typography>
                <div style={{width:"44vw",height:"auto"}}>
                    <PackageCarousel/>
                </div>
            </div>
        </div>

    )
}
