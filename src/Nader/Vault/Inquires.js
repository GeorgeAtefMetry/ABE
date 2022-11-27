import React from 'react';
import classes from './Inquires.module.css'
// import './inquire.css'
import Vertical from '../../Vertical/Navbar'
import SubMenu from '../../Vertical/SubMenu';
import Horizontal from '../../Horizontal'
import { SidebarData } from '../../Vertical/SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import { useState } from 'react';
import mov from './1.MOV'
import '../../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, PlayToggle } from 'video-react';
import { BiLogInCircle } from "react-icons/bi";
const Inquires = () => {
    const [open, setOpen] = useState(false);
    const close = e => {
        setOpen(current => !current)
    }
    return (
        <>

        
        
        
<div className='row'>
            <div className='col-2' style={{zIndex:1000}}>
                {/* Toggle */}

                <nav style={{padding:1}} className={open? 'nav-menu active ' : 'nav-menu activeClose' }>
                    <ul className= {`nav-menu-items ${classes.ulList}`} >

                    <SubMenu item={'INQUIRES-استعلامات'}  style={{float:"left"}}/>
                    
                    <div class="toggle-setting">
                        <p 
                            onClick={close}
                            className={ "fa-gear "}><BiLogInCircle/></p>
                    </div>
                    
                {/* End Toggle */}
                    <SubMenu item={'Vault - الخزينة'}  style={{float:"left"}}/>

                        <Link to='ovcd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'OVCD'}/>
                        </Link>

                        <Link to='ccvd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'CCVD'}/>
                        </Link>
                        
                        <Link to='mvcds'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'MVCDS '} />
                        </Link>
                        
                        <Link to='cvcds'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'CVCDS '} />
                        </Link>

                        <Link to='vvcd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'VVCD '} />
                        </Link>
                        
                        <Link to='mtadd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'MTADD '} />
                        </Link>

                        <Link to='mcttd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'MCTTD '} />
                        </Link>

                        <Link to='pcce'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'PCCE '} />
                        </Link>

                        

                    </ul>
                </nav>
            </div>

            <div className='col-lg-9 col-12' style={{color:'white',padding:0,zIndex:400}}>
            <Horizontal ></Horizontal>
            
            <div className={classes.mainIal} id="ovcd">
                    <div className={classes.ial} style={{padding:30}}>
                            <span>OVCD</span>
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

                <div className={classes.mainIanc} id="ccvd">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>CCVD</span>
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

                <div className={classes.mainIanc} id="mvcds">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>MVCDS</span>
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
                <div className={classes.mainIanc} id="cvcds">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>CVCDS</span>
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


                <div className={classes.mainIanc} id="vvcd">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>VVCD</span>
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


                <div className={classes.mainIanc} id="mtadd">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>MTADD</span>
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

                <div className={classes.mainIanc} id="mcttd">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>MCTTD</span>
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

                <div className={classes.mainIanc} id="pcce">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>PCCE</span>
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
