import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles({
  formControl: {
    display: 'block',
  },
});

export default function ResolutionRadioGroup(props) {
  const classes = useStyles();
  const { value = '1080p', onChange } = props;

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl className={classes.formControl} component="fieldset">
      <FormLabel component="legend">Resolution</FormLabel>
      <RadioGroup
        aria-label="resolution"
        name="resolution"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="1080p" control={<Radio />} label="1080p" />
        <FormControlLabel value="720p" control={<Radio />} label="720p" />
        <FormControlLabel value="480p" control={<Radio />} label="480p" />
      </RadioGroup>
    </FormControl>
  );
}
