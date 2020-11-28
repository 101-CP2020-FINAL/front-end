import React, {useState, useEffect} from 'react';
import { Typography, Container, Paper, Button, Select, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, TextareaAutosize, Input, MenuItem} from '@material-ui/core';
import Prototype from '../Prototype/Prototype';
import Card from './Card';
import {Add} from '@material-ui/icons';

export default function Dashboard({goTicket}) {
    const [tickets, setTickets] = useState([]);
    const [centrifugo, setCentrifugo] = useState(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+"/tickets")
            .then(res => res.json())
            .then(
                (result) => {
                    setTickets(result);
                    setCentrifugo(true);
                },
                (error) => {
                    alert(error)
                }
            );
    }, []);

    useEffect(() => {
        if (centrifugo) {
            let centrifuge = new Centrifuge(
                'ws://92.63.103.157:9002/connection/websocket',
                {insecure: true}
            );

            centrifuge.subscribe("public", (message) => {
                let arr = [...tickets, message.data];
                arr.sort(function (a, b) {
                    return a.priority.weight > b.priority.weight ? -1 : 1;
                });
                setTickets(arr);
                setCentrifugo(true);
            });

            centrifuge.connect();
            setCentrifugo(false);
        }
    }, [centrifugo]);

    return <React.Fragment>
        <Typography variant="h1">Дашборд</Typography>
        <div className="dashboard">
            <div className="left">
                {tickets.map((ticket) => <Card key={ticket.id} item={ticket}/>)}
            </div>
            <div className="right">
                <Prototype type="graf"/>
                <Button onClick={goTicket} style={{marginTop: '24px'}} variant="outlined" fullWidth><Add style={{marginRight: '10px'}}/>Добавить задачу</Button>
            </div>
        </div>
    </React.Fragment>
}