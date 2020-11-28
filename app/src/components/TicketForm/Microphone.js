import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';

import { ReactMic } from 'react-mic';

export default function Microphone() {
    const [record, setRecord] = useState(false);

    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob);
    };

    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
        const formData = new FormData();
        formData.append('audio', recordedBlob.blob);
        fetch(process.env.REACT_APP_API_URL+"/tts", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    alert(error)
                }
            )
    };

    return  <React.Fragment>
        <ReactMic
            record={record}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
            strokeColor="#000000"
            backgroundColor="#FF4081" />
        <Button className="rounded" onClick={() => setRecord(!record)} variant={record ? "contained" : "outlined"}><MicNone/></Button>
    </React.Fragment>
}