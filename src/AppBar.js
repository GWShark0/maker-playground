import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { ReactComponent as MakerLogo } from './assets/maker-logo.svg';

const useStyles = makeStyles({
  exportButton: {
    marginLeft: 'auto',
  },
});

export default function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar position="relative">
        <Toolbar>
          <MakerLogo width="32px" height="32px" />
          <Button className={classes.exportButton} color="inherit">
            Export
          </Button>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
