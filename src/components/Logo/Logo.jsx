import React from 'react';
import logoImg from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logoImg} className='w-[26px] mb-2' alt="" />
            <span className='text-2xl font-bold -ml-2'>ZapShift</span>
        </div>
    );
};

export default Logo;