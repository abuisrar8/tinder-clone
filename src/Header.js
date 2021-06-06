import React from 'react'
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton><AccountCircleIcon 
            className="header__icon"
            fontSize="large"/></IconButton>

            <img 
            className="header__logo"
            src="https://firebasestorage.googleapis.com/v0/b/tinder-clone-9522d.appspot.com/o/Logo.png?alt=media&token=43566f40-6051-402a-90e0-4bda1775360b
            "/>

            <IconButton><ForumIcon
            className="header__icon"
            fontSize="large"/></IconButton>




            
        </div>
    )
}

export default Header
