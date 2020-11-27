import React from 'react'

export default function Prototype({type}) {
    const images = {

    };
    return <div style={{marginBottom: '24px'}}><img width='100%' src={images[type]}/></div>
}