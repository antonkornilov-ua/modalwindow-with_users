import React, { useEffect, useState } from 'react';
import User from '../interface/User';
import Modal from './../Components/ModalComponents/Modal';
import { capitalizeString } from '../helpers/capitalizeString';
import DetailedUserInfo from './ModalComponents/DetailedUserInfo';

interface UserItemProps {
    user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpening, setIsModalOpening] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            setIsModalOpening(true);
        }
    }, [isModalOpen]);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpening(false);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 300);
    };

    return (
        <div className='bg-gray-300 p-4 m-4 rounded-md md:w-72'>
            <div className='flex flex-col justify-center items-center'>
                <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className='w-10 h-10 rounded-full mr-2'
                />
                <h2 className='text-lg font-semibold mt-2'>
                    {user.firstName} {user.lastName}
                </h2>
            </div>
            <div className='flex justify-evenly mt-2'>
                <p className='text-gray-700 text-sm font-semibold'>
                    {user.address.city}, {user.address.state.toUpperCase()}
                </p>
                <p className='text-gray-500 text-sm'>
                    {capitalizeString(user.gender)}, {user.age} years
                </p>
            </div>
            <p className='text-gray-500 mt-2'>
                <strong>Username:</strong> {user.username}
            </p>
            <p className='text-gray-500'>
                <strong>Email:</strong> {user.email}
            </p>
            <p className='text-gray-500'>
                <strong>Phone:</strong> {user.phone}
            </p>
            <div className='flex items-center justify-center mt-10'>
                <button
                    onClick={handleModalOpen}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'>
                    Детальніше
                </button>
            </div>
            {isModalOpen && (
                <Modal onClose={handleModalClose}>
                    <div
                        className={`transform transition-transform duration-300 ${
                            isModalOpening ? 'scale-100' : 'scale-0'
                        }`}>
                        <DetailedUserInfo user={user} />
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default UserItem;
