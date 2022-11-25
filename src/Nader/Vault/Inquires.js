import React from 'react';
import classes from './Inquires.module.css'
import Vertical from '../../Vertical/Navbar'
import SubMenu from '../../Vertical/SubMenu';
import Horizontal from '../../Horizontal'
import { SidebarData } from '../../Vertical/SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import mov from './1.MOV'
import '../../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, PlayToggle } from 'video-react';
const Inquires = () => {
    return (
        <>
            <Horizontal></Horizontal>
        <div className='row'>
            <div className='col-2' style={{padding:0, zIndex:1000}}>
                <nav className={SidebarData? 'nav-menu active' : 'nav-menu'}>
                    <ul className={`nav-menu-items ${classes.ulList}`} >
                        <SubMenu item={'VAULT - الخزينة'} />

                        <Link to='ovcd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'OVCD'}/>
                        </Link>

                        <Link to='mvcds'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'MVCDS'}/>
                        </Link>
                        
                        <Link to='ccvd'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'CCVD '} />
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
            <div className='col-9' style={{color:'white',padding:0, margin:'auto'}}>

                <div className={classes.ial} id="ial" style={{marginTop:50}}>
                    <div className={classes.video} 
                            onContextMenu={(e)=> e.preventDefault()}>
                    <span>OVCD -  Open Vault Cash Details</span>
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

                <div className={classes.ianc} id="ovcd">
                    قايمه بستعلم منها عن حساب الشيك ’العادي‘ حساب الساحب ( الساحب هو العميل صاحب الحساب) إللي هو من دفتر شيكات العميل بس هنا بستعلم بمعلومية رقم الشيك* ومتاح ليا اختار الفرع وبعد كدا ابحث
                </div>

                <div className={classes.iddt} id="mvcds">
                    <span>Inquire on Demand Draft</span>
                    <br></br>
                        شاشه خاصه بالاستعلام عن الشيك/ الشيكات المصرفية ..

                        .... الشيك المصرفي زي ما اتفقنا القيمة بتتخصم من ح/ العميل وبيتم إضافتها إلي ح/ داخلي ...
                        إسم الحساب الداخلي ده ح/ اوراق دفع إصدار شيكات مصرفية،،،،،،، قد يختلف المسمى من بنك لبنك ومن شجرة محاسبية إلى شجرة محاسبية اخرى لكن عندي الشئ المشترك ان البنك بيحصل على قيمة الشيك من العميل بمجرد قيام العميل بطلب اصدار الشيك وبيديله شيك محرر على نماذج البنك.

                        بمعنى تان وانا داخل استعلم بدخل برقم الشيك إللي بيخص البنك وليس من دفتر شيكات العملاء وهكذا...
                </div>

                <div className={classes.icb} id="ccvd">
                    <span>INQUIRE ON CHEQUE BOOK</span>
                    <br></br>
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد
                </div>

                <div className={classes.icb} id="cvcds">
                    <span>INQUIRE ON CHEQUE BOOK</span>
                    <br></br>
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد
                </div>


                <div className={classes.icb} id="vvcd">
                    <span>INQUIRE ON CHEQUE BOOK</span>
                    <br></br>
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد
                </div>

                <div className={classes.icb} id="mtadd">
                    <span>INQUIRE ON CHEQUE BOOK</span>
                    <br></br>
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد

                </div>

                <div className={classes.icb} id="mcttd">
                    <span>INQUIRE ON CHEQUE BOOK</span>
                    <br></br>
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد

                </div>
                <div className={classes.icb} id="pcce">
                    <span>INQUIRE ON CHEQUE BOOK</span>
                    <br></br>
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد

                </div>


            </div>
        </div>
        </>
    );
}

export default Inquires;
