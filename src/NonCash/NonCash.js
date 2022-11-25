import mov from './1.MOV'
import '../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, PlayToggle } from 'video-react';
import { useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
import React from 'react';
import classes from './NonCash.module.css'
import SubMenu from '../Vertical/SubMenu';
import Horizontal from '../Horizontal'
import { SidebarData } from '../Vertical/SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import '../../node_modules/video-react/dist/video-react.css'
const DD = () => {
    const [open, setOpen] = useState(false);
    const close = e => {
        setOpen(current => !current)
    }
    return (
        <>
            <div className='row'>
            <div className='col-2' style={{padding:0, zIndex:1000}}>
                {/* Toggle */}
                
                <nav className={open? 'nav-menu active ' : 'nav-menu activeClose' }>
                    <ul className= {`nav-menu-items ${classes.ulList}`} >

                    <SubMenu item={'Non Cash - غير نقدي'}  style={{float:"left"}}/>
                    
                    <div class="toggle-setting">
                        <p 
                            onClick={close}
                            className={ "fa-gear "}><BiLogInCircle/></p>
                    </div>
                    
                {/* End Toggle */}

                        <Link to='transfer'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'Transfer'}/>
                        </Link>

                        <Link to='customerInduced'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'Customer Transfer'}/>
                        </Link>
                        
                        <Link to='bankInduced'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'Bank Induced'} />
                        </Link>
                        
                        <Link to='postTransfer'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'Post Transfer'} />
                        </Link>

                        <Link to='reversal'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'Reverse Transfer'} />
                        </Link>

                    </ul>
                </nav>
            </div>
            <div className='col-lg-10' style={{color:'white',padding:0, margin:'auto'}}>
            <Horizontal ></Horizontal>

            <div className={classes.mainTransfer} id="transfer">
                <div className={classes.transfer} style={{padding:30}}>
                    <span>TRASFER</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- MCTTD <br></br>
                        (Mantain Cash Transfer Transaction Details) <br></br>
                        -يبقي تحويل من الهيد تيلر والتيلر داخل البنك
                    </p>
                    <div className={classes.video} 
                            onContextMenu={(e)=> e.preventDefault()}>
                        <Player
                            playsInline
                            src={mov}
                        >
                            <ControlBar autoHide={false} disableDefaultControls={false}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
                </div>

                <div className={classes.mainCI} id="customerInduced">
                <div className={classes.customerInduced} style={{padding:30}}>
                    <span>CustOMER INDUCED</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- MCITTD <br></br>
                        (Maintain Customer Induced Transfer Transaction Details) <br></br>
                        2- PNCT <br></br>
                        (Post Non Cash Transaction) <br></br>
                        -التحويل بين حسابات العملاء<br></br>
                        -بناء علي طلب العميل<br></br>
                        -وممكن التيلر يعملها ارسال علطول للتوثيق او حفظ كمسودة والهيد تيلر اللي يوثقها علي حسب صلاحياته
                    </p>
                    <div className={classes.video} 
                            onContextMenu={(e)=> e.preventDefault()}>
                        <Player
                            playsInline
                            src={mov}
                        >
                            <ControlBar autoHide={false} disableDefaultControls={false}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
                </div>

                <div className={classes.mainBI} id="bankInduced">
                <div className={classes.bankInduced} style={{padding:30}}>
                    <span>BANK INDUCED</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- MBITTD <br></br>
                        (Maintain Bank Induced Transfer Transaction Details) <br></br>
                        2- PNCT <br></br>
                        (Post Non Cash Transaction) <br></br>
                        -بيبقي تحويل من حساب عميل لحساب داخلي او العكس<br></br>
                        -زي حساب التوفير بيخصم مبلغ من حساب العميل كل شهر تلقائيا ويحطه في الايرادات-بناء علي طلب البنك<br></br>
                        -وممكن التيلر يعملها ارسال علطول للتوثيق او حفظ كمسودة والهيد تيلر اللي يوثقها علي حسب صلاحياته
                    </p>
                    <div className={classes.video} 
                            onContextMenu={(e)=> e.preventDefault()}>
                        <Player
                            playsInline
                            src={mov}
                        >
                            <ControlBar autoHide={false} disableDefaultControls={false}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
                </div>

                <div className={classes.mainPost} id="postTransfer">
                <div className={classes.postTransfer} style={{padding:30}}>
                    <span>POST TRASFER</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- PNCT <br></br>
                        (Post Non Cash Transaction) <br></br>
                        -لتوثيق التحويلات الغير نقدية من الهيد تيلر للمراجعة
                    </p>
                    <div className={classes.video} 
                            onContextMenu={(e)=> e.preventDefault()}>
                        <Player
                            playsInline
                            src={mov}
                        >
                            <ControlBar autoHide={false} disableDefaultControls={false}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
                </div>

                <div className={classes.mainReversal} id="reversal">
                <div className={classes.reversal} style={{padding:30}}>
                    <span>REVERSAL</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- RTN (MAKER) <br></br>
                        (Reverse Transaction) <br></br>
                        2-VTR (CHECKER) <br></br>
                        (Verify Transaction Reversal) <br></br>
                        -لإلغاء الحركة الغير نقدية القديمة او ألغاءها وانشاء حركة جديدة معا
                    </p>
                    <div className={classes.video} 
                            onContextMenu={(e)=> e.preventDefault()}>
                        <Player
                            playsInline
                            src={mov}
                        >
                            <ControlBar autoHide={false} disableDefaultControls={false}>
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

export default DD;
