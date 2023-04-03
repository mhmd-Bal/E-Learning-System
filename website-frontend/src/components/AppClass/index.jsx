import {Card, CardActions, CardContent, Typography, Button} from '@mui/material';

function AppClass(props) {
    return (
        <>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4" paddingY={2}>{props.class_name}</Typography>
                    <Typography>{props.class_description}</Typography>
                </CardContent>
                <CardActions sx={{ paddingBottom: 3}}>
                    <Button variant='contained' size="small">Enroll</Button>
                    <Button variant='outlined' disabled size="small">Download Document</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default AppClass;    