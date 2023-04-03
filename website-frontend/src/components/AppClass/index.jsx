import {Card, CardActions, CardContent, Typography, Button, Tooltip} from '@mui/material';
import { useState } from 'react';
import axios from "axios";


function AppClass(props) {
    const [enrolled, setEnrolled] = useState(false);
    const token = localStorage.getItem("token");

    const checkIfEnrolled = () => {
        
    }

    const handleEnrollInCourse = () => {
        if(!enrolled){
            axios.post('http://127.0.0.1:8000/class/join', {
                class_id: props.class_id
            }, {
              headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + token
              }
            })
            .then(response => {
                setEnrolled(true)
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h4" paddingY={2}>{props.class_name}</Typography>
                <Typography>{props.class_description}</Typography>
            </CardContent>
            <CardActions sx={{ paddingBottom: 3}}>
                <Button variant='contained' size="small" onClick={handleEnrollInCourse}>{ enrolled ? "Drop Out" : "Enroll"  }</Button>
                <Tooltip title="There is no File at the moment" arrow>
                    <span style={{paddingLeft: 10}}>
                        <Button variant='outlined' disabled size="small">Download Document</Button>
                    </span>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default AppClass;    