import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    flex: 1,
    width: '100%',
    maxWidth: 900,
    aspectRatio: '16 / 9',
    backgroundColor: theme.palette.grey[900],
    borderRadius: theme.shape.borderRadius,
  },
  progress: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
  },
}));

export default function VideoLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        className={classes.progress}
        color="secondary"
        size={64}
      />
    </div>
  );
}
