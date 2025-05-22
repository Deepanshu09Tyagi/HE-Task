import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) return;
        axios.get('http://localhost:5000/users', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, [token]);

    if (!token) return <p>Please register first.</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Registered Users: {users.length}</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
