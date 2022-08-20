import { Grid, Typography } from '@mui/material';
import React, { useState,useEffect } from 'react'
import LeftSideBar from '../../components/LeftSideBar'
import "./style.css"
import SubjectQuestionCard from '../../components/SubjectQuestionCard';
import { Link, useSearchParams } from 'react-router-dom'
import { circleQuizQuestions,algebraQuizQuestions,trignometryQuizQuestions,triangleQuizQuestions,verbalQuizQuestions,grammerQuizQuestions } from '../../static/content/QuestionsData';
export default function Questions() {
    const [searchParams] = useSearchParams()
    const mathsfilters = ["Circle","Triangles","Quadrilaterals","Co-ordinate systems","Co-ordinate systems","Quadrilaterals","Co-ordinate systems"]
    const englishFilters = ["EngSubTopic1","EngSubTopic2","EngSubTopic3","EngSubTopic4"];

    

    function getQuestions() {
        if(searchParams.get("subject") === "Mathematics" && searchParams.get("topic") === "Circle") {
            return circleQuizQuestions
        }
        else if(searchParams.get("subject") === "Mathematics" && searchParams.get("topic") === "Triangles") {
            return triangleQuizQuestions
        }
        else if(searchParams.get("subject") === "Mathematics" && searchParams.get("topic") === "Trignometry") {
            return trignometryQuizQuestions
        }
        else if(searchParams.get("subject") === "Mathematics" && searchParams.get("topic") === "Algebra") {
            return algebraQuizQuestions
        }
        else if(searchParams.get("subject") === "English" && searchParams.get("topic") === "Verbal") {
            return verbalQuizQuestions
        }
        else if(searchParams.get("subject") === "English" && searchParams.get("topic") === "Grammar") {
            return grammerQuizQuestions
        }

        else if(searchParams.get("subject") === "Mathematics") {
            return circleQuizQuestions
        }
        else {
            return verbalQuizQuestions
        }
    }
    function getFilters() {
        if(searchParams.get("subject") === "Mathematics") {
            return mathsfilters
        }
        else if(searchParams.get("subject") ==="English") {
            return englishFilters
        }
    }
    useEffect(()=>{
        console.log(searchParams.toString())
    },[])

    return (
        <div className='questions-container'>
            <div className="left-bar">
                <LeftSideBar />
            </div>
            <div className="right">
                <div className="filter-container">
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography style={{color:"#0B6E4F",fontWeight:"bold"}}>Topic :-</Typography>
                        </Grid>
                       {
                        getFilters().map((e)=> {
                            return (
                                <Grid item>
                                    <FilterTag name={e}/>
                                </Grid>
                            )
                        })
                       }
                    </Grid>
                    {
                        getQuestions().map((question, i) => {
                            return <SubjectQuestionCard key={i} serialNumber={i + 1} data={question} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function FilterTag(props) {
    const [searchParams] = useSearchParams()
    return (
        <div style={{width:"auto",paddingLeft:"12px",paddingRight:"12px",border:"2px solid #C4C4C4",height:"auto",borderRadius:"6px"}}>
            <Link to={`/questions?subject=${searchParams.get("subject")}&topic=${props.name}`} style={{ textDecoration:"none", margin:"5px", fontSize:"12px",color:"#0B6E4F",fontWeight:"600",textAlign:"center"}}>{props.name}</Link>
        </div>
    );
}