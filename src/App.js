import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './AppBar';
import EditorPage from './EditorPage';
import ExportDrawer from './ExportDrawer';
import ExportPage from './ExportPage';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <AppBar />
        <Switch>
          <Route path="/editor">
            <EditorPage />
          </Route>
          <Route path="/export">
            <ExportPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/editor" />
          </Route>
        </Switch>
        <ExportDrawer />
      </Router>
    </>
  );
}
