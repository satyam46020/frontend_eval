import { React,useState } from "react"
import { json } from "react-router-dom"

export const Signup=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone_number,setPhone_number]=useState("")
    const [department,setDepartment]=useState("")


const onsubmit=()=>{
    const payload=JSON.stringify({name,email,password,phone_number,department})
    fetch(`${process.env.URL}/signup`,{
        method:"POST",
        headers:{
            "content type":"application/json"
        },
        body:payload
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

return (
    <div>
        <h1>signup</h1>
        <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <input type="text" placeholder="phone_number" onChange={(e)=>setPhone_number(e.target.value)} />
        <input type="text" placeholder="department" onChange={(e)=>setDepartment(e.target.value)} />
        <button onClick={onsubmit}>signup</button>
    </div>
)
}