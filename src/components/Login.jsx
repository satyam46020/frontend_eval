import { React,useState } from "react"
import { json } from "react-router-dom"

export const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


const onsubmit=()=>{
    const payload=JSON.stringify({email,password})
    fetch(`${process.env.URL}/login`,{
        method:"POST",
        headers:{
            "content type":"application/json"
        },
        body:payload
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        const token=res.token;
        localStorage.setItem("notice",token)
    })
    .catch((err)=>console.log(err))
}

return (
    <div>
        <h1>login</h1>
        <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={onsubmit}>login</button>
    </div>
)
}