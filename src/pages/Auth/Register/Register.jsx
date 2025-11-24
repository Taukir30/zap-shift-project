import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const {registerUser} = useAuth();

    const handleRegistration = (data) => {
        console.log(data);
        registerUser( data.email, data.password)
            .then( result => {
                console.log(result.user);
            })
            .catch( error => {
                console.log(error);
            })
    } 

    return (
        <div className='w-full md:w-[60%] flex flex-col gap-3'>
            <h1 className='text-3xl font-bold'>Create an Account</h1>
            <p className='font-semibold text-sm'>Register with ZapShift</p>
            <form onSubmit={handleSubmit(handleRegistration)} className='w-full'>
                <fieldset className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email',{required:true})} className="input w-full" placeholder="Email" />
                    {
                        errors.email?.type==='required' && 
                        <p className='text-red-500'>Email is required</p>
                    }

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {
                            required:true, 
                            minLength:6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/
                        })} className="input w-full" placeholder="Password" />
                    {
                        errors.password?.type==='required' && 
                        <p className='text-red-500'>Password is required</p>
                    }
                    {
                        errors.password?.type==='minLength' &&
                        <p className='text-red-500'>Password must be 6 character or longer</p>
                    }
                    {
                        errors.password?.type==='pattern' &&
                        <p className='text-red-500'>Password must contain minimum one uppercase, one lower case, one number and one special characterr</p>
                    }

                    {/* forget */}
                    <button className="btn btn-primary text-secondary mt-4">Register</button>
                    <div className='my-2'>Already have an account? <Link to='/login' className="link link-hover"> Login</Link></div>
                </fieldset>
            </form>
            <span className='text-center text-xs'>OR</span>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;