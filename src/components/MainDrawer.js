import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { SIDEBAR_WIDTH } from './MainSidebar';

export const DRAWER_WIDTH = 320;

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
  drawerPaper: {
    left: SIDEBAR_WIDTH,
    width: DRAWER_WIDTH,
    backgroundColor: theme.palette.background.default,
  },
}));

export default function MainDrawer(props) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant="persistent"
      anchor="left"
      {...props}
    >
      asfdad
    </Drawer>
  );
}
