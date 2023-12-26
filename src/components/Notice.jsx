import React,{useState,useEffect} from "react"

export const Notice=()=>{
    const [notice,setNotice]=useState([])

    useEffect(()=>{
        getNotice()
    },[])

    const getNotice=()=>{
        const token=localStorage.getItem("notice")
        fetch(`${process.env.URL}/read`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
            setNotice(res.notice)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <div>
            <h1>notice</h1>
            {notice && notice.map((item)=>{
                return <h3 key={notice._id}>{notice.title}</h3>
            })}
        </div>
    )
}