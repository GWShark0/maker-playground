import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { selectProjectName } from './app/projectSlice';
import { openExportDrawer } from './app/uiSlice';
import { ReactComponent as MakerLogo } from './assets/maker-logo.svg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  exportButton: {
    marginLeft: 'auto',
  },
  projectName: {
    marginLeft: theme.spacing(2),
  },
}));

export default function AppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const projectName = useSelector(selectProjectName);

  const isEditorPath = location.pathname === '/editor';

  const handleClick = () => {
    dispatch(openExportDrawer());
  };

  return (
    <div className={classes.root}>
      <MuiAppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/editor">
            <MakerLogo width="32px" height="32px" />
          </Link>
          <Typography className={classes.projectName}>{projectName}</Typography>
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
