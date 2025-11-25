import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);                    //taking only the region property from the whole object
    const regions = [...new Set(regionsDuplicate)];
    // const senderRegion = watch('senderRegion');
    const senderRegion = useWatch({control, name: 'senderRegion'});
    // console.log(regions)

    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);                     //taking only the region property from the whole object
        return districts;
    }

    const handleSendParcel = (data) => {
        console.log(data)
    }

    return (
        <div className='my-5 p-10 flex flex-col bg-white rounded-3xl'>
            <h1 className='text-3xl font-bold text-secondary'>Send A Parcel</h1>
            <p className='font-bold my-3'>Enter your parcel details</p>

            <form onSubmit={handleSubmit(handleSendParcel)}>

                {/* //top parcel type */}
                <div className='my-6'>
                    <div className='flex gap-5 mb-3'>
                        <label className='label'>
                            <input type="radio" value='document' {...register('parcelType')} className="radio" defaultChecked />
                            Document:
                        </label>

                        <label className='label'>
                            <input type="radio" value='non-document' {...register('parcelType')} className="radio" />
                            Non-Document:
                        </label>
                    </div>

                    {/* parcel info */}
                    <div className='flex flex-col md:flex-row gap-6 my-10'>
                        <fieldset className='fieldset w-1/2'>
                            <label className='label font-bold'>Parcel Name</label>
                            <input type="text" {...register('parcelName')} className='input w-full' placeholder='Parcel Name' />
                        </fieldset>
                        <fieldset className='fieldset w-1/2'>
                            <label className='label font-bold'>Parcel Weight</label>
                            <input type="text" {...register('parcelWeight')} className='input w-full' placeholder='Parcel Weight' />
                        </fieldset>
                    </div>
                </div>

                {/* //bottom */}
                <div className='flex flex-col md:flex-row my-5 gap-5'>
                    {/* //left */}
                    <div className='w-full md:w-1/2'>
                        <h4 className='text-xl font-bold text-secondary'>Sender Details</h4>
                        <fieldset className="fieldset">
                            {/* sender name */}
                            <label className="label mt-3 font-bold">Sender Name</label>
                            <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />

                            {/* sender email */}
                            <label className="label mt-3 font-bold">Sender Email</label>
                            <input type="email" {...register('senderEmail')} className="input w-full" placeholder="Sender Email" />

                            {/* sender address */}
                            <label className="label mt-3 font-bold">Sender Address</label>
                            <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />

                            {/* sender region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender Region</legend>
                                <select {...register('senderRegion')} defaultValue="Pick a Region" className="select w-full">

                                    <option disabled={true}>Pick a region</option>
                                    {
                                        regions.map((r, k) => <option key={k} value={r} >{r}</option>)
                                    }

                                </select>
                            </fieldset>

                            {/* sender District */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender District</legend>
                                <select {...register('senderDistrict')} defaultValue="Pick a District" className="select w-full">

                                    <option disabled={true}>Pick a District</option>
                                    {
                                        districtsByRegion(senderRegion).map((r, k) => <option key={k} value={r} >{r}</option>)
                                    }

                                </select>
                            </fieldset>

                            {/* sender Phone Number */}
                            <label className="label mt-3 font-bold">Sender Phone Number</label>
                            <input type="text" {...register('senderPhoneNumber')} className="input w-full" placeholder="Sender Phone Number" />

                        </fieldset>
                    </div>

                    {/* //right */}
                    <div className='w-full md:w-1/2'>
                        <h4 className='text-xl font-bold text-secondary'>Receiver Details</h4>
                        <fieldset className="fieldset">
                            {/* receiver name */}
                            <label className="label mt-3 font-bold">Receiver Name</label>
                            <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />

                            {/* Receiver email */}
                            <label className="label mt-3 font-bold">Receiver Email</label>
                            <input type="email" {...register('ReceiverEmail')} className="input w-full" placeholder="Receiver Email" />

                            {/* receiver address */}
                            <label className="label mt-3 font-bold">Receiver Address</label>
                            <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />

                            {/* receiver District */}
                            <label className="label mt-3 font-bold">Receiver District</label>
                            <input type="text" {...register('receiverDistrict')} className="input w-full" placeholder="Receiver District" />

                            {/* receiver Phone Number */}
                            <label className="label mt-3 font-bold">Receiver Phone Number</label>
                            <input type="text" {...register('receiverPhoneNumber')} className="input w-full" placeholder="Receiver Phone Number" />

                        </fieldset>
                    </div>

                </div>

                <button className='btn btn-primary text-secondary'>Send Parcel</button>
            </form>
        </div>
    );
};

export default SendParcel;