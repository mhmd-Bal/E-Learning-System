import AppClass from "../AppClass";
import {Container, CssBaseline, Grid} from '@mui/material';
import { useEffect } from "react";
import { useState } from 'react';
import axios from "axios";

function BrowseClasses() {
    const [courses, setCourses] = useState([]);

    const token = localStorage.getItem("token");

    useEffect( () => {
        axios.get('http://127.0.0.1:8000/class', {
            headers: {
              'content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'bearer ' + token
          }
          })
            .then( response => {
                setCourses(response.data);
            })
            .catch(error => {
              console.log(error);
            });
    }, [])
    
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <CssBaseline/>
            <Grid container spacing={4}>
                {courses.map((element) =>{
                    return(
                        <Grid item xs={12} sm={6} md={4}>
                            <AppClass class_description={element.class_description} class_name={element.class_name} class_id={element._id} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
}

export default BrowseClasses;    