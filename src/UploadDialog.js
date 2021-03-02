import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    padding: theme.spacing(4),
  },
  uploadBox: {
    borderWidth: 4,
    borderStyle: 'dashed',
    borderColor: theme.palette.grey[300],
    aspectRatio: '16 / 9',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    color: theme.palette.grey[700],
  },
  uploadIcon: {
    marginBottom: theme.spacing(1),
  },
}));

export default function UploadDialog(props) {
  const { onClose, open } = props;
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      fullWidth
      open={open}
      onClose={onClose}
    >
      <div className={classes.uploadBox}>
        <PublishRoundedIcon className={classes.uploadIcon} fontSize="large" />
        <div>Upload Files Here</div>
      </div>
    </Dialog>
  );
}
