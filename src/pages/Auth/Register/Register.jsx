import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const {registerUser, updateUserProfile} = useAuth();

    const location = useLocation();

    const navigate = useNavigate();

    const handleRegistration = (data) => {
        // console.log(data);
        const profileImg = data.photo[0];

        registerUser( data.email, data.password)
            .then( result => {
                console.log(result.user);
                //get the image from the form
                const formData = new FormData();
                formData.append('image', profileImg);
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host_key}`;

                axios.post(image_API_URL, formData)
                    .then( res => {
                        console.log('after image upload', res.data.data.url);

                        //update user profile
                        const userProfile = {
                            displayName : data.name,
                            photoURL : res.data.data.url
                        }
                        updateUserProfile(userProfile)
                            .then( () => {
                                console.log('user profile update done');
                                
                                navigate(location.state || '/');
                            })
                            .catch( error => {
                                console.log(error);
                            })
                    })

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

                    {/* name */}
                    <label className="label">Name</label>
                    <input type="name" {...register('name',{required:true})} className="input w-full" placeholder="Name" />
                    {
                        errors.name?.type==='required' && 
                        <p className='text-red-500'>Name is required</p>
                    }

                    {/* photo */}
                    <label className="label">Photo</label>
                    <input type="file" {...register('photo',{required:true})} className="file-input w-full" placeholder="Photo" />
                    {
                        errors.photo?.type==='required' && 
                        <p className='text-red-500'>Photo is required</p>
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
                    <div className='my-2'>Already have an account? <Link to='/login' state={location.state} className="link link-hover"> Login</Link></div>
                </fieldset>
            </form>
            <span className='text-center text-xs'>OR</span>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;