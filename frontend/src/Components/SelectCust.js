import React,{useState} from 'react'
import {FaChevronDown} from 'react-icons/fa'

export default function SelectCust({text,width,options,set}) {
    const [Show,setshow]=useState(false)
    return (
        <div style={{display:'flex',flexDirection:"column",width:width,position:"relative"}}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",padding:"2px"}}>
                <div>{text}</div>
                <div onClick={()=>setshow(!Show)}><FaChevronDown/></div>
            </div>
            <div style={{top:"30px",position:'absolute'}}>
                {Show?options.map((txt)=>{
                    return(
                    <div onClick={()=>{
                        setshow(false)
                        set(txt)
                    }} style={{padding:"2px",backgroundColor:"#f1f1f1",cursor:"pointer"}}>
                        {txt}
                    </div>)  
                }):null}
            </div>
        </div>
    )
}
