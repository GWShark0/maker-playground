import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: 300,

    backgroundColor: theme.palette.grey[900],
    gridArea: 'timeline',
  },
}));

export default function Timeline() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
