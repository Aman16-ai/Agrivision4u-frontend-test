import { Grid, Typography } from '@mui/material';
import React from 'react'
import LeftSideBar from '../../components/LeftSideBar'
import "./style.css"
import SubjectQuestionCard from '../../components/SubjectQuestionCard';
import SectionQuestionCard from '../../components/SectionQuestionCard';
import { circleQuizQuestions } from '../../static/content/QuestionsData';
export default function Questions() {
    const filters = ["Circle","Triangles","Quadrilaterals","Co-ordinate systems","Co-ordinate systems","Quadrilaterals","Co-ordinate systems"]
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
                        filters.map((e)=> {
                            return (
                                <Grid item>
                                    <FilterTag name={e}/>
                                </Grid>
                            )
                        })
                       }
                    </Grid>
                    {/* <div className="questions">
                    
                    </div> */}
                    {
                        circleQuizQuestions.map((question, i) => {
                            return <SubjectQuestionCard key={i} serialNumber={i + 1} data={question} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function FilterTag(props) {
    return (
        <div style={{width:"auto",paddingLeft:"12px",paddingRight:"12px",border:"2px solid #C4C4C4",height:"auto",borderRadius:"6px"}}>
            <Typography style={{margin:"5px", fontSize:"12px",color:"#0B6E4F",fontWeight:"600",textAlign:"center"}}>{props.name}</Typography>
        </div>
    );
}