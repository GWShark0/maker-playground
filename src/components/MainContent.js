import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Stage from './Stage';
import Timeline from './Timeline';

import { DRAWER_WIDTH } from './MainDrawer';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -DRAWER_WIDTH,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  editor: {
    flexGrow: 1,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 300px',
    gap: '0px 0px',
    gridTemplateAreas: '"stage" "timeline"',
  },
}));

export default function MainContent(props) {
  const classes = useStyles();
  const { open } = props;

  return (
    <main className={clsx(classes.content, { [classes.contentShift]: open })}>
      <Toolbar />
      <div className={classes.editor}>
        <Stage />
        <Timeline />
      </div>
    </main>
  );
}