import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MainContent from './components/MainContent';
import MainDrawer from './components/MainDrawer';
import MainSidebar from './components/MainSidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
}));

export default function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainSidebar open={open} toggleDrawer={toggleDrawer} />
      <MainDrawer open={open} />
      <MainContent open={open} />
    </div>
  );
}
