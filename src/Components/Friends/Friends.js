import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const { name, email , id } = props.friends;
    const friendStyle = {
        border: '1px solid black',
        marginLeft: '100px',
        margin:'20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style = {friendStyle}>
            <h3>{name}</h3>
            <h6>{email}</h6>
            <Link to={`/Friend/${id}`}><button>Details</button></Link>
        </div>
    );
};

export default Friends;