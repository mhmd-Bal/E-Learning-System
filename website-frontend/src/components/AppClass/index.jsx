import {Card, CardActions, CardContent, Typography, Button,TextField, Tooltip, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from "axios";


function AppClass(props) {
    const [enrolled, setEnrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/class/check_if_enrolled', {
            class_id: props.class_id
        }, {
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'bearer ' + token
          }
        })
        .then(response => {
            console.log(response);
            if(response.data.length >= 1){
                setEnrolled(true);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }, [])
    

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
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

    const handleRequestForm = () => {
        if(enrolled){
            axios.post('http://127.0.0.1:8000/form/request', {
                class_id: props.class_id,
                form_content: value
            }, {
              headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + token
              }
            })
            .then(response => {
                setOpen(false);
                console.log(response);
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
                <Button variant='contained' size="small" onClick={enrolled ? handleClickOpen : handleEnrollInCourse}>{ enrolled ? "Drop Out" : "Enroll"  }</Button>
                <Tooltip title="There is no File at the moment" arrow>
                    <span style={{paddingLeft: 10}}>
                        <Button variant='outlined' disabled size="small">Download Document</Button>
                    </span>
                </Tooltip>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Withdrawal Form</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            What is your reason for withdrawing from the course ?
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Reason"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleRequestForm}>Send For Review</Button>
                    </DialogActions>
                </Dialog>
            </CardActions>
        </Card>
    );
}

export default AppClass;    