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
              {/* ttt */}
            
        </div>
        <div className='row'>
          <div className={classes.buttons}>
          <div className='col-lg-3 col-md-4 animate__animated animate__zoomIn'>
          <a href='/inquires'> <Button variant="primary">Inquires</Button></a>
          </div>

          <div className='col-lg-3 col-md-4 animate__animated animate__zoomIn'>
          <a href='/paymentOrder'> <Button variant="primary ">Payment Order</Button></a>
          </div>

        </div>
    </div>
    <div className='row '>    
        <div className={classes.buttons}>
            <div className='col-lg-3 col-md-4  animate__animated animate__fadeInBottomLeft '>
            <a href='/nonCash'> <Button   variant="primary">Non Cash</Button></a>
            </div>
            <div className='col-lg-3 col-md-4 animate__animated animate__fadeInBottomRight '>
            <a href='/demandDraft'>  <Button variant="primary">Demand Draft</Button></a>
            </div>
            
        </div>
    </div>
    
</div>
    
    </div>

    
      </>
    );
  }
}
 
export default Teller;