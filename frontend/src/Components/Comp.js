import React from 'react'


export default function Comp({text1,text2}){
	return(
		<div>
			<div style={{width:"130%",marginTop:"8px",height:"7px",backgroundColor:"#f5f5f5",borderRadius:"8px",overflow:"hidden"}}><div style={{width:"70%",height:"100%",backgroundColor:"#0080ff",borderRadius:"8px",}}></div></div>
			<div style={{width:"130%",display:"flex",justifyContent:"space-between",fontSize:"13px",color:"grey"}}>
				<div>
					{text1}
				</div>
				<div>
					{text2}
				</div>
			</div>
		</div>
	)
}