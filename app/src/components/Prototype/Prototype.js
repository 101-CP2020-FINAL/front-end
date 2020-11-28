import React from 'react'

import header from './header@2.png';
import menu from './left_menu@2.png';

export default function Prototype({type, width = '100%'}) {
    const images = {
        header,
        menu
    };
    return <div><img width={width} src={images[type]}/></div>
}