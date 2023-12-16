import React, { useState } from 'react'

export default function StateHoldObject()
{
const[college,setCollege]=useState({cid:1, cname:"skct", year:2023})
//spread to change constant

const changeDemo=()=>{
    setCollege((prevState)=>{return{...prevState,year:2024}})
}

const changeClg=()=>{
    setCollege((prevState)=>{return{...prevState,cid:4}})
}

const changeCLG=()=>{
    setCollege((prevState)=>{return{...prevState,cname:"Sri Krishna Instutions"}})
}
return(
    <div>
    <><h1>College ID is {college.cid}</h1>
    <h1>College name is {college.cname}</h1>
    <h1>Year {college.year}</h1></>

    <button onClick={changeDemo}>changeYear</button>
    <button onClick={changeClg}>changeID</button>
    <button onClick={changeCLG}>changeNAME</button>
    </div>
)
}