import {Card, CardActions, CardContent, Typography, Button} from '@mui/material';

function AppClass() {
    return (
        <>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4" paddingY={2}>Class Title</Typography>
                    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eos a veritatis consequatur, aliquam deleniti, eveniet natus reiciendis aspernatur dolor ea facere fugiat sit quod molestiae at officia perferendis soluta.</Typography>
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