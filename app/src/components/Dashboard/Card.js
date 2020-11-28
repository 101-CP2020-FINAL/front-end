import React from 'react'
import { Typography, Container, Paper, Button, Select, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, TextareaAutosize, Input, MenuItem} from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons'
import {getClass} from '../TicketForm/TicketForm'

const getStatusClass = (alias) => {
    switch (alias) {
        case 'danger':
            return "danger";
        case 'toread':
            return "warning";
        case 'done':
            return "success";
        default:
            return "info";
    }
}

export default function Card({item}) {
    const className = getClass(item.priority.weight);
    return <Paper className={"card "+className}>
        <Typography className="flex" variant="h3"><Priority priority={item.priority}/>{item.title}</Typography>
        <Status status={className === "danger" ? {...item.status, alias: className} : item.status}/>
    </Paper>
}

function Priority({priority}) {
    return <div className={"priority " + (getClass(priority.weight))}>
        <ArrowUpward/>
    </div>
}

function Status({status}) {
    return <div className={"status " + (getStatusClass(status.alias))}>
        {status.title}
    </div>
}