import React,{useEffect} from 'react'
import Showr from './Showr'
import {BsArrowLeft} from 'react-icons/bs'


export default function Result({set,red}){
	useEffect(()=>{
		console.log(set)
	})
	return(
		<div style={{width:"62%",textAlign:"left",marginTop:"7%",marginBottom:"20px"}}>
			<h1 style={{display:"flex",alignItems:"center"}}><BsArrowLeft style={{marginRight:"8px",cursor:"pointer",}} onClick={()=>red()}/> Search Results</h1>
			 <Showr/> 
		</div>
	)
}