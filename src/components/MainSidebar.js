import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const SIDEBAR_WIDTH = 72;

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
    width: SIDEBAR_WIDTH,
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function MainSidebar(props) {
  const { open, toggleDrawer } = props;
  const classes = useStyles();

  return (
    <aside className={classes.sidebar}>
      <IconButton color="inherit" onClick={toggleDrawer}>
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </aside>
  );
}
