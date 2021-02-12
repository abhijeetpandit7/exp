import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {Button} from './Showr'


export default function Pop({set}) {
    return (
        <div style={{top:"0",right:'0',bottom:'0',left:'0',position:"fixed",backgroundColor:'rgba(255,255,255,0.8)',display:'flex',justifyContent:"center",alignItems:'center'}}>
            <div style={{zIndex:"1",top:"0",right:'0',bottom:'0',left:'0',position:"absolute"}} onClick={()=>set(false)}></div>
            <div style={{zIndex:"2",width:"70%",padding:"20px",display:'flex',flexDirection:"row",backgroundColor:"white",borderRadius:"15px",boxShadow:"0px 5px 15px rgba(0,0,0,0.35)"}}>
                <div>
                    <BsArrowRight fontSize="28px" style={{marginTop:"2px",marginRight:"10px"}}/>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h2 style={{marginTop:"0"}}>Donate to offset CO2 produced by  your flight</h2>
                    <div style={{fontSize:"13px",fontWeight:"500"}}>OpenTabs is a non-profit with a mission to reduce poverty and fight climate change in innovative ways.</div>
                    <div style={{fontSize:"13px",fontWeight:"500"}}>We want to be the most affordable and convenient way of having an impact.</div>
                    <h2 style={{color:"#0080ff",display:"flex",flexDirection:"row",marginTop:"40px",marginBottom:"10px"}}>
                        <div style={{paddingLeft:"10px",width:"150px",border:"solid #0080ff 1px",marginRight:"10px",borderRadius:"8px"}}>$ 900</div>
                        Will offset 
                        <div style={{paddingLeft:"10px",width:"100px",border:"solid #0080ff 1px",marginRight:"10px",borderRadius:"8px",marginLeft:"10px"}}>$ 3600</div>
                        in the atmosphere.
                    </h2>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{padding:"5px",fontSize:"9px",borderRadius:"5px",backgroundColor:"#f3f3f3",marginRight:"5px"}}>$10</div>
                        <div style={{padding:"5px",fontSize:"9px",borderRadius:"5px",backgroundColor:"#f3f3f3",marginRight:"5px"}}>$100</div>
                        <div style={{padding:"5px",fontSize:"9px",borderRadius:"5px",backgroundColor:"#f3f3f3",marginRight:"5px"}}>$1000</div>
                    </div>
                    <div style={{display:'flex',flexDirection:"row",marginTop:"45px"}}>
                        <Button Color="#0080ff" text="Pledge" Icon={BsArrowRight} marginLeft="0px" textColor="white"  />
                        <Button Color="#cbcbcb" text="Skip"  />
                    </div>
                </div>
            </div>
       </div>
    )
}
