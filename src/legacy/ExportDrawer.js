import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

import ResolutionToggle from './ResolutionToggle';
import { renameProject, selectProjectName } from './app/projectSlice';
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

export default function ExportDrawer(props) {
  const { open, onClose } = props;
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const projectName = useSelector(selectProjectName);

  const [resolution, setResolution] = useState(props.resolution);

  useEffect(() => {
    setResolution(props.resolution);
  }, [props.resolution]);

  const handleProjectNameChange = (value) => {
    dispatch(renameProject(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = queryString.stringify({ resolution });
    history.push(`/export?${query}`);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <form className={classes.drawer} onSubmit={handleSubmit}>
        <div>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Export Preferences
          </Typography>
          <ProjectNameInput
            value={projectName}
            onChange={handleProjectNameChange}
          />
          <ResolutionToggle value={resolution} onChange={setResolution} />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Export
        </Button>
      </form>
    </Drawer>
  );
}

ExportDrawer.defaultProps = {
  resolution: '480p',
};
