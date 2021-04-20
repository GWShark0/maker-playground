import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';

import { ReactComponent as Bump } from '../assets/bump.svg';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'absolute',
    top: 64,
    right: 0,
    bottom: 0,
    margin: 'auto',
    padding: 0,
    width: theme.spacing(3),
    height: theme.spacing(16),
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    appearance: 'none',
    transform: 'translateX(calc(100% - 7px))',
  },
  bump: {
    width: '100%',
    height: '100%',
    fill: theme.palette.background.default,
  },
  chevron: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
  },
}));

export default function DrawerCloseBump(props) {
  const { open, onClick } = props;
  const classes = useStyles();

  return (
    <Fade in={open}>
      <button className={classes.button} onClick={onClick}>
        <Bump className={classes.bump} />
        <ChevronLeftRoundedIcon className={classes.chevron} />
      </button>
    </Fade>
  );
}
