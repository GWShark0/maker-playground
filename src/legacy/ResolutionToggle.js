import { makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  toggleButtonGroup: {
    display: 'flex',
  },
  toggleButton: {
    flex: 1,
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    borderWidth: 2,
    textTransform: 'initial',
    '&&.Mui-selected': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    '&:hover': {
      backgroundColor: 'rgba(15, 135, 255, 0.05)',
    },
  },
}));

export default function ResolutionToggle(props) {
  const classes = useStyles();
  const { value = '480p', onChange } = props;

  const handleChange = (event, value) => {
    onChange(value);
  };

  return (
    <div>
      <Typography id="resolution" gutterBottom>
        Resolution
      </Typography>
      <ToggleButtonGroup
        size="small"
        value={value}
        exclusive
        onChange={handleChange}
        aria-labelledby="resolution"
        className={classes.toggleButtonGroup}
      >
        <ToggleButton
          className={classes.toggleButton}
          value="480p"
          aria-label="480p"
        >
          480p
        </ToggleButton>
        <ToggleButton
          className={classes.toggleButton}
          value="720p"
          aria-label="720p"
        >
          720p
        </ToggleButton>
        <ToggleButton
          className={classes.toggleButton}
          value="1080p"
          aria-label="1080p"
        >
          1080p
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
