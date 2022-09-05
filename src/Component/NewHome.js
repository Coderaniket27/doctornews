import React from 'react'
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const NewHome = () => {
  return (
    <div>
        <div>
            <div className='imgSlider '>
                <div className='font-mono ... text-6xl font-black	'>Save-Life</div>
            </div>
            
            <div className='card-flex'>

            
            <Card className="card">
      <CardActionArea>
        <CardMedia className='card-media'
          component="img"
          height="50"
          image="doctor.jpg"
          alt="doctor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Doctor
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
        </div>
       
    </div>
    
  )
}

export default NewHome