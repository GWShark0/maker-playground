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
import ExportPage from './ExportPage';
import LeftDrawer from './LeftDrawer';
import UIContainer from './UIContainer';

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

  return (
    <div className={classes.root}>
      <CssBaseline />
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
        <UIContainer />
      </Router>
    </div>
  );
}
