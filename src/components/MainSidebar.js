import { makeStyles } from '@material-ui/core/styles';

import SidebarButton from './SidebarButton';
import { ReactComponent as AudioIcon } from '../assets/icons/audio.svg';
import { ReactComponent as ImageIcon } from '../assets/icons/image.svg';
import { ReactComponent as ShapesIcon } from '../assets/icons/shapes.svg';
import { ReactComponent as TextIcon } from '../assets/icons/text.svg';
import { ReactComponent as UploadIcon } from '../assets/icons/upload.svg';
import { ReactComponent as VideoIcon } from '../assets/icons/video.svg';
import { Toolbar } from '@material-ui/core';

export const SIDEBAR_WIDTH = 72;

export const UPLOADS_PANEL = 'UPLOADS_PANEL';
export const VIDEO_PANEL = 'VIDEO_PANEL';
export const IMAGE_PANEL = 'IMAGE_PANEL';
export const AUDIO_PANEL = 'AUDIO_PANEL';
export const TEXT_PANEL = 'TEXT_PANEL';
export const SHAPES_PANEL = 'SHAPES_PANEL';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    width: SIDEBAR_WIDTH,
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function MainSidebar(props) {
  const { activePanel, onClick } = props;
  const classes = useStyles();

  const handleSidebarButtonClick = (panel) => {
    onClick(panel);
  };

  return (
    <aside className={classes.sidebar}>
      <Toolbar />
      <SidebarButton
        icon={UploadIcon}
        onClick={() => handleSidebarButtonClick(UPLOADS_PANEL)}
        active={activePanel === UPLOADS_PANEL}
      >
        Uploads
      </SidebarButton>
      <SidebarButton
        icon={VideoIcon}
        onClick={() => handleSidebarButtonClick(VIDEO_PANEL)}
        active={activePanel === VIDEO_PANEL}
      >
        Video
      </SidebarButton>
      <SidebarButton
        icon={ImageIcon}
        onClick={() => handleSidebarButtonClick(IMAGE_PANEL)}
        active={activePanel === IMAGE_PANEL}
      >
        Image
      </SidebarButton>
      <SidebarButton
        icon={AudioIcon}
        onClick={() => handleSidebarButtonClick(AUDIO_PANEL)}
        active={activePanel === AUDIO_PANEL}
      >
        Audio
      </SidebarButton>
      <SidebarButton
        icon={TextIcon}
        onClick={() => handleSidebarButtonClick(TEXT_PANEL)}
        active={activePanel === TEXT_PANEL}
      >
        Text
      </SidebarButton>
      <SidebarButton
        icon={ShapesIcon}
        onClick={() => handleSidebarButtonClick(SHAPES_PANEL)}
        active={activePanel === SHAPES_PANEL}
      >
        Elements
      </SidebarButton>
    </aside>
  );
}
