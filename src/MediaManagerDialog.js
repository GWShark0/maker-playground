import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import stockItems from './stockItems';
import Search from './Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    justifyContent: 'space-between',
  },
  itemWrapper: {
    marginTop: theme.spacing(2),
    '& > * + *': {
      marginLeft: theme.spacing(1.5),
    },
  },
  mediaItem: {
    width: 128,
    height: 128,
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
  },
}));

export default function MediaManagerDialog(props) {
  const { open, onClose } = props;
  const classes = useStyles();
  const [mediaType, setMediaType] = useState(props.mediaType);
  const [searchQuery, setSearchQuery] = useState(props.searchQuery);
  const [tab, setTab] = useState(props.tab);

  const items = stockItems.filter((item) =>
    item.name.includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setMediaType(props.mediaType);
    setSearchQuery(props.searchQuery);
    setTab(props.tab);
  }, [props.mediaType, props.searchQuery, props.tab]);

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };

  const handleMediaButtonGroupChange = (event, newMediaType) => {
    setMediaType(newMediaType);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <Dialog
      className={classes.root}
      fullScreen
      open={open}
      onEscapeKeyDown={() => onClose()}
    >
      <AppBar position="relative" color="default">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Media Manager</Typography>
          <IconButton color="inherit" onClick={() => onClose()}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          aria-label="simple tabs example"
          color="primary"
        >
          <Tab label="Stock" {...a11yProps(0)} />
          <Tab label="Uploads" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <Typography variant="h4" gutterBottom>
          Stock
        </Typography>
        <ToggleButtonGroup
          value={mediaType}
          exclusive
          onChange={handleMediaButtonGroupChange}
          aria-label="media-type"
        >
          <ToggleButton value="video" aria-label="video">
            <VideoLibraryIcon />
          </ToggleButton>
          <ToggleButton value="audio" aria-label="audio">
            <LibraryMusicIcon />
          </ToggleButton>
          <ToggleButton value="images" aria-label="images">
            <PhotoLibraryIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Box mt={2}>
          <Search onChange={handleSearchChange} value={searchQuery} />
        </Box>
        <div className={classes.itemWrapper}>
          {items.map((item) => (
            <img
              className={classes.mediaItem}
              src={item.src}
              key={item.name}
              onClick={() => {
                console.log('clicked:', item.name);
              }}
              alt={item.name}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Typography variant="h4" gutterBottom>
          Uploads
        </Typography>
        <ToggleButtonGroup
          value={mediaType}
          exclusive
          onChange={handleMediaButtonGroupChange}
          aria-label="media-type"
        >
          <ToggleButton value="video" aria-label="video">
            <VideoLibraryIcon />
          </ToggleButton>
          <ToggleButton value="audio" aria-label="audio">
            <LibraryMusicIcon />
          </ToggleButton>
          <ToggleButton value="images" aria-label="images">
            <PhotoLibraryIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Box mt={2}>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </Box>
      </TabPanel>
    </Dialog>
  );
}

MediaManagerDialog.defaultProps = {
  open: false,
  mediaType: 'video',
  searchQuery: '',
  tab: 0,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
