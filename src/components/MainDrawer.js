import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

import DrawerCloseBump from './DrawerCloseBump';

import { SIDEBAR_WIDTH } from './MainSidebar';
export const DRAWER_WIDTH = 320;

const useStyles = makeStyles((theme) => ({
  drawer: {
    position: 'relative',
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
  drawerPaper: {
    left: SIDEBAR_WIDTH,
    width: DRAWER_WIDTH,
    backgroundColor: theme.palette.background.default,
    overflowY: 'initial',
  },
}));

export default function MainDrawer(props) {
  const { onClose, open } = props;
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant="persistent"
      anchor="left"
      open={open}
      {...props}
    >
      <Toolbar />
      <DrawerCloseBump open={open} onClick={() => onClose()} />
    </Drawer>
  );
}
