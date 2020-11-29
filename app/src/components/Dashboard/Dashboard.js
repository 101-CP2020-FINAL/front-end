import React, {useState, useEffect} from 'react';
import { Typography, Container, Paper, Button, Select, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, TextareaAutosize, Input, MenuItem} from '@material-ui/core';
import Prototype from '../Prototype/Prototype';
import Card from './Card';
import {Add} from '@material-ui/icons';

export default function Dashboard({goTicket}) {
    const [tickets, setTickets] = useState([]);
    const [centrifugo, setCentrifugo] = useState(true);

    useEffect(() => {
        let centrifuge = new Centrifuge(
            'wss://soket.final-101-cp2020.ru/connection/websocket',
            {insecure: true}
        );

        centrifuge.subscribe("public", (message) => {
            setCentrifugo(true);
        });

        centrifuge.connect();
        setCentrifugo(false);
    }, []);

    useEffect(() => {
        if (centrifugo) {
            fetch(process.env.REACT_APP_API_URL + "/tickets")
                .then(res => res.json())
                .then(
                    (result) => {
                        setTickets(result.filter((item) => item.status.alias !== 'done'));
                    },
                    (error) => {
                        alert(error)
                    }
                );
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