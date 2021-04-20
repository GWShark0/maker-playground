import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { ReactComponent as MakerLogo } from '../assets/maker-logo.svg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 2,
    backgroundColor: theme.palette.pink[500],
  },
}));

export default function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar>
          <MakerLogo width="32px" height="32px" />
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
