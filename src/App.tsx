import { useEffect, useState } from 'react';
import User from './interface/User';
import List from './Components/List';

const App = () => {
    const [isBtnPressed, setIsBtnPressed] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isBtnPressed) {
            setIsLoading(true);
            fetch('https://dummyjson.com/users')
                .then((res) => res.json())
                .then((data) => {
                    setUsers(data.users);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setIsLoading(false);
                });
        }
    }, [isBtnPressed]);

    return (
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 px-4'>
            {isBtnPressed ? (
                isLoading ? (
                    <div className='flex justify-center items-center min-h-screen'>
                        <div className='flex justify-center items-center'>
                            <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900'></div>
                        </div>
                    </div>
                ) : (
                    <List users={users} />
                )
            ) : (
                <div className='flex justify-center items-center min-h-screen'>
                    <button
                        onClick={() => setIsBtnPressed(true)}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Вивести всіх юзерів
                    </button>
                </div>
            )}
        </div>
    );
};

export default App;
