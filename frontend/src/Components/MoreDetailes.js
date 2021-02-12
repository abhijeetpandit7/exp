import React from 'react'

const Bar = ({t1,t2,per})=>{
    return(<div style={{display:'flex',flexDirection:'column',marginTop:"15px"}}>
            <div style={{width:"100%",height:"6px",borderRadius:"150px",backgroundColor:"#ebebeb",overflow:"hidden"}}>
                <div style={{width:per,height:"100%",backgroundColor:"#0080ff",borderRadius:"100px"}}></div>
            </div>
            <div style={{width:"100%",display:'flex',flexDirection:"row",justifyContent:'space-between'}}>
            <div style={{color:"#cbcbcb",fontSize:"14px"}}>{t1}</div>
            <div style={{color:"#cbcbcb",fontSize:"14px"}}>{t2}</div>
            </div>
    </div>)
}

export default function MoreDetailes() {
    return (
        <div>
            <h3 style={{fontWeight:"600"}}>Compare your Emmisions</h3>
            <Bar t1="your flight" t2="3196 Kg" per="80%" />
            <Bar t1="A Car (Per Year)" t2="2000 Kg" per="50%" />
            <Bar t1="Annual Emmissions Budget" t2="2300 Kg" per="30%" />
            <div style={{height:"18px"}}></div>
        </div>
    )
}
