import React, { Component } from 'react';
import classes from '../DetailsPage/detailsPage.module.css'
import Button from 'react-bootstrap/Button';
import 'animate.css';

class Teller extends Component {
 
  render() { 
    return ( 
      <>

<div className='container-fluid'>
<div className='row '>    
        <div className={classes.buttons}>
            <div className='col-lg-3 col-md-4 animate__animated animate__fadeInTopLeft'>
              <Button   variant="primary ">Vault</Button>
              </div>
              <div className='col-lg-3 col-md-4 animate__animated animate__fadeInTopRight '>
                  <Button variant="primary">Cash</Button>
              </div>

        </div>
        <div className='row'>
          <div className={classes.buttons}>
            <div className='col-lg-3 col-md-10 animate__animated animate__zoomIn'>
              <a href='/inquires'> <Button   variant="primary ">Inquires</Button></a>
            </div>
            <div className='col-lg-3 col-md-10 animate__animated animate__zoomIn'>
              <a href='/paymentOrder'> <Button   variant="primary ">Payment Order</Button></a>
            </div>
          </div>
        </div>

    </div>
    <div className='row '>    
        <div className={classes.buttons}>
            <div className='col-lg-3 col-md-4  animate__animated animate__fadeInBottomLeft '>
            <a href='/inquires'> <Button   variant="primary">Non Cash</Button></a>
            </div>
            <div className='col-lg-3 col-md-4 animate__animated animate__fadeInBottomRight '>
            <a href='/demandDraft'>  <Button variant="primary">Demand Draft</Button></a>
            </div>
            
        </div>
    </div>
    </div>

    
      </>
    );
  }
}
 
export default Teller;