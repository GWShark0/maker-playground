import { makeStyles } from '@material-ui/core/styles';

import useResizeObserver from 'use-resize-observer';

import birb from '../assets/birb.jpg';

const TOOLBAR_HEIGHT = 40;
const CONTROLS_HEIGHT = 40;

const useStyles = makeStyles((theme) => ({
  root: {
    gridArea: 'stage',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',
    backgroundColor: theme.palette.grey[800],
  },
  toolbar: {
    height: TOOLBAR_HEIGHT,
  },
  preview: {
    margin: 'auto',
    objectFit: 'cover',
  },
  controls: {
    height: CONTROLS_HEIGHT,
  },
}));

export default function Stage() {
  const classes = useStyles();
  const { ref, height = 1 } = useResizeObserver();

  const previewHeight = height - TOOLBAR_HEIGHT - CONTROLS_HEIGHT;

  const style = {
    height: previewHeight,
    width: previewHeight * (16 / 9),
  };

  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.toolbar} />
      <img className={classes.preview} style={style} src={birb} alt="" />
      <div className={classes.controls} />
    </div>
  );
}
