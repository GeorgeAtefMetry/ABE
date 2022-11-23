import React from 'react';
import classes from './DD.module.css'
import SubMenu from '../Vertical/SubMenu';
import Horizontal from '../Horizontal'
import { SidebarData } from '../Vertical/SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import '../../node_modules/video-react/dist/video-react.css'
const DD = () => {
    return (
        <>
            <Horizontal></Horizontal>
        <div className='row'>
            <div className='col-2' style={{padding:0, zIndex:1000}}>
                <nav className={SidebarData? 'nav-menu active' : 'nav-menu'}>
                    <ul className={`nav-menu-items ${classes.ulList}`} >
                        <SubMenu item={'Demand Draft'} />

                        <Link to='issue'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'ISSUE'}/>
                        </Link>

                        <Link to='disbursement'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'DISBURSEMENT'}/>
                        </Link>
                        
                        <Link to='stop'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'STOP '} />
                        </Link>
                        
                        <Link to='lost'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'LOST '} />
                        </Link>

                        <Link to='reprint'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'REPRINT '} />
                        </Link>

                        <Link to='cancel'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'CANCEL '} />
                        </Link>

                    </ul>
                </nav>
            </div>
            <div className='col-9' style={{color:'white',padding:0, margin:'auto'}}>

                <div className={classes.issue} id="issue">
                   -IEDD <br></br>
                   (Issue Demand Draft) <br></br>
                </div>

                <div className={classes.disbursement} id="disbursement">
                    -MCITTD <br></br>
                    (Maintain Customer Induced Transfer Transaction Details) <br></br>
                </div>

                <div className={classes.stop} id="stop">
                    1- SDDP (MAKER) <br></br>
                    (Stop Demand Draft Payment) <br></br>
                    2- VDDSP (CHECKER) <br></br>
                    (Verify Demand Draft Stop Payment) <br></br>
                    *As an option <br></br>
                    1- RDDSP (MAKER) <br></br>
                    (Revoke Demand Draft Stop Payment) <br></br>
                    2- VRDDSP (CHECKER) <br></br>
                    (Verify Revoke Demand Draft Stop Payment) <br></br>
                </div>

                <div className={classes.lost} id="lost">
                    -MDDL <br></br>
                    (Mark Demand Draft As lost) <br></br>
                </div>

                <div className={classes.print} id="reprint">
                    1- IDDD <br></br>
                    (Issue Duplicate Demand Draft) <br></br>
                    2- RDDF <br></br>
                    (Reprint Demand Draft) <br></br>
                </div>

                <div className={classes.cancel} id="cancel">
                   -CDDT <br></br>
                   (Cancel Demand Draft) <br></br>
                </div>
            </div>
        </div>
        </>
    );
}

export default DD;
