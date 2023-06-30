import React from 'react';
import UserItem from './UserItem';
import User from '../interface/User';

interface ListProp {
    users: User[];
}

const List: React.FC<ListProp> = ({ users }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center'>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};

export default List;
