import formatDuration from 'date-fns/formatDuration';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useInterval } from 'react-use';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import BorderLinearProgress from './BorderLinearProgress';
import { selectProjectName } from './app/projectSlice';
import useQuery from './hooks/useQuery';

const roll = 'https://dreg-bucket.s3.amazonaws.com/roll.mp4';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  body: {
    marginBottom: theme.spacing(4),
  },
  container: {
    padding: theme.spacing(4),
  },
  projectNameLabel: {
    fontWeight: theme.typography.fontWeightBold,
  },
  video: {
    width: 600,
    margin: 'auto',
    display: 'block',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  },
}));

export default function ExportPage() {
  const classes = useStyles();
  const downloadButtonRef = useRef(null);
  const projectName = useSelector(selectProjectName);

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
      <Typography className={classes.title} variant="h5" gutterBottom>
        Your Video is Rendering
      </Typography>
      <Typography className={classes.body}>
        You can wait on this page until your video is finished encoding, or you
        can leave and we’ll notify you when your video is ready to be
        downloaded. All of your exports can be found on the My Projects page.
      </Typography>

      {isDone && (
        <video className={classes.video} controls autoPlay>
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
              <TableCell>Project Name</TableCell>
              <TableCell>Resolution</TableCell>
              <TableCell>Estimated File Size</TableCell>
              <TableCell>Estimated Time Remaining</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{projectName}</TableCell>
              <TableCell>{resolution}</TableCell>
              <TableCell>21 MB</TableCell>
              <TableCell>{secondsLeft > 0 ? duration : 'Done'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
