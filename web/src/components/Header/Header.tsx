import React, { FC } from 'react';
import style from './Header.module.scss';

interface Props {};

const Header: FC<Props> = () => {
    return (
        <div className={style.header}>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Shop</a>
                </li>
                <li>
                    <a>Sale</a>
                </li>
                <li>
                    <a>Features</a>
                </li>
                <li>
                    <a>Blog</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
