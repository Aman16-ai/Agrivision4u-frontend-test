import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function SubjectCard(props) {
    const {name,subpic} = props
    const navigate = useNavigate()

    const handleSubjectClick = () => {
      navigate(`/questions?subject=${name}`)
    }
  return (
    <div onClick={handleSubjectClick} style={{width:"180px" ,borderRadius:"0.7rem"}} >

        <img src={subpic} style={{width:"180px",height:"250px" ,marginBottom:"0px"}}/>
        <h5 style={{
            backgroundColor:"#13AE7E",
            marginTop:"0px",
            height:"18px", 
            width:"160px",
            color:"white",
            fontWeight:"500",
            textAlign:"center",
            position:"absolute",
            bottom:"0",
            marginBottom:"15px",
            marginLeft:"10px",
         }}> {name}</h5>
    </div>
  )
}
