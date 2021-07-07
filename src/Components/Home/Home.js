import React from 'react';
import { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';
const Home = () => {
      const [friend, setFriend] = useState([]);
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setFriend(data))
        },[])
    return (
        <div>
            {
                friend.map(friends => <Friends friends = {friends}></Friends>)
            }
        </div>
    );
};

export default Home;