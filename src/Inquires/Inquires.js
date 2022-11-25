import React from 'react';
import classes from './Inquires.module.css'
import Vertical from '../Vertical/Navbar'
import SubMenu from '../Vertical/SubMenu';
import Horizontal from '../Horizontal'
import { SidebarData } from '../Vertical/SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import mov from './1.MOV'
import '../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, PlayToggle } from 'video-react';
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
            <div className='col-2' style={{zIndex:1000}}>
                {/* Toggle */}

                <nav className={open? 'nav-menu active ' : 'nav-menu activeClose' }>
                    <ul className= {`nav-menu-items ${classes.ulList}`} >

                    <SubMenu item={'INQUIRES - استعلامات'}  style={{float:"left"}}/>
                    
                    <div class="toggle-setting">
                        <p 
                            onClick={close}
                            className={ "fa-gear "}><BiLogInCircle/></p>
                    </div>
                    
                {/* End Toggle */}

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

            <div className='col-lg-10' style={{color:'white',padding:0, margin:'auto'}}>
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
                            <ControlBar autoHide={false} disableDefaultControls={false}>
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
                            <ControlBar autoHide={false} disableDefaultControls={false}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
            </div>


            <div className={classes.mainIddt} id="iddt">
                <div className={classes.iddt} style={{padding:30}}>
                        <span>IDDT</span>
                    <p>
                                        شاشه خاصه بالاستعلام عن الشيك/ الشيكات المصرفية ..

                    .... الشيك المصرفي زي ما اتفقنا القيمة بتتخصم من ح/ العميل وبيتم إضافتها إلي ح/ داخلي ...
                    إسم الحساب الداخلي ده ح/ اوراق دفع إصدار شيكات مصرفية،،،،،،، قد يختلف المسمى من بنك لبنك ومن شجرة محاسبية إلى شجرة محاسبية اخرى لكن عندي الشئ المشترك ان البنك بيحصل على قيمة الشيك من العميل بمجرد قيام العميل بطلب اصدار الشيك وبيديله شيك محرر على نماذج البنك.

                    بمعنى تان وانا داخل استعلم بدخل برقم الشيك إللي بيخص البنك وليس من دفتر شيكات العملاء وهكذا...
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

            <div className={classes.mainIcb} id="icb">
                <div className={classes.icb} style={{padding:30}}>
                        <span>ICB</span>
                    <p>
                        بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد
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

export default Inquires;
