import React, { memo, useState, useMemo, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { google_client_id } from '../config/config';
import * as queryString from 'query-string';
import './styles/login.css';
import { init } from '../actions/auth';

const Login = (props) => {
    const [isApplicant, setIsApplicant] = useState(true)
    const history = useHistory()
    const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn)

    if(isLoggedIn){
        history.replace("/")
    }

    // // useEffect(() => {
    //     console.log(isLoggedIn)
    //     if(isLoggedIn){
    //         history.replace("/")
    //     }
    // // },[])

    const googleLoginURL = useMemo(() => {
        const stringifiedParams = queryString.stringify({
            client_id: google_client_id,
            redirect_uri: 'http://localhost:3000/auth',
            scope: [
              'https://www.googleapis.com/auth/userinfo.email',
              'https://www.googleapis.com/auth/userinfo.profile',
            ].join(' '),
            response_type: 'code',
            access_type: 'offline',
            prompt: 'consent',
        });

        return `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
    },[])

    return (
        <>
            <h1>I am an...</h1>
            <div>
                {isApplicant ? 
                    <a href={googleLoginURL} >Google LOGIN</a>
                :
                    <input />
                }
            </div>
        </>
    )
}

export default memo(Login)