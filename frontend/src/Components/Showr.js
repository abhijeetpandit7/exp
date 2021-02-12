import React,{useState} from 'react'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'
import {FaClock,FaWalking,FaPlaneDeparture} from 'react-icons/fa'
import MoreDetailes from './MoreDetailes'
import Pop from './Pop'

export const Button = ({text,func,Icon,Color,textColor,...other}) =>{
    return(<div onClick={()=>{
            try{
                func()
            }
            catch(err){
                console.log(err)
            }
            
    }} style={{width:"150px",height:"35px",fontSize:"13px",fontWeight:"600",backgroundColor:Color,display:'flex',justifyContent:'center',alignItems:"center",color:textColor,borderRadius:"7px",marginLeft:"10px",cursor:"pointer",...other}}>
            {text} {Icon?<Icon style={{marginLeft:"5px"}}/>:null}
    </div>
        )
}

export default function Showr() {
    const [chev,setchev]=useState(true)
    const [pop,setpop] = useState(false)
    const Rw = ({Icon,text,margin})=>{
        return(
            <div style={{display:'flex',flexDirection:"row",alignItems:"center",marginRight:margin||"15px"}}>
                <Icon fontSize="14px" color="#0080ff"/>
                <div style={{color:"#cbcbcb",fontSize:"14px",marginLeft:"10px"}}>{text}</div>
            </div>
        )
    }
    const Circle = ({Color})=>{
        return(
            <div style={{width:"10px",height:"10px",backgroundColor:Color,borderRadius:"100px",marginRight:"3px"}}></div>
        )
    }

    return (
        <div style={{width:"100%",padding:"5px",display:'flex',flexDirection:"row",justifyContent:"space-between",borderRadius:"8px",boxShadow:"0px 5px 5px rgba(0,0,0,0.15)",position:"relative"}}>
            
            <div style={{display:"flex",flexDirection:"row"}}>
                <img src="https://media.istockphoto.com/vectors/airplane-fly-out-logo-plane-taking-off-stylized-sign-vector-id1137971264?k=6&m=1137971264&s=612x612&w=0&h=WHVzsQB_ZANUmImSLANq4LdYEQ_pvxuqa54WNvCHqZ4=" style={{width:"65px",height:"65px"}}/>
                <div style={{display:'flex',flexDirection:'column',marginLeft:"10px",justifyContent:'space-around'}}>
                        <h4 style={{marginTop:"0px",marginBottom:"0"}}>07:30 - 08:55</h4>
                        <div style={{color:"#cbcbcb",marginTop:chev?"0":"5px"}}>lberia</div>
                        {chev?null:<React.Fragment><div style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>   
                            <Rw Icon={FaClock} text="1 hr 24 min"/>
                            <Rw Icon={FaWalking} text="Direct"/>
                            <Rw Icon={FaPlaneDeparture} text="DDN-DEL" margin="26px"/>
                        </div>
                        <div style={{backgroundColor:"#ebebeb",width:"100%",height:"1px",marginTop:"22px"}}></div>
                        <MoreDetailes/></React.Fragment>}
                </div>  
            </div>
            {chev?<div style={{width:"230px",display:'flex',flexWrap:"wrap"}}>
               
                    <Rw Icon={FaClock} text="1 hr 24 min"/>
                    <Rw Icon={FaWalking} text="Direct"/>
                    <Rw Icon={FaPlaneDeparture} text="DDN-DEL" margin="26px"/>
                    <div style={{display:'flex',flexDirection:"row",alignItems:"center",marginRight:"15px"}}>
                        <div style={{fontSize:"14px",color:"#0080ff"}}>CO2</div>
                        <div style={{color:"#cbcbcb",fontSize:"14px",marginLeft:"10px",display:"flex",flexDirection:"row"}}>
                           <Circle Color="lightgreen"/>
                           <Circle Color="lightgreen"/>
                           <Circle Color="lightgreen"/>
                           <Circle Color="lightgreen"/>
                           <Circle Color="#cbcbcb"/>
                        </div>
                    </div>
             
            </div>:null}
            <div style={{display:'flex',flexDirection:"row",height:"60px"}}>
                <div style={{display:'flex',flexDirection:'column',marginLeft:"10px",justifyContent:'space-around',alignItems:"flex-end"}}>
                    <div style={{fontSize:"23px",fontWeight:"700",color:"lightgreen"}}>$35</div>
                    <div style={{color:"#cbcbcb"}}>Round Trip</div>
                </div>
                <div style={{padding:"8px"}}>
                    {chev?<AiOutlineDown onClick={()=>{setchev(!chev)}} style={{fontWeight:"100",fontSize:"19px"}}/>:<AiOutlineUp onClick={()=>{setchev(!chev)}} style={{fontWeight:"100",fontSize:"19px"}}/>}
                </div>
            </div>
            {chev?null:<div style={{right:"10px",bottom:"15px",position:"absolute",display:'flex',flexDirection:"row"}}>
                <Button Color="#cbcbcb" text="Pay $30" />
                <Button Color="#0080ff" text="Pay $30 & Pledge" textColor="white" func={()=>setpop(true)} />
            </div>}
            {pop?<Pop set={setpop}  />:null}
        </div>
    )
}
