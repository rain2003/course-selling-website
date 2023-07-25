/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function ShowCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
    fetch("http://localhost:3000/admin/courses", {
        method : "GET",
        headers : {
            "Authorization" : "Bearer " + localStorage.getItem("token")
        }
    }).then((res)=>{
        res.json().then((data)=>{
            setCourses(data.courses);
        })
    })
    },[])
    // Add code to fetch courses from the server
    // {todos.map((todo, index) => (
    //     <div key={todo.id} style={{ marginTop: "10px" }}>
    //       <li>
    //         Id: {todo.id}
    //         <br />
    //         Title: {todo.title}
    //         <br />
    //         Message: {todo.description}
    // and set it in the courses state variable.
    return (
        <div>
            <h1>Available Courses</h1>
            {courses.map((course, index) => (
            <Course key={index} course={course} />
        ))}
        </div>
    )
      
}
function Course(props){
    return <Card   style={{
        border : "2px solid black",
        width : 300,
        margin : 10,
        height : 200
    }}>
        <Typography>{props.course.title}</Typography>
        <Typography>{props.course.description}</Typography>
    </Card>
}



export default ShowCourses;