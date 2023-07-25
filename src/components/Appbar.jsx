/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
function Appbar(){
    const navigate = useNavigate();
    const [Useremail , setUserEmail] = useState(null);
    function callback2(data){
        if (data.username){
            setUserEmail(data.username);
        }
    }
    function callback1(res){
        res.json().then(callback2);
    }
    useEffect(()=>{
        fetch("http://localhost:3000/admin/me" , {   
            method : "GET",
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    } , [])


    if (Useremail){
        return <div style={{
            display : 'flex',
            justifyContent : 'space-between'
        }}>
            <h2>Coursera</h2>
            <div style={{
                display : 'flex'
            }}>
                <div style={{
                    marginRight : '20px'
                }}>
                <Button variant="contained"
                onClick={()=>{
                    localStorage.setItem("token",null);
                    window.location = "/"; 
                }}
                >Logout</Button>
                </div>
            </div>
        </div> 
    }

return <div style={{
    display : 'flex',
    justifyContent : 'space-between'
}}>
    <h2>Coursera</h2>
    <div style={{
        display : 'flex'
    }}>
        <div style={{
            marginRight : '20px'
        }}>
        <Button variant="contained"
        onClick={()=>{
            navigate("/register")
        }}
        >Sign Up</Button>
        </div>
        <div>
        <Button variant="contained"
        onClick={()=>{
            navigate('/login')
        }}
        >Sign In</Button>
        </div>
    </div>
</div>

}

export default Appbar;