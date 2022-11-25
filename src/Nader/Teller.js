import React, { Component } from 'react';
import classes from '../DetailsPage/detailsPage.module.css'
import Button from 'react-bootstrap/Button';
import 'animate.css';
import Horizontal from'../Horizontal/index';
class Teller extends Component {
 
  render() { 
    return ( 
      <>

<div className='container-fluid'>
  <Horizontal/>
<div className='row '>    
        <div className={classes.buttons}>
            <div className='col-lg-3 col-md-4 animate__animated animate__fadeInTopLeft'>
             <a href="/Vault"><Button   variant="primary ">Vault</Button></a>
            </div>
            <div className='col-lg-3 col-md-4 animate__animated animate__fadeInTopRight '>
               <a href='/Cash'> <Button variant="primary">Cash</Button></a>
            </div>
           
        </div>
        <div className='row'>
          <div className={classes.buttons}>

          <div className='col-lg-3 col-md-4 animate__animated animate__zoomIn'>
          <Button   variant="primary ">Inquiers</Button></div>

          <div className='col-lg-3 col-md-4 animate__animated animate__zoomIn'>
          <Button   variant="primary ">Payment Order</Button></div>

          </div>
          
        </div>

    </div>
    <div className='row '>    
        <div className={classes.buttons}>
            <div className='col-lg-3 col-md-4  animate__animated animate__fadeInBottomLeft '>
             <Button   variant="primary">Non Cash</Button>
            </div>
            <div className='col-lg-3 col-md-4 animate__animated animate__fadeInBottomRight '>
                <Button variant="primary">Demand Draft</Button>
            </div>
            
            
           
        </div>
    </div>

           
    </div>

    
      </>
     );
  }
}
 
export default Teller;