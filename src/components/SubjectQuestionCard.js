import { Button, Typography } from '@mui/material'
import { height, Stack } from '@mui/system'
import React, { useRef, useState,useEffect } from 'react'
import {RadioGroup,Radio,FormControl,FormControlLabel} from '@mui/material'

export default function SubjectQuestionCard(props) {
    const questionData = props.data
    const [userAnswer,setUserAnswer] = useState({});
    const openCardRef = useRef(0)
    const onHandleChange = (e) => {
        if(e.target.value === questionData['correctAnswer']) {
            setUserAnswer({answer:e.target.value,isCorrect:true})
        }
        else {
            setUserAnswer({answer:e.target.value,isCorrect:false})
        }
        
    }

    const handleCheckAnswer = () => {
        openCardRef.current.style.display="block"   
    }
    useEffect(()=> {
        openCardRef.current.style.display="none"
    },[props.data])
    return (
        <div
            style={{
                backgroundColor: "#F8F8F8",
                width: "60vw",
                height: "auto",
            }}
        >
            <Stack direction={"row"} style={{ marginLeft: "50px", marginTop: "20px", marginRight: "40px" }}>
                <Typography style={{ color: "#0B6E4F", fontWeight: "bolder" }} variant={"h4"}>
                    {props.serialNumber}.
                </Typography>
                <Typography style={{ marginLeft: "20px", marginTop: "8px" }} variant={"p"}>
                    {questionData['question']}
                </Typography>
            </Stack>
            <Stack direction={"column"} style={{ marginLeft: "75px", marginTop: "20px", marginRight: "40px" }}>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={onHandleChange}
                    >
                        <FormControlLabel value={questionData['optionA']} control={<Radio />} label={questionData['optionA']} />
                        <FormControlLabel value={questionData['optionB']} control={<Radio />} label={questionData['optionB']} />
                        <FormControlLabel value={questionData['optionC']} control={<Radio />} label={questionData['optionC']} />
                        <FormControlLabel value={questionData['optionD']} control={<Radio />} label={questionData['optionD']} />
                    </RadioGroup>
                </FormControl>
            </Stack>
            <Stack direction={"row"} style={{ marginLeft: "180px",marginBottom:"40px", marginTop: "20px", marginRight: "40px" }}>
                <Button onClick={handleCheckAnswer} style={{marginRight:"15px",fontSize:"10px",width:"10vw",color:"white",backgroundColor:'#13AE7E',boxShadow:"0px 4px 13px rgba(0, 0, 0, 0.25)"}}>Answer & solution</Button>
                <Button style={{fontSize:"10px",width:"10vw",color:"white",backgroundColor:'#3362AB',boxShadow:"0px 4px 13px rgba(0, 0, 0, 0.25)"}}>Save for later</Button>
            </Stack>
            <div ref={openCardRef} style={{padding:"10px",boxShadow:" 0px 4px 12px rgba(0, 0, 0, 0.13)" ,display:"none", width:"40vw",height:"25vh",marginBottom:"20px",marginLeft:"130px",marginTop:"30px",backgroundColor:"white"}} className="explanation-card">
                <Typography style={{color:`${userAnswer?.isCorrect?"#13AE7E":"red"}`,fontWeight:"bolder",marginTop:"20px",marginLeft:"18px"}}>
                    {userAnswer?.isCorrect?"Answer is correct!":"Answer is incorrect"}
                </Typography>
                <Typography style={{fontWeight:"bold",marginTop:"10px",marginLeft : "18px"}}>
                    Explanation
                </Typography>
                <Typography style={{marginLeft : "18px ",display:"inline"}}>
                    Answer : <Typography style={{display:"inline",fontWeight:"bold"}}>{questionData?.correctAnswer}</Typography>
                </Typography>
                <Typography style={{marginLeft:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </div>  
        </div>
    )
}
