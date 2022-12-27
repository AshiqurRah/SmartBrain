import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0" style={{ height: '150px', width:'150px'}}>
            <Tilt >
                <div style={{ height: '150px', width:'150px', background: 'linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%)'}} className='br2 shadow-2'>
                    <img src={brain} alt='Logo' style={{paddingTop:'20px'}}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;