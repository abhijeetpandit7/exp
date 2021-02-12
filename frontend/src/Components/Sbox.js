import React from 'react'

export  default function Sbox({Icon,I2,value,chg,name,type,suggest,...otherprops}){
	return(<div style={{display:"flex",flexDirection:"column"}}>
		<div style={{width:"14vw",height:"40px",borderRadius:"10px",display:"flex",flexDirection:"row",justifyContent:"space-around",backgroundColor:"#f5f5f5",alignItems:"center"}}>
			<Icon fontSize="20px" color="#0080ff"/>
			<input {...otherprops} onChange={chg(name)} type={type} value={value} style={{outline:"none",background:"transparent",border:"none",width:"100px"}}/>
			<I2 fontSize="13px" color="#d1d1d1"/>
		</div>
			{name==="destination"&&suggest?<div style={{width:"14vw",height:"40px",borderRadius:"10px",display:"flex",flexDirection:"row",justifyContent:"space-around",backgroundColor:"#f5f5f5",alignItems:"center"}}>
			</div>:null}
		</div>
	)
}