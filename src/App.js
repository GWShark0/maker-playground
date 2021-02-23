import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import AppBar from './AppBar';
import EditorPage from './EditorPage';
import ExportDrawer from './ExportDrawer';
import ExportPage from './ExportPage';
import LeftDrawer from './LeftDrawer';
import MediaManagerDialog from './MediaManagerDialog';
import TrimDialog from './TrimDialog';
import UploadDialog from './UploadDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 240,
  },
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MediaManagerDialog onClose={handleClose} />
      <TrimDialog onClose={handleClose} />
      <UploadDialog onClose={handleClose} />
      <Router>
        <AppBar />
        <Switch>
          <Route path="/editor">
            <main className={classes.content}>
              <Toolbar />
              <LeftDrawer />
              <EditorPage />
            </main>
          </Route>
          <Route path="/export">
            <main className={classes.content}>
              <Toolbar />
              <ExportPage />
            </main>
          </Route>
          <Route exact path="/">
            <Redirect to="/editor" />
          </Route>
        </Switch>
        <ExportDrawer />
      </Router>
    </div>
  );
}
