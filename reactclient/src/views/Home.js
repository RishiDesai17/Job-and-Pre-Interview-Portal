import React, { memo, useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/home.css'

const Home = (props) => {
    const [state, setState] = useState()
    const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn, shallowEqual)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Home</h1>
            {console.log("render home")}
            {isLoggedIn === null ? 
                <p>Loading...</p> 
            :
                <div>
                    {isLoggedIn ? 
                        <Link to="/profile">Profile</Link> 
                    : 
                        <Link to="/login">login</Link>
                    }
                </div>
            }
            <p>{JSON.stringify(new Date("2020", "10", "20"))}</p>
            <Link to="/jobs">jobs</Link>
        </div>
    )
}

export default memo(Home)