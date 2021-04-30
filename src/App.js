import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MainContent from './components/MainContent';
import MainDrawer from './components/MainDrawer';
import MainSidebar from './components/MainSidebar';
import AppBar from './components/AppBar';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
}));

export default function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [activePanel, setActivePanel] = useState('');

  const openDrawerPanel = (panel) => {
    setOpen(true);
    setActivePanel(panel);
  };

  const closeDrawer = () => {
    setOpen(false);
    setActivePanel('');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <MainSidebar activePanel={activePanel} onClick={openDrawerPanel} />
      <MainDrawer open={open} onClose={closeDrawer} />
      <MainContent open={open} />
    </div>
  );
}
