import React from 'react';
import classes from './detailsPage.module.css'
import logo from '../images/logo.png'
import infoSys from '../images/infosys.png'
import Button from 'react-bootstrap/Button';
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

                
        {/* _________________________________________________________________ */}
                <div className={classes.buttons}>
                    <div className='col-lg-3 col-md-4 '>
                        <Button variant="primary">Teller</Button>
                    </div>
                    <div className='col-lg-3 col-md-4'>
                        <Button variant="primary">CRM</Button>
                    </div>
                    <div className='col-lg-3 col-md-4'>
                        <Button variant="primary">Operations</Button>
                    </div>
                </div>

            </div> {/* END OF ROW */}
        {/* _________________________________________________________________ */}
        </div>
    );
}

export default DetailsPage;
