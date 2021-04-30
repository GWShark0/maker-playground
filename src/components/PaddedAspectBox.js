import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  box: {
    position: 'relative',
    height: 0,
  },
  inner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default function PaddedAspectBox(props) {
  const { aspectRatio, children, ...rest } = props;
  const classes = useStyles();
  const paddingBottom = `${(1 / aspectRatio) * 100}%`;
  const style = { paddingBottom };
  return (
    <div className={classes.box} style={style} {...rest}>
      <div className={classes.inner}>{children}</div>
    </div>
  );
}

PaddedAspectBox.propTypes = {
  aspectRatio: PropTypes.number,
};

PaddedAspectBox.defaultProps = {
  aspectRatio: 1,
};
