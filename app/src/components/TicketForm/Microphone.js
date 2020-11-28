import React, {useState, useEffect} from 'react'
import { Button, CircularProgress } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';

import { ReactMic } from 'react-mic';

export default function Microphone({onRecord}) {
    const [record, setRecord] = useState(false);
    const [inProgress, setInProgress] = useState(false);

    const onData = (recordedBlob) => {

    };

    const onStop = (recordedBlob) => {
        setInProgress(true);
        const formData = new FormData();
        formData.append('audio', recordedBlob.blob);
        fetch(process.env.REACT_APP_API_URL+"/tts", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.text) {
                        onRecord(result.text)
                    } else {
                        alert('Команда не распознана');
                    }
                    setInProgress(false);
                },
                (error) => {
                    alert(error);
                    setInProgress(false);
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
        <Button className="rounded" onClick={() => setRecord(!record)} variant={record ? "contained" : "outlined"}>
            {inProgress ? <CircularProgress style={{height: '17px'}}/> : <MicNone/>}
        </Button>
    </React.Fragment>
}