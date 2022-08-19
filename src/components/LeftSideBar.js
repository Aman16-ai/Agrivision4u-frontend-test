import React from 'react'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
export default function LeftSideBar() {

    const subjects={
        "MATHEMATICS":["Geometry","Algebra","Trignometry","Arthimetics","Statistics"],
        "ENGLISH":["Verbal","Grammar","Reading"]
    }
  return (
    <div style={{width:"20vw",height:"100vh",backgroundColor:"#0B6E4F",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Stack style={{marginTop:"50px"}} direction={"column"}>
            <Typography style={{fontWeight:"bold",fontSize:"20px",color:"white"}}>All Subjects</Typography>

            {/* <div style={{marginTop:"40px"}} className="sub1">
                <Typography style={{color:"white",fontSize:"15px"}}>MATHEMATICS</Typography>
                <hr style={{width:"10vw",backgroundColor:"white"}} />
                <Typography style={{marginTop:"15px",color:"#DADADA"}}>Geometry</Typography>
            </div> */}

            {
                Object.keys(subjects).map((subject)=> {
                    return (
                        <div style={{marginTop:"40px"}} className="sub1">
                <Typography style={{color:"white",fontSize:"15px"}}>{subject}</Typography>
                <hr style={{width:"10vw",backgroundColor:"white"}} />
                {
                    subjects[subject].map((e)=> {
                        return <Typography style={{marginTop:"15px",color:"#DADADA"}}>{e}</Typography>
                    })
                }
            </div>
                    );
                })
            }
        </Stack>
    </div>
  )
}
