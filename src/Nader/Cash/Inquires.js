import React from 'react';
import classes from './Inquires.module.css'
// import './inquire.css'
import Vertical from '../../Vertical/Navbar'
import SubMenu from '../../Vertical/SubMenu';
import Horizontal from '../../Horizontal'
import { SidebarData } from '../../Vertical/SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import mov from './1.MOV'
import '../../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, PlayToggle } from 'video-react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
const Inquires = () => {
    const [open, setOpen] = useState(false);
    const close = e => {
        setOpen(current => !current)
    }
    return (
        <>
<div className='row'>
            <div className='col-2' style={{zIndex:1000,marginRight:10}}>
                {/* Toggle */}

                <nav style={{padding:6}} className={open? 'nav-menu active ' : 'nav-menu activeClose' }>
                    <ul className= {`nav-menu-items ${classes.ulList}`} >

                    <SubMenu item={'INQUIRES-استعلامات'}  style={{float:"left"}}/>
                    
                    <div class="toggle-setting">
                        <p 
                            onClick={close}
                            className={ "fa-gear "}><BiLogInCircle/></p>
                    </div>
                    
                {/* End Toggle */}
                    <SubMenu item={'Cash - العمليات النقدية'}  style={{float:"left"}}/>

                        <Link to='mcdtd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'MCDTD'}/>
                        </Link>

                        <Link to='mcwtd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'MCWTD'}/>
                        </Link>
                        
                        <Link to='pct'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'PCT '} />
                        </Link>
                        
                        <Link to='pvt'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'PVT '} />
                        </Link>

                        <Link to='cfccetd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'CFCCETD'} />
                        </Link>


                        

                    </ul>
                </nav>
            </div>

            <div className='col-12 col-lg-10' style={{color:'white',padding:0, margin:'auto'}}>
            <Horizontal ></Horizontal>
            
            <div className={classes.mainIal} id="mcdtd">
                    <div className={classes.ial} style={{padding:30}}>
                            <span>MCDTD</span>
                        <p>
                        قايمه بستعلم منها عن حساب الشيك ’العادي‘ حساب الساحب ( الساحب هو العميل صاحب الحساب) إللي هو من دفتر شيكات العميل بس هنا بستعلم بمعلومية رقم الشيك* ومتاح ليا اختار الفرع وبعد كدا ابحث
                        </p>
                        <div className={classes.video} 
                                onContextMenu={(e)=> e.preventDefault()}>
                            <Player
                                playsInline
                                src={mov}
                            >
                                <ControlBar autoHide={false} disableDefaultControls={true}>
                                    <PlayToggle />
                                </ControlBar>
                            </Player>
                        </div>
                    </div>
                </div>

                <div className={classes.mainIanc} id="mcwtd">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>MCWTD</span>
                        <p>
                        قايمه بستعلم منها عن حساب الشيك ’العادي‘ حساب الساحب ( الساحب هو العميل صاحب الحساب) إللي هو من دفتر شيكات العميل بس هنا بستعلم بمعلومية رقم الشيك* ومتاح ليا اختار الفرع وبعد كدا ابحث
                        </p>
                        <div className={classes.video} 
                                onContextMenu={(e)=> e.preventDefault()}>
                            <Player
                                playsInline
                                src={mov}
                            >
                                <ControlBar autoHide={false} disableDefaultControls={true}>
                                    <PlayToggle />
                                </ControlBar>
                            </Player>
                        </div>
                    </div>
                </div>
                <div className={classes.mainIanc} id="pct">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>PCT</span>
                        <p>
                        قايمه بستعلم منها عن حساب الشيك ’العادي‘ حساب الساحب ( الساحب هو العميل صاحب الحساب) إللي هو من دفتر شيكات العميل بس هنا بستعلم بمعلومية رقم الشيك* ومتاح ليا اختار الفرع وبعد كدا ابحث
                        </p>
                        <div className={classes.video} 
                                onContextMenu={(e)=> e.preventDefault()}>
                            <Player
                                playsInline
                                src={mov}
                            >
                                <ControlBar autoHide={false} disableDefaultControls={true}>
                                    <PlayToggle />
                                </ControlBar>
                            </Player>
                        </div>
                    </div>
                </div>

                <div className={classes.mainIanc} id="pvt">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>PVT</span>
                        <p>
                        قايمه بستعلم منها عن حساب الشيك ’العادي‘ حساب الساحب ( الساحب هو العميل صاحب الحساب) إللي هو من دفتر شيكات العميل بس هنا بستعلم بمعلومية رقم الشيك* ومتاح ليا اختار الفرع وبعد كدا ابحث
                        </p>
                        <div className={classes.video} 
                                onContextMenu={(e)=> e.preventDefault()}>
                            <Player
                                playsInline
                                src={mov}
                            >
                                <ControlBar autoHide={false} disableDefaultControls={true}>
                                    <PlayToggle />
                                </ControlBar>
                            </Player>
                        </div>
                    </div>
                </div>

                <div className={classes.mainIanc} id="cfccetd">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>CFCCETD</span>
                        <p>
                        قايمه بستعلم منها عن حساب الشيك ’العادي‘ حساب الساحب ( الساحب هو العميل صاحب الحساب) إللي هو من دفتر شيكات العميل بس هنا بستعلم بمعلومية رقم الشيك* ومتاح ليا اختار الفرع وبعد كدا ابحث
                        </p>
                        <div className={classes.video} 
                                onContextMenu={(e)=> e.preventDefault()}>
                            <Player
                                playsInline
                                src={mov}
                            >
                                <ControlBar autoHide={false} disableDefaultControls={true}>
                                    <PlayToggle />
                                </ControlBar>
                            </Player>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Inquires;
