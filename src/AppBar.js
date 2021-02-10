import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import { ReactComponent as MakerLogo } from './assets/maker-logo.svg';
import { openExportDrawer } from './features/uiSlice';

const useStyles = makeStyles({
  exportButton: {
    marginLeft: 'auto',
  },
});

export default function AppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const isEditorPath = location.pathname === '/editor';

  const handleClick = () => {
    dispatch(openExportDrawer());
  };

  return (
    <div className={classes.root}>
      <MuiAppBar position="relative">
        <Toolbar>
          <Link to="/editor">
            <MakerLogo width="32px" height="32px" />
          </Link>
          {isEditorPath && (
            <Button
              className={classes.exportButton}
              color="inherit"
              onClick={handleClick}
            >
              Export
            </Button>
          )}
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
