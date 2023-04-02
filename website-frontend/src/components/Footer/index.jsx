import { AppBar, Typography, Button, Box, Toolbar, Stack } from '@mui/material';

function AppFooter() {
    return (
        <>
            <AppBar position='relative' color='transparent'>
                <Toolbar>
                    <Stack direction="column" spacing={1}>
                        <Stack direction="row" spacing={2}>
                            <Button></Button>
                            <Button></Button>
                            <Button></Button>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Button></Button>
                            <Button></Button>
                            <Button></Button>
                        </Stack>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>E-learning System @ 2023</Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default AppFooter;