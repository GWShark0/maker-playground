import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  projectNameInput: {
    marginBottom: theme.spacing(3),
  },
}));

export default function ProjectNameInput(props) {
  const { value, onChange } = props;
  const classes = useStyles();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      id="project-name"
      className={classes.projectNameInput}
      label="Project Name"
      variant="outlined"
      fullWidth
      value={value}
      onChange={handleChange}
    />
  );
}
