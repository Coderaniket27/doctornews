import React from 'react'
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Home = () => {
  return (
    <div className='h-screen'>
        <div className='Main-m w-full h-fit '>
          <div className='w-full h-fit	bg	'>
            <div className='font-bold text-2xl text-sky-800 ml-9	text-6xl mt-8'>Save-Lifes</div>
            <div className='ml-9 text-2xl text-sky-700  font-mono mt-6 '>
              Experience a hassle-free services:</div>
            <div className='ml-20 mt-7 relative '>
              <ul className='text-xl pb-12 leading-loose list-disc '>

                <li>
                  Emergency Ambulance 24 * 7
                </li>
                <li>
                  Emergency Hospitalization
                </li>
                <li>
                  We Advice You To Choose Right Health Policy  
                </li>
                <li>
                  We Help You To Do Health Claims
                </li>
                <li>
                  We Will Help You To Find Best Doctor & Hospitals
                </li>
                <li>
                  We Will Provide Best Hospital At Affordable Price
                </li>
                <li>
                  Free Online Doctor
                </li>
                <li>
                  50% Discount On The Consultation  Fee
                </li>
                <li>
                  Free Follow-up  Up To 15 Days
                </li>
                <li>
                20% Discount On The Medicine 
                </li>
                <li>
                  Free Pick-up & Drop
                </li>
                <li>
                  We Will Arrange Blood
                </li>
                <li>
                  And Many More Benefits
                </li>
                
              </ul>
            </div>
<div className='absolute'>
  <div>
<Card className="card">
      <CardActionArea>
        <CardMedia style={{
              height: "160px",
        }}
          component="img"
          height="50"
          image="doctor.jpg"
          alt="doctor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Doctor
          </Typography>
          <Typography variant="body2" color="text.secondary">
          You don't need to search for the best doctor for your ailment Save-Lifes team does research that serves best to our clients.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </div>
    <div><Card className="card">
      <CardActionArea>
        <CardMedia style={{
              height: "160px",
              
        }}
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
    </Card> </div>
    <div><Card className="card">
      <CardActionArea>
        <CardMedia style={{
              height: "160px",
              
        }}
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
    </Card> </div>
    
</div>
<div className='absolutes'>
  <div>
<Card className="card">
      <CardActionArea>
        <CardMedia style={{
              height: "160px",
        }}
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
    </Card>
    
    </div>
    <div><Card className="card">
      <CardActionArea>
        <CardMedia style={{
              height: "160px",
              
        }}
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
    </Card> </div>
    <div><Card className="card">
      <CardActionArea>
        <CardMedia style={{
              height: "160px",
              
        }}
          component="img"
          height="50"
          image="PAT.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Patient
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Don't need to worry about paperwork and unwanted hospital bills. We  will take care about all things "Dont Worry".
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> </div>
    
</div>
<div >
  <div className='borders' >
<div className='decoration-green-50 font-serif text-xl text-rose-800	 footer'>For-Enquiry</div>
<div> <Stack spacing={2} alignItems="center" style={{paddingBottom:"15px"}}>
      <Stack direction="row" spacing={1}>
        <Chip label="+91-7277706637" color="primary" />
        

        <Chip label="prakashaniket3@gmail.com" color="success" />
      </Stack></Stack></div>
</div>
</div>

          </div>
          
        </div>
    </div>
  )
}

export default Home