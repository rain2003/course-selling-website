/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        const fetch = async()=>{
            const res = await axios.get("http://localhost:3000/admin/courses",{
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }})
            setCourses(res.data.courses)
        }
        fetch();
        
    },[])
    return (
        <div >
            <h2>Available Courses</h2>
            <div style={{
                display : "flex",
                flexWrap : "wrap",
                justifyContent : 'center'
            }}>
            {courses.map((course, index) => (
            <Course key={index} course={course} />
        ))}
            </div>
        </div>
    )
      
}
 function Course(props){
    return <Card   style={{
        border : "2px solid black",
        width : 300,
        margin : 10,
        height : 300,
    }}>
        <div>
        <Typography textAlign={"center"} variant="h5" >{props.course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1" >{props.course.description}</Typography>
        <img src={props.course.imageLink} style={{width : 300}} />
        </div>
       
        
        
    </Card>
}



export default ShowCourses;