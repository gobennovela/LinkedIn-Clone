import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core'

function HeaderOption({Icon, title, avatar, onClick}) {
    return (
        <div onClick={onClick} className="HeaderOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && (<Avatar src={avatar} className="headerOption__icon"/> )}
            <h3 className="headeroption__title">{title}</h3>
        </div>
    );
}

export default HeaderOption
