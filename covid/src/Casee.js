import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(18),
      },
    },
  }));

export default function Casee({casee}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Paper elevation={3} className="casee ">
        <div >
            <Typography variant="h6"><b>Country:</b> {casee.Country}</Typography>
            <Typography variant="h6"><b>NewConfirmed:</b> {casee.NewConfirmed}</Typography>
            <Typography variant="h6"><b>TotalConfirmed:</b> {casee.TotalConfirmed} </Typography>
            <Typography variant="h6"><b>TotalDeaths:</b> {casee.TotalDeaths} </Typography>
            <Typography variant="h6"><b>NewRecovered:</b> {casee.NewRecovered} </Typography>
            <Typography variant="h6"><b>TotalRecovered:</b> {casee.TotalRecovered}</Typography>
        </div>
        </Paper>
        </div>
    )
}

