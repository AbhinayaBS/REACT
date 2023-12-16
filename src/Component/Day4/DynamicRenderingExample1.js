import React, { useState } from 'react'

const isLoggedIn = false;

export default function DynamicRenderingExample1(){
    if(isLoggedIn){
        return <p>Welcome Back Dude!!!</p>
    }
    else{
        return <p>Please log in....!</p>
    }
}