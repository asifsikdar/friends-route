import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { Id } = useParams();
    const [Friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${Id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h3>This is Friend Details page {Id}</h3>
            <h3>Name : {Friend.name}</h3>
            <h4>Email : {Friend.email}</h4>
            <h5>Website : {Friend.website }</h5>
        </div>
    );
};

export default FriendDetails;