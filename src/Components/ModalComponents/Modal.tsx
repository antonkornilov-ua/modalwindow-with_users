import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
    onClose: () => void;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isClosing) {
            const modalTimer = setTimeout(() => {
                onClose();
            }, 300);
            return () => clearTimeout(modalTimer);
        }
    }, [isClosing, onClose]);

    const handleClose = () => {
        setIsClosing(true);
    };

    return (
        <div
            className={`fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-75 transition-opacity duration-300 ${
                isClosing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={handleClose}>
            <div
                className={`bg-white px-10 py-5 rounded-md w-full sm:m-8 xl:w-[800px] transform transition-transform duration-300 ${
                    isClosing ? 'scale-0' : 'scale-100'
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-end items-start'>
                    <button
                        onClick={handleClose}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
                        Х
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
