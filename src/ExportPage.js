import formatDuration from 'date-fns/formatDuration';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useInterval } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';

import BorderLinearProgress from './BorderLinearProgress';
import VideoLoader from './VideoLoader';
import { selectProjectName } from './app/projectSlice';
import useQuery from './hooks/useQuery';

const roll = 'https://dreg-bucket.s3.amazonaws.com/roll.mp4';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  body: {
    marginBottom: theme.spacing(4),
  },
  container: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(6),
    flexGrow: 1,
  },
  projectNameLabel: {
    fontWeight: theme.typography.fontWeightBold,
  },
  video: {
    display: 'block',
    width: '100%',
    aspectRatio: '16 / 9',
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
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={6}>
          <Typography className={classes.title} variant="h5">
            Your Video is {isDone ? 'Ready to Download!' : 'Rendering'}
          </Typography>
          <Typography className={classes.body}>
            You can wait on this page until your video is finished encoding, or
            you can leave and we’ll notify you when your video is ready to be
            downloaded. All of your exports can be found on the My Projects
            page.
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Resolution</TableCell>
                  <TableCell>File Size</TableCell>
                  <TableCell>Time Remaining</TableCell>
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
          <Box my={4}>
            {isDone ? (
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                href={roll}
                download="roll.mp4"
                ref={downloadButtonRef}
                endIcon={<GetAppIcon />}
              >
                Download Video
              </Button>
            ) : (
              <BorderLinearProgress variant="determinate" value={progress} />
            )}
          </Box>
        </Grid>
        <Grid item xs={6}>
          {isDone ? (
            <video className={classes.video} controls autoPlay>
              <source src={roll} type="video/mp4" />
            </video>
          ) : (
            <VideoLoader />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
