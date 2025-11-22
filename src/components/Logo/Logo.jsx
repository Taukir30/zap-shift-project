import React from 'react';
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to='/'>
            <div className='flex items-end'>
                <img src={logoImg} className='w-[26px] mb-2' alt="" />
                <span className='text-2xl font-bold -ml-2'>ZapShift</span>
            </div>
        </Link>
    );
};

export default Logo;