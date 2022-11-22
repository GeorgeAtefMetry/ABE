import React from 'react';
import classes from './detailsPage.module.css'
import logo from '../images/logo.png'
import infoSys from '../images/infosys.png'
import Button from 'react-bootstrap/Button';
import 'animate.css';

const DetailsPage = () => {

    return (
        <div className='container-fluid'>

            <div className={classes.images}>
                <div className={classes.logo}>
                    <img src={logo}/>
                </div>
                <div className={classes.infoSys}>
                    <img src={infoSys}/>
                </div>
            </div>


{/* ldmld */}
            <div className='row'>

                
        {/* ___ht______________________________________________________________ */}
                <div className={classes.buttons}>
                    <div className='col-lg-3 col-md-4 animate__animated animate__bounceInLeft '>
                    <a href='/Teller'> <Button variant="primary">Teller</Button></a>
                    </div>
                    <div className='col-lg-3 col-md-4 animate__animated animate__bounceInDown'>
                        <Button variant="primary">CRM</Button>
                    </div>
                    <div className='col-lg-3 col-md-4 animate__animated animate__bounceInRight'>
                        <Button variant="primary">Operations</Button>
                    </div>
                </div>

            </div> {/* END OF ROW */}
        {/* _________________________________________________________________ */}
        </div>
    );
}

export default DetailsPage;
