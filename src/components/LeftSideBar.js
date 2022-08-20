import React from 'react'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
import { Link, useSearchParams } from 'react-router-dom'
export default function LeftSideBar() {

    const [searchParams] = useSearchParams()
    const subjects={
        "MATHEMATICS":["Geometry","Algebra","Trignometry","Arthimetics","Statistics"],
        "ENGLISH":["Verbal","Grammar","Reading"]
    }
  return (
    <div style={{width:"20vw",height:"100vh",backgroundColor:"#0B6E4F",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Stack style={{marginTop:"50px"}} direction={"column"}>
            <Typography style={{fontWeight:"bold",fontSize:"20px",color:"white"}}>All Subjects</Typography>
    

            {
                Object.keys(subjects).map((subject)=> {
                    return (
                        <div style={{marginTop:"40px"}} className="sub1">
                <Typography style={{color:"white",fontSize:"15px"}}>{subject}</Typography>
                <hr style={{width:"10vw",backgroundColor:"white"}} />
                {
                    subjects[subject].map((e)=> {
                        return <Link to={`/questions?subject=${subject==="MATHEMATICS"?"Mathematics":"English"}&topic=${e}`} style={{display:"block",textDecoration:"none" , marginTop:"15px",color:"#DADADA"}}>{e}</Link>
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
