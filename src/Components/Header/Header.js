import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <nav>
                    <a href='/'>Home</a>
                    <a href='/'>Rooms</a>
                    <a href='/'>About</a>
                    <a href='/'>Help</a>
                </nav>
            </div>
        );
    }
}