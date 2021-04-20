import { makeStyles } from '@material-ui/core/styles';
import PaddedAspectBox from './PaddedAspectBox';

import birb from '../assets/birb.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // flex: 1,
    backgroundColor: theme.palette.grey[800],
    gridArea: 'stage',
    // height: 300,
  },
  // video: {
  //   aspectRatio: '16/9',
  //   height: '100%',
  //   backgroundColor: 'red',
  // },
  // controls: {
  //   flexShrink: 0,
  //   height: 60,
  //   width: '100%',
  //   backgroundColor: 'blue',
  // },
}));

export default function Stage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <img className={classes.video} src={birb} alt="" />
      <div className={classes.controls}></div> */}
    </div>
  );
}
