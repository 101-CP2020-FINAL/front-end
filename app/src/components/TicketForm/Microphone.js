import React from 'react'
import { Button } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';

export default function Microphone() {
    return <Button className="rounded" variant="outlined"><MicNone/></Button>
}