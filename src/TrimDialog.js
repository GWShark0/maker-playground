import { useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import { closeAll } from './app/uiSlice';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    padding: theme.spacing(4),
  },
  dialogActions: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: 'space-between',
  },
  preview: {
    display: 'flex',
    width: '100%',
    aspectRatio: '16 / 9',
    backgroundColor: theme.palette.grey[500],
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  bar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    height: 48,
    backgroundColor: theme.palette.grey[700],
    borderRadius: theme.shape.borderRadius,
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 48,
  },
}));

export default function TrimDialog(props) {
  const { item, onClose, open } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const { name, src } = item;

  const handleCancel = () => {
    dispatch(closeAll());
  };

  const handleConfirm = () => {
    dispatch(closeAll());
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle onClose={handleCancel}>Trim</DialogTitle>
      <DialogContent className={classes.dialogContent} dividers>
        <div className={classes.preview}>
          {src && <img src={src} alt={name} />}
        </div>
        <div className={classes.bar} />
        <div className={classes.controls}>
          <FastRewindRoundedIcon fontSize="inherit" />
          <PlayArrowRoundedIcon fontSize="inherit" />
          <FastForwardRoundedIcon fontSize="inherit" />
        </div>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button color="default" onClick={onClose}>
          Back
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

TrimDialog.defaultProps = {
  item: {},
  open: false,
};
