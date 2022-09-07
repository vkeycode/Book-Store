import React from 'react'
import Style from './style.module.scss'

const Button = (props) => {
    return (
        <div className={Style.container}>
            <button onClick={props.click}>{props.title}</button>
        </div>
    )
}

export default Button