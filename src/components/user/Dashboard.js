import React from 'react';
import {useSelector} from 'react-redux';

function Dashboard() {
    const user = useSelector(state => state.userAuth)
    return (
        <h1>{user.user}</h1>
    )
}

export default Dashboard