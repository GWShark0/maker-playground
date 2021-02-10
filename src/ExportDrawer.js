import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

import ResolutionRadioGroup from './ResolutionRadioGroup';
import { renameProject, selectProjectName } from './app/projectSlice';
import { closeExportDrawer } from './app/uiSlice';
import ProjectNameInput from './ProjectNameInput';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    width: 400,
    height: '100%',
  },
  projectNameInput: {
    marginBottom: theme.spacing(3),
  },
}));

export default function ExportDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.isExportDrawerOpen);
  const projectName = useSelector(selectProjectName);

  const [resolution, setResolution] = useState('1080p');

  const handleClose = () => {
    dispatch(closeExportDrawer());
  };

  const handleProjectNameChange = (value) => {
    dispatch(renameProject(value));
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <form className={classes.drawer} action="/export">
        <div>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Export Preferences
          </Typography>
          <ProjectNameInput
            value={projectName}
            onChange={handleProjectNameChange}
          />
          <ResolutionRadioGroup value={resolution} onChange={setResolution} />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Export
        </Button>
      </form>
    </Drawer>
  );
}
