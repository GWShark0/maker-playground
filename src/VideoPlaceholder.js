import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    maxWidth: 900,
    aspectRatio: '16 / 9',
    backgroundColor: theme.palette.grey[400],
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function VideoPlaceholder() {
  const classes = useStyles();
  return <div className={classes.container}></div>;
}
