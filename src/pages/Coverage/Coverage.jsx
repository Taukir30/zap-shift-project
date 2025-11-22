import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {

    const serviceCenters = useLoaderData();
    // console.log(serviceCenters)

    const position = [23.6850, 90.3563];

    const mapRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find( c => c.district.toLowerCase().includes( location.toLowerCase()));

        if(district) {
            const coordination = [district.latitude, district.longitude];
            // console.log(coordination)
            mapRef.current.flyTo(coordination, 12);
        }
    }

    return (
        <div className='my-5 py-10 flex flex-col items-center gap-5 bg-white rounded-3xl'>
            <h1 className='text-4xl font-bold text-secondary'>We are available in 64 districts</h1>

            <div className='w-full flex justify-center'>
                <form onSubmit={handleSearch} className=' w-[30%]'>
                    <label className="input relative w-full rounded-4xl border-0 bg-[#EAECED]">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" name='location' required placeholder="Search here" />
                        <button className='btn btn-primary rounded-4xl px-8 text-secondary absolute right-0 border-0'>Search</button>
                    </label>
                </form>
            </div>

            <div className='py-5 w-[80%] border-t border-gray-400'>
                <h2 className='text-2xl text-center text-secondary font-bold'>We deliver almost all over Bangladesh</h2>
            </div>

            <div className='border w-[80%] h-[602px]'>
                <MapContainer ref={mapRef} center={position} zoom={8} scrollWheelZoom={false} className='h-[600px]'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        serviceCenters.map(center => <Marker position={[center.latitude, center.longitude]} key={center.city}>
                            <Popup>
                                <strong>{center.district}</strong><br />
                                Service area: {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>
                        )
                    }

                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;