import React, { useState,useEffect } from 'react';
//import './search.css';
import Sbox from './Sbox';
import {MdLocationOn} from 'react-icons/md';
import {BiCalendar} from 'react-icons/bi';
import {AiFillCaretDown} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';
import Result from './Result'
import axios from 'axios'
import SelectCust from './SelectCust'
import md5 from 'md5'


export default function FlightSearch() {
  let nextDate = new Date();
   nextDate.setDate(nextDate.getDate() + 7);
  const [ip,setip]=useState('')
  const [details, setDetails] = useState({
        travelingDate : `${new Date().toISOString().substr(0,10)}`,
        returnDate : `${nextDate.toISOString().substr(0,10)}`,
        trip : 'One way',
        passengers : '1 Passenger',
        cabin : 'Economy'
    });
  const [states,setstate]=useState("")
   const [places, setPlaces] = useState({
        source : '',
        destination : ''
    });

   const [type,settype]=useState(["one way","Round trip"])
   const [passenger,setpass]=useState(["1 passenger","2 passengers"])
   const [cab,setcab]=useState(["Economy","Premium","Business","First Class"])
   const [typetext,setttext]=useState("type")
   const [passengertext,setptext]=useState("options")
   const [cabtext,setctext]=useState("cabins")



   const [searchResult, setSearchResult] = useState([]);

    const [redirect, setRedirect] = useState(false);

    const {travelingDate, returnDate, passengers, trip, cabin} = details;
    const {source, destination} = places;
     useEffect(()=> {
        fetch('https://www.travelpayouts.com/whereami?locale=en')
        .then(response => response.json())
        .then(data =>setPlaces({
            ...places, 
            source : `${data.name} - ${data.iata}`
        }))
    },[]);

     const handlePlaceChange = name => event => {
        setPlaces({
            ...places,
            [name] : event.target.value
        });
    }
     const handleChange = name => event => {
        setDetails({
            ...details,
            [name] : event.target.value
        });
        
    }
    useEffect(()=>{
      axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=4ca22792535b4662ba26bf987ba9993d').then((res)=>{
        setip(res.data.ip)
        console.log(res.data)
      })
    })
    const handleSubmit = (event) => {
      let sig= `4edf5df6f22bbc1e4486ac967f1ff84e:beta.aviasales.ru:en:282502:1:0:0:2020-12-24:MOW:BAX:2020-12-25:BAX:MOW:Y`
      sig=md5(sig)
      let ps=places.source.toUpperCase()
      ps=ps[0]+ps[1]+ps[2]
      let pd=places.destination.toUpperCase()
      pd=pd[0]+pd[1]+pd[2]
      console.log(pd)

      console.log(details )
      
        event.preventDefault();
        if(!destination || destination.length < 2){
            return alert('Please Select a valid destination');
        }

        //console.log('Event triggered');
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
       // axios.get(proxyurl+'http://api.travelpayouts.com/data/en/airports.json?token=aab719c2a3af14867bb33e77183f05e7').then((res)=>setstate(res.data))
        // const url = trip === 'Round trip' ? `https://api.travelpayouts.com/v1/prices/cheap?origin=${source.slice(source.length-3)}&
        //             destination=${destination.slice(destination.length-3)}&depart_date=${travelingDate}&return_date=${returnDate}&currency=EUR` 
        //             : `https://api.travelpayouts.com/v1/prices/cheap?origin=${source.slice(source.length-3)}&
        //             destination=${destination.slice(destination.length-3)}&depart_date=${travelingDate}&currency=EUR`;
        const url = trip === 'Round trip' ? `https://api.travelpayouts.com/v1/prices/cheap?origin=${ps}&
                    destination=${pd}&depart_date=${travelingDate}&return_date=${returnDate}&currency=EUR` 
                    : `https://api.travelpayouts.com/v1/prices/cheap?origin=${ps}&
                    destination=${pd}&depart_date=${travelingDate}&currency=INR`;

         axios.post(proxyurl+'http://api.travelpayouts.com/v1/flight_search',{
          header:{
             'Content-Type': 'application/json',
          

          }
        },{"signature":sig,"marker":"282502","host":"beta.aviasales.ru","locale":"en","trip_class":"Y","passengers":{"adults":1,"children":0,"infants":0},"segments":[{"origin":"BAX","destination":"MOW","date":"2020-12-24"},{"origin":"MOW","destination":"BAX","date":"2020-12-25"}]})
        .then((res)=>{
         console.log(res)
         console.log("fs")
        }).then((data)=>{
          console.log(data)
        }).catch(err=>console.log(err))

        return fetch(proxyurl+url,{
            headers:{
                "x-access-token":"aab719c2a3af14867bb33e77183f05e7"
            }
        })
        .then(response =>{
            return response.json()
        })
        .then(data => {
            setSearchResult([data.data.pd]);
            //console.log(data.data);
            console.log(data.data)
            if(data.data)
                setRedirect(true);
        })
        .catch(err => console.log(err));
       
        

    }
    function red(){
      setRedirect(false)
    }
    
    return (
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"100%",height:"250px",backgroundColor:"#0080ff",color:"white",display:"flex",justifyContent:"center"}}>
	            <div style={{width:"350px",marginTop:"30px"}}>
	                <span style={{fontSize:"25px"}}>Fly responsibly with </span>
	                <span style={{fontSize:"50px"}}>opentabs</span> 
	            </div>
        	</div>

        	<div style={{width:"60%",margin:"auto",borderRadius:"15px",boxShadow:"0 4px 7px rgba(0,0,0,0.25)",display:"flex",padding:"25px",paddingTop:"10px",paddingBottom:"40px",flexDirection:"column",top:"150px",position:"absolute",backgroundColor:"white"}}>
                <div style={{width:"420px",display:"flex",justifyContent:"space-around",alignItems:"flex-start"}}>
                
                  <SelectCust  options={type} width="100px" text={typetext} set={setttext}  />
                 <SelectCust options={cab} width="90px" text={cabtext} set={setctext} />
                  {/*<select style={{width:"min-content"}}>
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business</option>
                        <option>First Class</option>
                  </select>*/}

                  <SelectCust options={passenger} width="115px" text={passengertext} set={setptext} />
                 
               
            </div>
        	<div style={{marginTop:"50px",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <Sbox  chg={handlePlaceChange} type="text" name="source" value={places.source} Icon={MdLocationOn} I2={AiFillCaretDown}/>
            <Sbox chg={handlePlaceChange} type="text" name="destination" value={places.destination} Icon={MdLocationOn} I2={AiFillCaretDown}/>
            <Sbox chg={handleChange} type="date" name="travelingDate" value={details.travelingDate} Icon={BiCalendar} I2={AiFillCaretDown}/>
            <Sbox chg={handleChange} type="date" name="returnDate" value={details.returnDate} Icon={BiCalendar} I2={AiFillCaretDown}/>
          </div>

          {!redirect?<div id="sbutt" onClick={handleSubmit} style={{cursor:"pointer",height:"35px",width:"120px",paddingRight:"20px",borderRadius:"20px",color:"white",backgroundColor:"#0080ff",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",margin:"auto",marginTop:"40px"}}>
            <FiSearch fontSize="20px"/>
           <div> Search</div>
          </div>:null}

        </div>

          {!redirect?<div style={{margin:"auto",marginTop:"180px",fontSize:"33px",fontWeight:"700",color:"black"}}>Our Progress</div>:null}

        {!redirect?<div style={{margin:"auto",marginTop:"30px",display:"flex",flexDirection:"row"}}>
          <div style={{padding:"10px",margin:"2px",width:"20px",fontSize:"33px",backgroundColor:"#f5f5f5",color:"black",fontWeight:"700"}}>1
          </div>
          <div style={{padding:"10px",margin:"2px",width:"20px",fontSize:"33px",backgroundColor:"#f5f5f5",color:"black",fontWeight:"700"}}>0
          </div>
          <div style={{padding:"10px",margin:"2px",width:"20px",fontSize:"33px",backgroundColor:"#f5f5f5",color:"black",fontWeight:"700"}}>0
          </div>
          <div style={{padding:"10px",margin:"2px",width:"20px",fontSize:"33px",backgroundColor:"#f5f5f5",color:"black",fontWeight:"700"}}>0
          </div>
          <div style={{padding:"10px",margin:"2px",width:"20px",fontSize:"33px",backgroundColor:"#f5f5f5",color:"black",fontWeight:"700"}}>0
          </div>
        </div>:null}
        {redirect?<Result set={searchResult} red={red}/>:null}
      </div>

    )
}

