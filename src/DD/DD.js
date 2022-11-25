import mov from './1.MOV'
import '../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, PlayToggle } from 'video-react';
import { useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
//////////////////////////////////////////
import React from 'react';
import classes from './DD.module.css'
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

                    <SubMenu item={'Demand Draft'}  style={{float:"left"}}/>
                    
                    <div class="toggle-setting">
                        <p 
                            onClick={close}
                            className={ "fa-gear "}><BiLogInCircle/></p>
                    </div>
                    
                {/* End Toggle */}
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

                        <Link to='print'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'PRINT '} />
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
            <div className='col-lg-10' style={{color:'white',padding:0, margin:'auto'}}>
            <Horizontal ></Horizontal>

            <div className={classes.mainIssue} id="issue">
                <div className={classes.issue} style={{padding:30}}>
                   <span>ISSUE</span>
                   <p>
                    <br></br>
                    <br></br>
                    -IEDD <br></br>
                    (Issue Demand Draft) <br></br>
                    -إصدار الشيك المصرفي<br></br>
                    -لازم يبقي لعميل عندي في البنك<br></br>
                    -بعمل تحويل من حساب العميل لحساب داخلي في البنك عشان اقدر بعد كدا اصرفه للمستفيد ويبقي ضمنتله حقه
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

                <div className={classes.mainDisbursement} id="disbursement">
                <div className={classes.disbursement} style={{padding:30}}>
                    <span>DISBURSEMENT</span>
                    <p>
                        <br></br>
                        <br></br>
                        -MCITTD <br></br>
                        (Maintain Customer Induced Transfer Transaction Details) <br></br>
                        -صرف الشيك<br></br>
                        -بصرف الشيك بناء علي طلب العميل وبحوله الرصيد من الحساب الداخلي اللي انا مخزن فيه الفلوس من الاول
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

                <div className={classes.mainStop} id="stop">
                <div className={classes.stop} style={{padding:30}}>
                    <span>STOP</span>
                    <p>
                        <br></br>
                        1- SDDP (MAKER) <br></br>   
                        (Stop Demand Draft Payment) <br></br>
                        2- VDDSP (CHECKER) <br></br>
                        (Verify Demand Draft Stop Payment) <br></br>
                        -وقف صرف الشيك
                        -لو العميل عايز يوقف صرف الشيك لازم ابقي عارف رقم الشيك وبعد الوقف لازم يتراجع عليه<br></br>
                        1- RDDSP (MAKER) <br></br>
                        (Revoke Demand Draft Stop Payment) <br></br>
                        2- VRDDSP (CHECKER) <br></br>
                        (Verify Revoke Demand Draft Stop Payment) <br></br>
                            -عكس حالة ايقاف صرف شيك
                            -لو العميل عايز يسمح بصرف الشيك بعد م وقفه بغير حالته من موقوف لغير مدفوع
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

                <div className={classes.mainLost} id="lost">
                <div className={classes.lost} style={{padding:30}}>
                    <span>LOST</span>
                    <p>
                        <br></br>
                        <br></br>
                        -MDDL <br></br>
                        (Mark Demand Draft As lost) <br></br>
                        -فقد الشيك<br></br>
                        -لو الشيك ضاع مني وعايز اغير حالته لمفقود عشان المستفيد ميلاقيهوش مثلا ويصرفه كزيادة امان لفلوسي فبغير حالة الشيك من غير مدفوع لمفقود<br></br>
                        -وممكن لو العميل عايز نسخة تانية منه اطلعله بس بعد لما النشرة تلف علي الفروع كلها وميلاقهوش
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

                <div className={classes.mainPrint} id="print">
                <div className={classes.print} style={{padding:30}}>
                    <span>PRINT</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- PDDT <br></br>
                        (print Demand Draft) <br></br>
                        -طباعة الشيك المصرفي<br></br>
                        -بيحطلي رقم للشيك لأنه مش بياخد رقم غير لما اجي اطبعه
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

                <div className={classes.mainReprint} id="reprint">
                <div className={classes.reprint} style={{padding:30}}>
                    <span>REPRINT</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- IDDD <br></br>
                        (Issue Duplicate Demand Draft) <br></br>
                        2- RDDF <br></br>
                        (Reprint Demand Draft) <br></br>
                        -إعادة طباعة الشيك المصرفي<br></br>
                        -وديه بتبقي في حالة فقد الشيك
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

                <div className={classes.mainCancel} id="cancel">
                <div className={classes.cancel} style={{padding:30}}>
                    <span>CANCEL</span>
                   <p>
                    <br></br>
                    <br></br>
                        -CDDT <br></br>
                        (Cancel Demand Draft) <br></br>
                        -إلغاء الشيك المصرفي<br></br>
                        -حسب رغبة العميل
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
