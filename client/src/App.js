import React from 'react';

import { AppBar, Container, Grid, Grow, Typography, Tab, Tabs, 
    TableContainer, Table, TableCell, TableRow, TableHead, 
    TableBody, Paper, Button} from '@material-ui/core'
import TableChartIcon from '@material-ui/icons/TableChart';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';

const App = () => {
    return(
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Trondheim Disc Golf Association</Typography>
                <Tabs centered align="center" aria-label="simple tabs example">
                    <Tab icon={<TableChartIcon/>} label="Item One"/>
                    <Tab icon={<GolfCourseIcon/>} label="Item Two"/>
                </Tabs>
            </AppBar>
            <h1 align="center">Test</h1>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                        <Typography variant="h5">Table</Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Player</TableCell>
                                    <TableCell align="right">Wins</TableCell>
                                    <TableCell align="right">Total Throws</TableCell>
                                    <TableCell align="right">Points</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                    <TableCell component="th" scope="row">Tormod Sjømæling</TableCell>
                                    <TableCell align="right">1</TableCell>
                                    <TableCell align="right">65</TableCell>
                                    <TableCell align="right">7,5</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h5">Add round results:</Typography>
                            <Paper>
                                <form autoComplete="off" noValidate>
                                    <input type="file" name="file"/>
                                </form>
                                <Button variant="contained" color="primary" size="medium" type="submit" fullWidth>Submit</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;