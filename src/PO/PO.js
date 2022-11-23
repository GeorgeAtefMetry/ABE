import React from 'react';
import classes from './PO.module.css'
import SubMenu from '../Vertical/SubMenu';
import Horizontal from '../Horizontal'
import { SidebarData } from '../Vertical/SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
const PO = () => {
    return (
        <>
            <Horizontal></Horizontal>
        <div className='row'>
            <div className='col-2' style={{padding:0, zIndex:1000}}>
                <nav className={SidebarData? 'nav-menu active' : 'nav-menu'}>
                    <ul className={`nav-menu-items ${classes.ulList}`} >
                        <SubMenu item={'Payment Order-المدفوعات'} />
                        <Link to='ach'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'ACH'}/>
                        </Link>

                        <Link to='eswift'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />}  item={'E-SWIFT'}/>
                        </Link>
                        
                        <Link to='swift'>
                            <SubMenu icon={<AiIcons.AiTwotoneStar style={{fontSize: '20px'}} />} item={'SWIFT'} />
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className='col-9' style={{color:'white',padding:0, margin:'auto'}}>

                <div className={classes.ach} id="ach">
                    1- AAPO (MAKER) <br></br>
                        -Add ACH Payment Order <br></br>
                    2- MPOR (CHECKER) <br></br>
                        -Maintain Payment Order <br></br>
                </div>

                <div className={classes.eswift} id="eswift">
                    1- AEPO (MAKER) <br></br>
                        -Add E-Swift Payment Order <br></br>
                    2- MPOR (CHECKER) <br></br>
                        -Maintain Payment Order <br></br>
                </div>

                <div className={classes.swift} id="swift">
                    1- ASPO (MAKER) <br></br>
                        -Add Swift Payment Order <br></br>
                    2- MPOR (CHECKER) <br></br>
                        -Maintain Payment Order <br></br>
                </div>


            </div>
        </div>
        </>
    );
}

export default PO;
