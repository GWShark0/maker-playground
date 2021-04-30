import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1, 0.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    appearance: 'none',
    cursor: 'pointer',
    color: 'inherit',
    outline: 0,
    transitionProperty: 'color',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
  buttonActive: {
    color: theme.palette.secondary.dark,
  },
  icon: {
    paddingBottom: theme.spacing(0.5),
  },
}));

export default function SidebarButton(props) {
  const { active, children, icon, ...rest } = props;
  const classes = useStyles();

  return (
    <button
      className={clsx(classes.button, { [classes.buttonActive]: active })}
      {...rest}
    >
      <SvgIcon className={classes.icon} component={icon} />
      {children}
    </button>
  );
}
