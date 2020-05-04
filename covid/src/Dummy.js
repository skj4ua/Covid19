import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
   margin:'10px',
   width:'auto',
  },
  heading: {
    
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Dummy({dummy}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{dummy.Country}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography variant="h6"><b>NewConfirmed:</b> {dummy.NewConfirmed}</Typography>
            <Typography variant="h6"><b>TotalConfirmed:</b> {dummy.TotalConfirmed} </Typography>
            <Typography variant="h6"><b>TotalDeaths:</b> {dummy.TotalDeaths} </Typography>
            <Typography variant="h6"><b>NewRecovered:</b> {dummy.NewRecovered} </Typography>
            <Typography variant="h6"><b>TotalRecovered:</b> {dummy.TotalRecovered}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    
  );
}
