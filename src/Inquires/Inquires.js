import React from 'react';
import classes from './Inquires.module.css'
import './inquire.css'
import Vertical from '../Vertical/Navbar'
import SubMenu from '../Vertical/SubMenu';
import Horizontal from '../Horizontal'
import { SidebarData } from '../Vertical/SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import mov from './1.MOV'
import '../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, PlayToggle } from 'video-react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Inquires = () => {
    function close(e) {
        e.className= ''
    }
    return (
        <>

        
        
        
        <div className='row'>
            <div className='col-2' style={{padding:0, zIndex:1000}}>
                <nav className={SidebarData? 'nav-menu active' : 'nav-menu'}>
                    <ul className={`nav-menu-items ${classes.ulList}`} >
                    {/* <button onClick={(e) => close(e.target)} style={{float:"right"}}>=</button>  */}
                    
                    <SubMenu item={'INQUIRES - استعلامات'}  style={{float:"left"}}/>

                        <Link to='ial'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'IAL'}/>
                        </Link>

                        <Link to='ianc'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'IANC'}/>
                        </Link>
                        
                        <Link to='iddt'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'IDDT '} />
                        </Link>
                        
                        <Link to='icb'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'ICB '} />
                        </Link>

                    </ul>
                </nav>
            </div>

            <div className='col-9' style={{color:'white',padding:0, margin:'auto'}}>
            <Horizontal ></Horizontal>
            
            <div className={classes.mainIal} id="ial">
                    <div className={classes.ial} style={{padding:30}}>
                            <span>IAL</span>
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

                <div className={classes.mainIanc} id="ianc">
                    <div className={classes.ianc} style={{padding:30}}>
                            <span>IANC</span>
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

                <div className={classes.mainIddt} id="iddt">
                    <div className={classes.iddt} style={{padding:30}}>
                        <span>Inquire on Demand Draft</span>
                        <br></br>
                            شاشه خاصه بالاستعلام عن الشيك/ الشيكات المصرفية ..

                            .... الشيك المصرفي زي ما اتفقنا القيمة بتتخصم من ح/ العميل وبيتم إضافتها إلي ح/ داخلي ...
                            إسم الحساب الداخلي ده ح/ اوراق دفع إصدار شيكات مصرفية،،،،،،، قد يختلف المسمى من بنك لبنك ومن شجرة محاسبية إلى شجرة محاسبية اخرى لكن عندي الشئ المشترك ان البنك بيحصل على قيمة الشيك من العميل بمجرد قيام العميل بطلب اصدار الشيك وبيديله شيك محرر على نماذج البنك.

                            بمعنى تان وانا داخل استعلم بدخل برقم الشيك إللي بيخص البنك وليس من دفتر شيكات العملاء وهكذا...
                            
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

                <div className={classes.mainIcb} id="icb">
                    <div className={classes.icb} style={{padding:30}}>
                        <span>INQUIRE ON CHEQUE BOOK</span>
                        <br></br>
                        بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد
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
