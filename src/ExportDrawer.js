import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

import ResolutionRadioGroup from './ResolutionRadioGroup';
import { closeExportDrawer } from './features/uiSlice';

const useStyles = makeStyles({
  title: {
    marginBottom: 32,
    fontWeight: 700,
  },
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 32,
    width: 400,
    height: '100%',
  },
});

export default function ExportDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.isExportDrawerOpen);

  const [resolution, setResolution] = useState('1080p');

  const onClose = () => {
    dispatch(closeExportDrawer());
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <form className={classes.drawer} action="/export">
        <div>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Export Preferences
          </Typography>
          <ResolutionRadioGroup value={resolution} onChange={setResolution} />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Export
        </Button>
      </form>
    </Drawer>
  );
}
