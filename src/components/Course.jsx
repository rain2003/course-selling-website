import { useState } from "react";
import { json, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Card, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
// import { Course } from "./ShowCourses";

function Course(){
    const [courses , setCourses] = useState([]);
    let {courseId} = useParams();
    useEffect(()=>{
        const fetch = async()=>{
            const res = await axios.get("http://localhost:3000/admin/courses",{
                headers : {
                    "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            })
            setCourses(res.data.courses);
        }
        fetch();
    },[])
 
    let coursedata= null;
    courses.map((course)=>{
        if ( courseId == course.id){
            coursedata = course;
        }
    })
    if(!coursedata){
        return <div>
            Loading...
        </div>
    }
    return <div style={{
        display: 'flex',
    }}>
    <CardGrid course = {coursedata}/>
    <UpdateGrid courses = {courses} setCourses = {setCourses} course = {coursedata}/>
    </div>
}
function UpdateGrid(props){
    const course = props.course
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [imageLink , setImageLink] = useState('');

    return <div style={{
        padding : 20,
        height : "250px",
    }}>
    <Card variant="outlined" style={{
        width : '200%',
        padding: 20,
        marginTop : '30px',
        marginLeft : '50px',
        display : 'flex',
        flexDirection : 'column',
        height : "270px"
        }}>
            
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e)=>{
               setTitle(e.target.value);
            }}/>
            <br />
            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e)=>{
                setDescription(e.target.value);
            }}/>
            <br />
        <TextField id="outlined-basic" label="imageLink" variant="outlined" onChange={(e)=>{
               setImageLink(e.target.value);
            }}/>
        
        <Button variant="contained" style={{
            marginTop : '30px',
            width : 'fit-content'
        }}
        onClick={()=>{
            fetch("http://localhost:3000/admin/courses/" + course.id ,{
                method : "PUT",
                body : JSON.stringify({
                    title : title,
                    description : description,
                    imageLink : imageLink,
                    published : true
                }),
                headers : {
                    "Content-type" : "application/json",
                    "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            }).then((res)=>{
                res.json().then((data)=>{
                    let updatedCourses = [];
                    for ( let i=0;i<props.courses.length;i++){
                        if ( props.courses[i].id == course.id){
                            updatedCourses.push({
                                id : course.id,
                                title : title,
                                description : description,
                                imageLink : imageLink,
                                published : true
                            })
                        }else {
                            updatedCourses.push(props.courses[i])
                        }
                    }
                    props.setCourses(updatedCourses);
                })
            })
        }}
        >ADD</Button>
    </Card>
    </div>


}

function CardGrid(props){
    const coursedata = props.course
    return<Card   style={{
        border : "2px solid black",
        width : 300,
        margin : 50,
        height : 300,
    }}>
        <div>
        <Typography textAlign={"center"} variant="h5" >{coursedata.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1" >{coursedata.description}</Typography>
        <img src={coursedata.imageLink} style={{width : 300}} />
        </div>
       
        
        
    </Card>
}

export default Course;