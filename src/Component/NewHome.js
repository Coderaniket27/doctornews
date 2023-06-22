import React from 'react'
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState,useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios'
import ReactWhatsapp from 'react-whatsapp';




const NewHome = () => {
  const[email,setemail] =useState("")
  const[name,setname]= useState("");
  const[phone,setphone] =useState("")
  const[address,setaddress]= useState("");
  const[query,setquery] =useState("")
  
const[button,setbutton]=useState(true)
const[data,setdatas]=useState([])
  



// This arrangement can be altered based on how we want the date's format to appear.
const current = new Date();
  const dates = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

console.log()
    useEffect (() =>{
      fetch(`http://localhost:3001/finddata/${dates}`)
      .then( res => res.json())
      .then(res =>{
        setdatas(res.data)
      })
    },[dates])
   
   async function  handle(e){
    e.preventDefault()
    try{
    let response= await axios.post("https://api-nirog.vercel.app/register",{email,name,query,phone,address })

console.log(response,"ko")
 if(response?.data?.abch?.status===200){
  alert("submitted")
 }
 else{
  alert(response.data.message)
 }
} catch (err){
  console.log(err)
} 
// if(datas.status===200){

//   alert("We will contact you soon");
//   setbutton(!button)

// }
// else{
  
//   alert(datas.message)
//   console.log("lolo")
// }



  }
  return (
    <div >
        <div>
            <div className='imgSlider'>
            
<div >
  <div className="logo">                <img   src="saves1.png" alt="logo" style={{height:"250px",width:"180px"}}/>
</div>
<div className='whats'>
      <ReactWhatsapp number="91 6202872272" message="Hello World!!!" style={{color:"red"}} >      <img src="whatsApp.jpg.webp" width="50px" height="50px" alt="whatsapp"/>
</ReactWhatsapp>

    </div>
                
                </div>
            </div>
            
            <div className='card-flex'>

            
            <Card className="card">
      <CardActionArea>
        <CardMedia className='card-media'
          component="img"
          height="50"
          image="d2.jpg"
          alt="doctor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Doctorss
          </Typography>
          <Typography className='font' variant="body2" color="text.secondary"npm>
          You don't need to search for the best doctor for your ailment Save-Lifes team does research that serves best to our clients.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className="card">
      <CardActionArea>
        <CardMedia className='card-media'
          component="img"
          height="50"
          image="hospital.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hospital 

          </Typography>
          <Typography variant="body2" color="text.secondary">
          You don't have to worry about the best Hospital at an affordable price. We suggest you the best at an affordable price.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className="card">
      <CardActionArea>
        <CardMedia className='card-media'
          component="img"
          height="50"
          image="ambulance.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ambulance
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Need Ambulance, Air Ambulance at any time just contact us. We will arrange an ambulance 24*7 at very low price.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className="card">
      <CardActionArea>
        <CardMedia className='card-media'
          component="img"
          height="50"
          image="blood.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Blood
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A single drop of blood can make a huge difference. We will help you to find blood in an emergency situation 24 * 7.
          </Typography>
        </CardContent>
      </CardActionArea> 
    </Card><Card className="card">
      <CardActionArea>
        <CardMedia className='card-media'
          component="img"
          height="50"
          image="insurance.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Insurance
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Worried about the right health policy and paperwork for cashless & reimbursement . Don't worry we will do your all paperwork.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
   
    <div className='partMain'>
      <div className='partPart'>
        <div className='works'>
        Here is how it works
        </div>
          
          <div className='cardFlexs'>
        <div className='innerCard'>
          <div>
            <img className="imageBorder"src="connect.jpg" alt="blood"/>
          </div>
          <div className='miniFlex'>
<div className='step'>
  Step 1
</div>
<div className='stepHead'>
Connect with Care Expert

</div>
</div>
        </div>
        <div className='innerCard'>
          <div>
            <img className="imageBorder"src="doc.jpg" alt="blood"/>
          </div>
          <div className='miniFlex'>
<div className='step'>
  Step 2
</div>
<div className='stepHead'>
Hospital & Doctor Recommendations

</div>
        </div></div>
        <div className='innerCard'>
          <div className='i'>
            <img className="imageBorder"src="surgery.jpg" alt="blood"/>
          </div>
          <div className='miniFlex'>
<div className='step'>
  Step 3
</div>
<div className='stepHead'>
Connect with Best Doctors

</div>
</div>
        </div>
        <div className='innerCard'>
          <div>
            <img className="imageBorder"src="surgery-closure.jpg" alt="blood"/>
          </div>
          <div className='miniFlex'>
<div className='step'>
  Step 4
</div>
<div className='stepHead'>
Inpatient Support with Care Expert

</div>
        </div>
        </div>
        </div>
      </div>

    </div>
    <div className='LastOne'>
      <div className='LastFlex'>
<div className='know'>
Know us better
</div>
<div className='LastP'>
<div className='LastPara'>
<strong>Save-Lifes </strong> strives to serve its patients for <strong>daycare </strong>
surgeries, using the latest technology. We ensure a smooth
experience before, during, and after treatment. Our team of highly
experienced <strong>doctors </strong> assure that you receive premium care at our
partner hospitals. From providing a detailed diagnosis, scheduling
your surgery, commuting to and from the hospital, completing your
insurance paperwork and hospital discharge to follow-up
consultations, <strong>Save-Lifes </strong>takes care of it all
</div><div className='LastImage'>
  <img className='LastImg' src="who.jpg" alt="about"/>
  
</div>
</div>
      </div>
     
    </div>
    <div>
       
      
    {button? 
          " " : 
        <div className='enquiry'>
    <div className='deko'> <div className='flexy'>
    <div className='new'>
    <div className="min-h-full  flex items-center justify-center MainPad		  sm:px-6 lg:px-8">
<div className="max-w-md w-full 
 space-y-8">
  <div >
    {/* <img className="mx-auto h-12 w-auto mt-5" src="download.jfif" alt="Workflow"/> */}
    <h2 className="mt-1 text-center text-3xl  font-extrabold text-gray-900">Enquiry Form</h2>
   
  </div>
  <form className="mt-12 space-y-6">
    <input type="hidden" name="remember" />
    <div className="rounded-md shadow-sm -space-y-px">
      <div className="pb-3 ...">
        <input id="name"name="name" pattern="[a-z]*"type="text"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" onChange={ (e) => {setname(e.target.value)}} placeholder="Full Name"/>
      </div>
      
         <div className="pb-3 ...">
        <input id="email-address" name="email" type="email"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"onChange={ (e) => {setemail(e.target.value)}} placeholder="Email address"/>
      </div>
      
      <div className="pb-3 ...">
        <input id="Contact" name="Contact" type="text" a required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"onChange={ (e) => {setphone(e.target.value)}} placeholder="Contact"/>
      </div>
      
      <div className="pb-3 ...">
        <input id="address" name="address" type="address"  required className="appearance-none  break-all	 rounded-none h-16	 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"onChange={ (e) => {setaddress(e.target.value)}} placeholder=" Address"/>
      </div>
      
      <div className="pb-3 ...">
        <input id="query" name="query" type="query" required className="appearance-none rounded-none relative block h-20 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"onChange={ (e) => {setquery(e.target.value)}} placeholder="Write about your Problem"/>
      </div>
    </div>

    

    <div className='butt'>
     
      <button onClick={handle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold Login-button rounded-full">
  Register
</button>
    </div>
  </form>
</div>

</div>
</div>
  </div>
    </div>
    </div>}
    </div>
    <div className='foot'>
    <div>
  <Stack direction="row" className='innerbuut' spacing={5}>
      
      {/* <Button variant="contained" onClick={(e) =>{setbutton(!button)}} style={{backgroundColor:"red",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"40px",paddingRight:"40px"}}
      color="success">
        Enquiry lo
      </Button> */}
      <iframe src='https://www.nirogsansar.com/'  title="frame"width ="100%" height="500px"></iframe>

    </Stack>
  </div>
  <div className='contact'>
    <div className='footbor'>
      +91 7277706637 {data.map((e) =>{
        return (<ul>
          <li>{e.name}</li>
          <li>{e.email}</li>
          <li>
            {e.phone}
          </li>
        </ul>)
      })}
    </div>
    <div className='footbor'>
      +91 7277706637
    </div>
    

  </div>
  </div>
  
        </div>
      {/* <HomePage/> */}
    </div>
    
  )
}

export default NewHome