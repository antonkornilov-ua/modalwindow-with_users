import React from 'react';

import User from '../../interface/User';
import { capitalizeString } from '../../helpers/capitalizeString';

interface DetailedUserProps {
    user: User;
}

const DetailedUserInfo: React.FC<DetailedUserProps> = ({ user }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className='lg:w-32 lg:h-32 w-20 h-20 rounded-full'
                />
                <h2 className='text-lg font-bold mb-2 text-center'>
                    {user.firstName} {user.lastName}
                </h2>
            </div>
            <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='flex flex-col justify-start items-start'>
                    <h3 className='lg:text-lg font-bold mb-2'>Personal Information</h3>
                    <p className='text-gray-700 font-semibold lg:text-md text-sm'>
                        {user.address.city}, {user.address.state.toUpperCase()}
                    </p>
                    <p className='text-gray-500 lg:text-md text-sm'>
                        <strong>Address:</strong> {user.address.address}
                    </p>
                    <p className='text-gray-500 mb-2 lg:text-md text-sm'>
                        <strong>ZIP:</strong> {user.address.postalCode}
                    </p>
                    <p className='text-gray-500 lg:text-md text-sm'>
                        {capitalizeString(user.gender)}, {user.age} years
                    </p>
                    <p className='text-gray-500 mt-2 lg:text-md text-sm'>
                        <strong>Username:</strong> {user.username}
                    </p>
                    <a href={`mailto:${user.email}`} className='text-gray-500 hover:text-orange-500 lg:text-md text-sm'>
                        <strong>Email:</strong> {user.email}
                    </a>
                    <a href={`phone:${user.phone}`} className='text-gray-500 hover:text-orange-500 lg:text-md text-sm'>
                        <strong>Phone:</strong> {user.phone}
                    </a>
                </div>

                <div className='flex flex-col justify-start items-start'>
                    <h3 className='lg:text-lg font-bold mb-2'>Additional Information</h3>
                    <p className='text-gray-500  lg:text-md text-sm'>
                        <strong>Birth date:</strong> {user.birthDate}
                    </p>
                    <p className='text-gray-500  lg:text-md text-sm'>
                        <strong>Blood Group:</strong> {user.bloodGroup}
                    </p>

                    <p className='text-gray-500  lg:text-md text-sm'>
                        <strong>Height:</strong> {user.height} cm
                    </p>
                    <p className='text-gray-500 lg:text-md text-sm'>
                        <strong>Weight:</strong> {user.weight} kg
                    </p>

                    <p className='text-gray-500 lg:mb-2 lg:text-md text-sm'>
                        <strong>University:</strong> {user.university}
                    </p>

                    <div className='mt-2'>
                        <h3 className='lg:text-lg font-bold mb-2'>Work info:</h3>
                        <p className='text-gray-500 lg:text-md text-sm'>
                            <strong>Company:</strong> {user.company.name}
                        </p>
                        <p className='text-gray-500 lg:text-md text-sm'>
                            <strong>Position:</strong> {user.company.title}
                        </p>
                        <p className='text-gray-500 mb-2 lg:text-md text-sm'>
                            <strong>Department:</strong> {user.company.department}
                        </p>
                        <h5 className='font-semibold mb-2'>Location:</h5>
                        <p className='text-gray-500  lg:text-md text-sm'>
                            <strong>Address:</strong> {user.company.address.address}
                        </p>
                        <p className='text-gray-500 mb-2 lg:text-md text-sm'>
                            <strong>City:</strong> {user.company.address.city},{' '}
                            {user.company.address.state.toUpperCase()}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailedUserInfo;
