import React from 'react';
import classes from './NonCash.module.css'
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
                        <SubMenu item={'Non Cash - غير نقدي'} />

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
            <div className='col-9' style={{color:'white',padding:0, margin:'auto'}}>

                <div className={classes.transfer} id="transfer">
                    1- MCTTD <br></br>
                    (Mantain Cash Transfer Transaction Details) <br></br>
                    <p>
                        -يبقي تحويل من الهيد تيلر والتيلر داخل البنك
                    </p>
                </div>

                <div className={classes.customerInduced} id="customerInduced">
                    1- MCITTD <br></br>
                    (Maintain Customer Induced Transfer Transaction Details) <br></br>
                    2- PNCT <br></br>
                    (Post Non Cash Transaction) <br></br>
                    <p>
                        -التحويل بين حسابات العملاء
                        -بناء علي طلب العميل
                        -وممكن التيلر يعملها ارسال علطول للتوثيق او حفظ كمسودة والهيد تيلر اللي يوثقها علي حسب صلاحياته
                    </p>
                </div>

                <div className={classes.bankInduced} id="bankInduced">
                    1- MBITTD <br></br>
                    (Maintain Bank Induced Transfer Transaction Details) <br></br>
                    2- PNCT <br></br>
                    (Post Non Cash Transaction) <br></br>
                    <p>
                        -بيبقي تحويل من حساب عميل لحساب داخلي او العكس
                        -زي حساب التوفير بيخصم مبلغ من حساب العميل كل شهر تلقائيا ويحطه في الايرادات-بناء علي طلب البنك
                        -وممكن التيلر يعملها ارسال علطول للتوثيق او حفظ كمسودة والهيد تيلر اللي يوثقها علي حسب صلاحياته
                    </p>
                </div>

                <div className={classes.postTransfer} id="postTransfer">
                    1- PNCT <br></br>
                    (Post Non Cash Transaction) <br></br>
                    <p>
                        -لتوثيق التحويلات الغير نقدية من الهيد تيلر للمراجعة
                    </p>
                </div>

                <div className={classes.reversal} id="reversal">
                    1- RTN (MAKER) <br></br>
                    (Reverse Transaction) <br></br>
                    2-VTR (CHECKER) <br></br>
                    (Verify Transaction Reversal) <br></br>
                    <p>
                        -لإلغاء الحركة الغير نقدية القديمة او ألغاءها وانشاء حركة جديدة معا
                    </p>
                </div>

            </div>
        </div>
        </>
    );
}

export default DD;
