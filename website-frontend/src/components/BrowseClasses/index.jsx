import AppClass from "../AppClass";
import {Container, CssBaseline, Grid} from '@mui/material';


function BrowseClasses() {
    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <CssBaseline/>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <AppClass />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default BrowseClasses;    