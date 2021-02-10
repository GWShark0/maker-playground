import formatDuration from 'date-fns/formatDuration';
import { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useInterval } from 'react-use';
import {
  Box,
  Button,
  Container,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import useQuery from './hooks/useQuery';

const roll = 'https://dreg-bucket.s3.amazonaws.com/roll.mp4';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 40,
  },
  video: {
    maxWidth: 800,
    margin: 'auto',
    display: 'block',
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 36,
    borderRadius: 18,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 18,
    backgroundColor: theme.palette.secondary.main,
  },
}))(LinearProgress);

export default function ExportPage() {
  const classes = useStyles();
  const downloadButtonRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [isDone, setIsDone] = useState(false);

  const query = useQuery();
  const resolution = query.get('resolution');

  const duration = formatDuration({ seconds: secondsLeft });

  // fake it 'till you make it
  useInterval(
    () => {
      const newProgress = progress + 10;
      if (newProgress >= 100) {
        setIsDone(true);
      }
      setProgress(newProgress);
      setSecondsLeft(secondsLeft - 1);
    },
    isDone ? null : 1000
  );

  useEffect(() => {
    if (isDone) {
      downloadButtonRef.current.click();
    }
  }, [isDone]);

  if (!resolution) {
    return <Redirect to="/editor" />;
  }

  return (
    <Container className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Your Video is {isDone ? 'Done!' : 'Rendering...'}
      </Typography>

      {isDone && (
        <video className={classes.video} autoPlay controls>
          <source src={roll} type="video/mp4" />
        </video>
      )}

      <Box my={4}>
        {isDone ? (
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            href={roll}
            download="roll.mp4"
            ref={downloadButtonRef}
          >
            Download Video
          </Button>
        ) : (
          <BorderLinearProgress variant="determinate" value={progress} />
        )}
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Resolution</TableCell>
              <TableCell>Estimated File Size</TableCell>
              <TableCell>Estimated Time Remaining</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {resolution}
              </TableCell>
              <TableCell>50 Mb</TableCell>
              <TableCell>{secondsLeft > 0 ? duration : 'Done'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
