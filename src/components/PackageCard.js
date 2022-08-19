import { Button, Typography } from '@mui/material'
import React from 'react'
import {Stack} from '@mui/system'
import packagepic from "../static/Images/packagepic.png"
import starRating from "../static/Images/star.png"
import checkLogo from "../static/Images/check.png"

export default function PackageCard() {
  return (
    <div style={{width:"44vw",marginTop:"20px",marginBottom:"20px",height:"37vh",display:"flex",backgroundColor:"white",boxShadow:"0px 4px 16px rgba(0, 0, 0, 0.13)",borderRadius:"12px"}}>
        <div style={{width:"45%",height:"100%"}} className="left-content">
            <img src={packagepic} style={{width:"16vw",marginLeft:"15px",marginTop:"15px"}} />
            <Typography style={{marginLeft:"15px",fontSize:"12px",marginTop:"5px",color:"#5F5F5F",fontWeight:"bold"}}>1.2k enrolled</Typography>
            <Stack direction={"row"} spacing={1} style={{marginTop:"3px"}}>
                <Typography style={{color:"#E59819",fontSize:"13px",marginLeft:"15px",marginTop:"1px"}}>4.7</Typography>
                <Stack direction={"row"} spacing={1}>
                    <img style={{width:"1vw",height:"2.5vh"}} src={starRating}/>
                    <img style={{width:"1vw",height:"2.5vh"}} src={starRating}/>
                    <img style={{width:"1vw",height:"2.5vh"}} src={starRating}/>
                    <img style={{width:"1vw",height:"2.5vh"}} src={starRating}/>
                    <img style={{width:"1vw",height:"2.5vh"}} src={starRating}/>
                </Stack>
                <Typography style={{fontSize:"13px"}}>(12,340)</Typography>
            </Stack>
        </div>
        <div style={{width:"55%",height:"100%",color:"#5F5F5F"}} className="right-content">
            <Typography style={{color:"#0B6E4F",fontWeight:"bold",fontSize:"20px",marginTop:"15px"}} >Gate XE Thermodynamics</Typography>
            <Stack direction={"column"} style={{marginTop:"8px"}} spacing={1}>
                <Stack direction={"row"} spacing={1}>
                    <img src={checkLogo} style={{width:"1.2vw",height:"2.5vh",marginTop:"3px"}}/>
                    <Typography style={{color:"#5F5F5F",fontWeight:"bold"}}>General Aptitude</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                    <img src={checkLogo} style={{width:"1.2vw",height:"2.5vh",marginTop:"3px"}}/>
                    <Typography style={{color:"#5F5F5F",fontWeight:"bold"}}>Food Mechanics</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                    <img src={checkLogo} style={{width:"1.2vw",height:"2.5vh",marginTop:"3px"}}/>
                    <Typography style={{color:"#5F5F5F",fontWeight:"bold"}}>Food technology</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                    <img src={checkLogo} style={{width:"1.2vw",height:"2.5vh",marginTop:"3px"}}/>
                    <Typography style={{color:"#5F5F5F",fontWeight:"bold"}}>Engineering mathematics</Typography>
                </Stack>
            </Stack>
            <Button variant={"contained"} style={{width:"11vw",height:"5vh",fontSize:"13px",textTransform:"none",borderRadius:"16px",color:"white",fontWeight:"bold",backgroundColor:"#13AE7E",boxShadow:"0px 4px 13px rgba(0, 0, 0, 0.25)",marginTop:"9px"}}>View Package</Button>
        </div>
    </div>
  )
}
