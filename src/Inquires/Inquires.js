import React from 'react';
import classes from './Inquires.module.css'
import Vertical from '../Vertical/Navbar'
import SubMenu from '../Vertical/SubMenu';
import Horizontal from '../Horizontal'
import { SidebarData } from '../Vertical/SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
const Inquires = () => {
    return (
        <>
            <Horizontal></Horizontal>
        <div className='row'>
            <div className='col-2' style={{padding:0}}>
                <nav className={SidebarData? 'nav-menu active' : 'nav-menu'}>
                    <ul className={`nav-menu-items ${classes.ulList}`} >
                        <SubMenu item={'INQUIRES - استعلامات'} />

                        <Link to='ianc' style={{padding:'50px'}}>
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

                <div className={classes.ianc} id="ianc">
                    قايمه بستعلم منها عن حساب الشيك ’العادي‘ حساب الساحب ( الساحب هو العميل صاحب الحساب) إللي هو من دفتر شيكات العميل بس هنا بستعلم بمعلومية رقم الشيك* ومتاح ليا اختار الفرع وبعد كدا ابحث
                </div>

                <div className={classes.iddt} id="iddt">
                    <span>Inquire on Demand Draft</span>
                    <br></br>
                        شاشه خاصه بالاستعلام عن الشيك/ الشيكات المصرفية ..

                        .... الشيك المصرفي زي ما اتفقنا القيمة بتتخصم من ح/ العميل وبيتم إضافتها إلي ح/ داخلي ...
                        إسم الحساب الداخلي ده ح/ اوراق دفع إصدار شيكات مصرفية،،،،،،، قد يختلف المسمى من بنك لبنك ومن شجرة محاسبية إلى شجرة محاسبية اخرى لكن عندي الشئ المشترك ان البنك بيحصل على قيمة الشيك من العميل بمجرد قيام العميل بطلب اصدار الشيك وبيديله شيك محرر على نماذج البنك.

                        بمعنى تان وانا داخل استعلم بدخل برقم الشيك إللي بيخص البنك وليس من دفتر شيكات العملاء وهكذا...
                </div>

                <div className={classes.icb} id="icb">
                    <span>INQUIRE ON CHEQUE BOOK</span>
                    <br></br>
                    بقدر استعلم منها على دفتر الشيكات كله للعميل مش شيك واحد
                </div>


            </div>
        </div>
        </>
    );
}

export default Inquires;
