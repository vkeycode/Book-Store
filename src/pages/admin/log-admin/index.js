import React, { useEffect, useRef, useState } from 'react'
import Style from './style.module.scss'
import Admin from '../../../assets/admin.png'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../../context/use-user-auth';
import Button from '../../../components/button';
import Input from '../../../components/input'
import { useData } from '../../../context/use-data';


const LogAdmin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { mode } = useData()
    const { signIn, currentUser } = useUserAuth()
    let emailRef = useRef()
    let navigate = useNavigate()

    const KeyDown = (event) => {
        if (event.key === "Enter") {
            handleClick()
        }
    }

    let passwordRef = useRef()
    const handleClick = () => {
        signIn(emailRef.current.value, passwordRef.current.value)
    }

    useEffect(() => {
        if (!!currentUser) {
            navigate('/')

        }
        console.log(!currentUser);
    }, [])

    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.content + " " + mode} >
                <img src={Admin} ></img>
                <h5>Book Store Admin</h5>
                <Input
                    useRef={emailRef}
                    value={email}
                    setValue={setEmail}
                    title="E-mail"
                    type="email"
                    name="login"
                    onKeyDown={KeyDown}
                />
                <Input
                    useRef={passwordRef}
                    value={password}
                    setValue={setPassword}
                    title="Password"
                    type="password"
                    name="login"
                    onKeyDown={KeyDown}
                />
                <Button
                    click={handleClick}
                    title="Login"
                />
            </div>
        </div>
    )
}

export default LogAdmin