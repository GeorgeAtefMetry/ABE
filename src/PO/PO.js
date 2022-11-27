import React from 'react';
import classes from './PO.module.css'
import SubMenu from '../Vertical/SubMenu';
import Horizontal from '../Horizontal'
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import mov from './1.MOV'
import '../../node_modules/video-react/dist/video-react.css'
import { Player, ControlBar, PlayToggle } from 'video-react';
import { useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
const PO = () => {
    const [open, setOpen] = useState(false);
    const close = e => {
        setOpen(current => !current)
    }
    return (
        <>
        <div className='row'>
            <div className='col-2' style={{zIndex:1000}}>
                {/* Toggle */}
                
                <nav style={{paddingRight:16}} className={open? 'nav-menu active ' : `nav-menu  ${classes.activeClose}` }>
                    <ul className= {`nav-menu-items ${classes.ulList}`} >

                    <SubMenu item={'Payment Order'}  style={{float:"left"}}/>
                    
                    <div className={classes.toggleSetting}>
                        <p 
                            onClick={close}
                            className={ "fa-gear "}><BiLogInCircle/></p>
                    </div>
                    
                {/* End Toggle */}
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
            <div className='col-lg-10' style={{color:'white',padding:0}}>
            <Horizontal ></Horizontal>

                <div className={classes.mainAch} id="ach">
                <div className={classes.ach} style={{padding:30}}>
                    <span>ACH</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- AAPO (MAKER)<br></br>
                        -Add ACH Payment Order<br></br>
                        2- MPOR (CHECKER)<br></br>
                        -Maintain Payment Order<br></br>
                        -داخل مصر
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

                <div className={classes.mainEswift} id="eswift">
                <div className={classes.eswift} style={{padding:30}}>
                    <span>E-Swift</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- AEPO (MAKER)<br></br>
                        -Add E-Swift Payment Order<br></br>
                        2- MPOR (CHECKER)<br></br>
                        -Maintain Payment Order<br></br>
                        -داخل مصر
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
                

                <div className={classes.mainSwift} id="swift">
                <div className={classes.swift} style={{padding:30}}>
                    <span>Swift</span>
                    <p>
                        <br></br>
                        <br></br>
                        1- ASPO (MAKER)<br></br>
                        -Add Swift Payment Order<br></br>
                        2- MPOR (CHECKER)<br></br>
                        -Maintain Payment Order<br></br>
                        -خارج مصر<br></br>
                        -ممكن يبقي داخل مصر بس بتكلفة اعلي من المتاح بالداخل
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

export default PO;
